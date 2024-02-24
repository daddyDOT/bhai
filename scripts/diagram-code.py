from openai import OpenAI
import os
from dotenv import load_dotenv
import mysql.connector

load_dotenv()

client = OpenAI(api_key="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")

def generate_mermaid_code(description):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Given a research paper, please create a Mermaid diagram code that accurately represents the key findings, methodologies, and conclusions of the study. The diagram should include the main components of the research, such as objectives, methodologies, results, and conclusions, as well as any significant figures or tables. Avoid long sentences. Additionally, incorporate styling elements to make the diagram visually appealing, such as using different shapes for nodes, customizing connector styles, adding labels to connectors, utilizing theming, and experimenting with layouts.\
Stick with basic colors and ensure that text is readable.\
Only provide code, don't give any comments. JUST CODE. Ensure that the generated code accurately reflects the information in the research paper without adding any information that is not present in the research that is provided, and adheres to the stylistic guidelines provided by Mermaid's documentation on syntax, block configurations, and theming. Do not overcomplicate the code, make it simple.  Here's the research:"},
            {"role": "user", "content": f"{description}"}
        ]
    )
    return response.choices[0].message.content

db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="bhai"
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_DATABASE")
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
