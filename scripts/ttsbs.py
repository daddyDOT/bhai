import os
import mysql.connector
from gtts import gTTS
from playsound import playsound
from dotenv import load_dotenv
from pathlib import Path

load_dotenv()

# Initialize the database connection
connection = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_DATABASE")
)
cursor = connection.cursor()

def text_to_speech(text, output_file_path):
    # Convert text to speech using gtts
    tts = gTTS(text=text, lang='bs')  # 'bs' is the language code for Bosnian
    tts.save(output_file_path)
    print(f"Text-to-speech conversion complete. Output saved to {output_file_path}")

def process_publications():
    # Define the directory where MP3 files will be saved
    audio_directory = Path(__file__).parent / "../data/audio-bs"
    audio_directory.mkdir(parents=True, exist_ok=True)  # Ensure the directory exists
    
    # Execute a query to fetch data from the database
    select_query = "SELECT publication_id, description FROM publications"
    cursor.execute(select_query)
    publications = cursor.fetchall()
    
    for publication_id, description in publications:
        if not description:
            print(f"Description is empty for publication {publication_id}. Skipping.")
            continue
        
        # Use publication_id as the file name and save in the specified directory
        speech_file_path = audio_directory / f"{publication_id}.mp3"
        text_to_speech(description, speech_file_path)

# Process publications
process_publications()

# Close database connection
cursor.close()
connection.close()
