import requests


response = requests.get("https://www.betrybe.com/")

print(response.status_code)
print(response.headers["Content-Type"])
print(response.text)
