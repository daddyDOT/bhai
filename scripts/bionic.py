import mysql.connector
import os
import openai
from openai import OpenAI
from pathlib import Path
import json
import re

# Initialize the OpenAI client
client = openai.OpenAI(api_key='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')

# Database connection setup
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="bhai"
)

cursor = connection.cursor()
select_query = "SELECT publication_id, description FROM publications"
cursor.execute(select_query)
publications = cursor.fetchall()

for publication_id, description in publications:

    if not description:
        print(f"Description is empty for publication {publication_id}. Skipping.")
        continue

    # Split the description into lines
    lines = description.split('\n')
    new_words = []
    new_text = ""

    for line in lines:
        # Skip lines that start with a '#' (headers)
        if line.startswith('#'):
            new_text = new_text + '\n' + line + '\n'
            continue
        else:    
            # Remove commas from the line
            line = line.replace(",", "")
            words = line.split()    

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
                    # If the word does not match the criteria, add it as is
                    new_words.append(word)
        new_text2 = " ".join(new_words)
        new_text += new_text2
    # Here you can update the database with new_text for the given publication_id
    sql = "UPDATE publications SET bionic_description = %s WHERE publication_id = %s;"
    cursor.execute(sql, (new_text, publication_id))
    connection.commit()
    



# NACIN NA KOJI SE PRIMA MARKDOWN:

#    <div id="markdown">*bea*utiful</div> --- tekst
#    <script>
#        document.addEventListener("DOMContentLoaded", function() {
#            var markdownElement = document.getElementById("markdown");
#            markdownElement.innerHTML = markdownElement.innerHTML.replace(/\*([^*]+)\*/g, "<strong>$1</strong>");
#        });
#    </script> 
