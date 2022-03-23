import json

with open("pokemons.json") as pokemon_file:
    pokemons_content = pokemon_file.read()
    pokemons = json.loads(pokemons_content)["results"]

print(pokemons[0])

with open("pokemons.json") as pokemon_file:
    pokemons = json.load(pokemon_file)["results"]

print(pokemons)
