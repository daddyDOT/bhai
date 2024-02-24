import requests
from bs4 import BeautifulSoup

url = "https://akademskiimenik.ba/publikacije"
 
response = requests.get(url)
 
if response.status_code == 200: 
    soup = BeautifulSoup(response.text, 'html.parser')
     
    html_content = str(soup)
 
    print(html_content)

else:
    print(f"Cannot GET page. Status code: {response.status_code}")