import mysql.connector
from bs4 import BeautifulSoup
import re
import os
from dotenv import load_dotenv
import requests
import json

load_dotenv()

connection = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_DATABASE")
)

cursor = connection.cursor()

def insert_publication(title, subtitle, authors, short_description, description, date, cite_number, pdf_link, publication_id, categories):
    insert_query = """
        INSERT INTO publications (title, subtitle, authors, short_description, description, date, cite_number, pdf_source, publication_id, categories)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    data = (title, subtitle, authors, short_description, description, date, cite_number, pdf_link, publication_id, json.dumps(categories))
    cursor.execute(insert_query, data)
    connection.commit()
    print(f"Publication inserted into the database: {title}")
    print("=" * 50)

def scrape_subtitle(publication):
    subtitle_element = publication.find('div', class_='col-12 col-sm')
    subtitle = subtitle_element.text.strip() if subtitle_element else ""
    return subtitle

def scrape_page(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        publications = soup.find_all('div', class_='card brand-box-light')

        for publication in publications:
            title_element = publication.find('a', class_='card-link')
            title = title_element.text.strip()
            publication_id = re.search(r'/publikacije/(\w+)', title_element['href']).group(1)

            select_query = "SELECT id FROM publications WHERE publication_id = %s"
            cursor.execute(select_query, (publication_id,))
            existing_publication = cursor.fetchone()

            if existing_publication:
                print(f"Publication with ID '{publication_id}' already exists in the database. Skipping insertion.")
            else:
                authors_element = publication.find('div', class_='publication_author')
                authors = ', '.join(author.text.strip() for author in authors_element.find_all('span', class_='text-nowrap'))

                description_element = publication.find('p', class_='card-short-description')
                description = description_element.text.strip()

                short_description = description

                date_element = publication.find('div', class_='card-date')
                date = date_element.text.strip()

                cite_number_element = publication.find('span', class_='me-2')
                cite_number = cite_number_element.text.strip() if cite_number_element else "N/A"

                pdf_link_element = publication.find('a', class_='btn btn-brand-light btn-custom white')
                pdf_link = pdf_link_element['href'] if pdf_link_element else "N/A"

                publication_url = title_element['href']
                subtitle = scrape_subtitle(publication)

                publication_soup = scrape_publication(publication_url)
                category_element = publication_soup.select_one('.main.nav .btn-custom.noclick')

                if category_element:
                    category = category_element.text.strip()
                else:
                    category_element_main = soup.select_one('.main.nav .btn-custom.noclick')
                    if category_element_main:
                        category = category_element_main.text.strip()
                    else:
                        category = "N/A"

                insert_publication(title, subtitle, authors, short_description, description, date, cite_number, pdf_link, publication_id, [category])

    return soup 

def scrape_publication(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        return soup
    else:
        return None

url = "https://akademskiimenik.ba/publikacije?page=1"

max_pages = 1

page_count = 0
while url and (page_count < max_pages):
    soup = scrape_page(url)

    next_page_element = soup.select_one('.pagination .page-item.active + .page-item a')
    url = next_page_element['href'] if next_page_element else None

    page_count += 1

cursor.close()
connection.close()
