import requests
from bs4 import BeautifulSoup

def scrape_linkedin_profile(profile_url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    
    response = requests.get(profile_url, headers=headers)
    if response.status_code != 200:
        return {'error': 'Failed to retrieve profile'}

    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Example: Extracting the profile name
    name_tag = soup.find('h1', {'class': 'top-card-layout__title'})
    name = name_tag.get_text(strip=True) if name_tag else 'Name not found'
    
    # Add more scraping logic here to extract other profile details

    return {
        'name': name,
        # Add other extracted details here
    }

if __name__ == "__main__":
    profile_url = 'https://www.linkedin.com/in/some-profile/'
    data = scrape_linkedin_profile(profile_url)
    print(data) 