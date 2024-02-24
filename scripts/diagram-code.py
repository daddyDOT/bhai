from openai import OpenAI
import mysql.connector

client = OpenAI(api_key="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")

def generate_mermaid_code(description):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Based on the summary of the research paper and the recommendation for the diagram, generate Mermaid code that visually represents the key elements, connections, and conclusions of the research. Mermaid is a simple diagram-drawing language commonly used for visualizing information in a textual format."},
            {"role": "user", "content": f"{description}"}
        ]
    )
    return response.choices[0].message.content

db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="bhaaas"
)

cursor = db_connection.cursor(dictionary=True)

cursor.execute("SELECT * FROM publications WHERE mermaid_code IS NULL OR mermaid_code = ''")
publications = cursor.fetchall()

for publication in publications:
  if not publication["mermaid_code"] and publication["description"]:
      mermaid_code = generate_mermaid_code(publication["description"])

      update_query = "UPDATE publications SET mermaid_code = %s WHERE id = %s"
      cursor.execute(update_query, (mermaid_code, publication["id"]))
      db_connection.commit()

cursor.close()
db_connection.close()
