import os
import mysql.connector
import openai
from openai import OpenAI
from pathlib import Path
import json

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

def text_to_speech(text, voice, model, output_file_path):
    if os.path.exists(output_file_path):
        print(f"MP3 file for {output_file_path} already exists. Skipping.")
        return
    
    response = client.audio.speech.create(
        model=model,
        voice=voice,
        input=text
    )
    with open(output_file_path, 'wb') as f:
        f.write(response.content)
    print(f"Text-to-speech conversion complete. Output saved to {output_file_path}")

def process_publications():
    voice = "alloy"  # Example voice selection
    model = "tts-1"  # Example model selection for real-time use
    
    select_query = "SELECT publication_id, description FROM publications"
    cursor.execute(select_query)
    publications = cursor.fetchall()
    
    # Define the directory where MP3 files will be saved
    audio_directory = Path(__file__).parent / "../data/audio"
    audio_directory.mkdir(parents=True, exist_ok=True)  # Ensure the directory exists
    
    for publication_id, description in publications:
        if not description:
            print(f"Description is empty for publication {publication_id}. Skipping.")
            continue
        
        # Use publication_id as the file name and save in the specified directory
        speech_file_path = audio_directory / f"{publication_id}.mp3"
        text_to_speech(description, voice, model, speech_file_path)

# Process publications
process_publications()

# Close database connection
cursor.close()
connection.close()
