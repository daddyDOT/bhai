const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
