import csv
import mysql.connector
import os
from dotenv import load_dotenv
load_dotenv()

# Connect to your MySQL database
conn = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_DATABASE")
)
cursor = conn.cursor()

# Create the authors table if it doesn't exist
cursor.execute('''
    CREATE TABLE IF NOT EXISTS authors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        semantic_id VARCHAR(255),
        url VARCHAR(255),
        category VARCHAR(255)
    )
''')

# Read the CSV file and insert data into the authors table
with open('../data/authors.csv', 'r', newline='', encoding='utf-8') as csvfile:
    csv_reader = csv.DictReader(csvfile)
    for row in csv_reader:
        name = row['name']
        semantic_id = row['SemanticID']
        url = row['url']
        category = row['category']

        # Insert data into the authors table
        cursor.execute('''
            INSERT INTO authors (name, semantic_id, url, category)
            VALUES (%s, %s, %s, %s)
        ''', (name, semantic_id, url, category))

# Commit the changes and close the connection
conn.commit()
conn.close()
