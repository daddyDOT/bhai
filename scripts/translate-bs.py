from openai import OpenAI
import os
from dotenv import load_dotenv
import mysql.connector

load_dotenv()

client = OpenAI(api_key="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")

def format_description(description):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Translate the following research paper description from English to Bosnian:\
Research paper description:"},
            {"role": "user", "content": f"{description}"}
        ]
    )
    return response.choices[0].message.content

db_connection = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_DATABASE")
)

cursor = db_connection.cursor(dictionary=True)

cursor.execute("SELECT * FROM publications WHERE id NOT IN (SELECT publication_id FROM translations WHERE language = 'Bosnian')")
publications = cursor.fetchall()

for publication in publications:
    if publication["description"]:
        translated_description = format_description(publication["description"])

        insert_query = "INSERT INTO translations (publication_id, language, content) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (publication["id"], "Bosnian", translated_description))
        db_connection.commit()

cursor.close()
db_connection.close()
