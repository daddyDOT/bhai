const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");
const OpenAI = require("openai");
const app = express();
require("dotenv").config(); // Load environment variables

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bhaaas",
});

connection.connect();

app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM publications";
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.status(200).json(results);
  });
});

app.get("/api/data/:publication_id", (req, res) => {
  const publicationId = req.params.publication_id;
  const query = `
    SELECT * 
    FROM publications 
    LEFT JOIN translations ON translations.publication_id = publications.id 
    WHERE publications.publication_id = ?
  `;

  connection.query(query, [publicationId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: "Publication not found" });
      return;
    }

    // Group translations by language
    const groupedTranslations = results.reduce((acc, curr) => {
      const language = curr.language;
      if (!acc[language]) {
        acc[language] = [];
      }
      acc[language].push({ content: curr.content });
      return acc;
    }, {});

    // Combine main publication details with grouped translations
    const mainPublication = {
      id: results[0].id,
      title: results[0].title,
      authors: results[0].authors,
      description: results[0].description,
      date: results[0].date,
      cite_number: results[0].cite_number,
      bionic_description: results[0].bionic_description,
      pdf_source: results[0].pdf_source,
      publication_id: publicationId,
      categories: results[0].categories,
      mermaid_code: results[0].mermaid_code,
      languages: Object.keys(groupedTranslations),
      translations: groupedTranslations,
    };

    res.status(200).json(mainPublication);
  });
});

const basePath = "../data/audio-en/";

app.get("/api/audio/:language/:publication_id", (req, res) => {
  const language = req.params.language;
  const publicationId = req.params.publication_id;

  const filePath = path.join(__dirname, basePath, `${publicationId}.mp3`);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

// Add your OpenAI API key here

// Create an instance of the OpenAI class
const openai = new OpenAI({
  key: "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",
});

app.post("/api/assistant", async (req, res) => {
  const question = req.body.question;
  const publicationId = req.body.publication_id;

  try {
    const pdfPath = `../data/pubpdfs/${publicationId}.pdf`;
    const dataBuffer = fs.readFileSync(pdfPath);

    const data = await pdf(dataBuffer);
    const textContent = data.text;
    const isTermPresent = textContent.includes("");

    console.log(`Question: ${question}`);
    console.log(`Is term present: ${isTermPresent}`);

    if (isTermPresent) {
      console.log(`Found "${publicationId}" in the PDF.`);

      // Extract relevant sentences around the term
      const sentences = textContent.split(/[.!?]/);

      const contextSentences = sentences
        .filter((sentence) => sentence.includes(""))
        .map((sentence) => sentence.trim());

      if (contextSentences.length > 0) {
        console.log(`Relevant sentences: ${contextSentences}`);

        // Use OpenAI for generating responses
        try {
          const openaiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Use the appropriate model
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: `Question: ${question}` },
              // Each sentence is passed as a separate message
              ...contextSentences.map((sentence) => ({
                role: "assistant",
                content: `Context: ${sentence}`,
              })),
            ],
            max_tokens: 100,
          });

          const assistantResponse =
            openaiResponse.choices && openaiResponse.choices[0]?.text?.trim();
          console.log(assistantResponse);
          res.status(200).json({
            success: true,
            data: {
              publicationId,
              content: contextSentences,
              assistantResponse,
            },
          });
        } catch (openaiError) {
          console.error("OpenAI API Error:", openaiError);
          res.status(500).json({
            success: false,
            message: "Error with OpenAI API",
          });
        }
      } else {
        console.log(`No relevant sentences found for "${publicationId}"`);
        res
          .status(404)
          .json({ success: false, message: "No relevant sentences found" });
      }
    } else {
      console.log(`"${publicationId}" not found in the PDF.`);
      res
        .status(404)
        .json({ success: false, message: "Publication not found in the PDF" });
    }
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/api/suggested/publications/:publication_id", async (req, res) => {
  const publicationId = req.params.publication_id;

  try {
    // Fetch the publication's category
    connection.query(
      "SELECT categories FROM publications WHERE publication_id = ?",
      [publicationId],
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Internal server error.");
        }

        if (results.length === 0) {
          return res.status(404).send("Publication not found.");
        }

        const categories = JSON.parse(results[0].categories || "[]");

        // Now, fetch other publications with the same category
        connection.query(
          "SELECT * FROM publications WHERE JSON_CONTAINS(categories, ?)",
          [JSON.stringify(categories)],
          (err, data) => {
            if (err) {
              console.error(err);
              return res.status(500).send("Internal server error.");
            }

            if (data.length > 0) {
              // Send the list of suggested publications
              res.status(200).json(data);
            } else {
              res.status(404).send("No related publications found.");
            }
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error.");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
