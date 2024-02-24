from openai import OpenAI
import mysql.connector

client = OpenAI(api_key="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")

def format_description(description):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "\
             Given a summary of a research paper, format the content using Markdown language. \
             Format it by headings and texts in that related to that headings.\
             Provide the formatted Markdown code but without ```mermaid ```, just content inside."},
            {"role": "user", "content": f"{description}"}
        ]
    )
    return response.choices[0].message.content

db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="bhai"
)

cursor = db_connection.cursor(dictionary=True)

cursor.execute("SELECT * FROM publications WHERE bionic_description IS NULL OR bionic_description = ''")
publications = cursor.fetchall()

for publication in publications:
        print("a")
        formatted_description = format_description(publication["description"])

        update_query = "UPDATE publications SET description = %s WHERE id = %s"
        cursor.execute(update_query, (formatted_description, publication["id"]))
        db_connection.commit()

cursor.close()
db_connection.close()
