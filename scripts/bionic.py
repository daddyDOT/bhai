import mysql.connector
import os
from dotenv import load_dotenv 
import re

load_dotenv()

 
connection = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_DATABASE")
)

cursor = connection.cursor()
select_query = "SELECT publication_id, description FROM publications"
cursor.execute(select_query)
publications = cursor.fetchall()

for publication_id, description in publications:

    if not description:
        print(f"Description is empty for publication {publication_id}. Skipping.")
        continue
 
    lines = description.split('\n')
    new_words = []
    new_text = ""
    new_text2 = ""

    for line in lines: 
        if line.startswith('#'):
            new_text += "\n" + line + '\n'
            continue
        else:     
            line = line.replace(",", "")
            words = line.split()    

            print("\n")
            for word in words:
                if re.match(r'^[a-zA-Z0-9.]+$', word):
                    if len(word) %   2 ==   0:
                        half_length = len(word) //   2
                        first_half = word[:half_length]
                        second_half = word[half_length:]
                        new_word = f"**{first_half}**{second_half}"
                        new_words.append(new_word)
                    else:
                        half_length = len(word) //   2
                        first_half = word[:half_length +   1]
                        second_half = word[1 + half_length:]   
                        new_word = f"**{first_half}**{second_half}"
                        new_words.append(new_word)
                else: 
                    new_words.append(word)
            new_text2 = " ".join(new_words)
            new_text += new_text2
            new_words =  []
    
        
     
    sql = "UPDATE publications SET bionic_description = %s WHERE publication_id = %s;"
    cursor.execute(sql, (new_text, publication_id))
    connection.commit() 