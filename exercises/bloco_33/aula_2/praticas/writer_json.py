import json

with open("pokemons.json") as pokemon_file:
    pokemons = json.load(pokemon_file)["results"]

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("pokemons_grass.json", "w") as pokemon_file:
    json_to_write = json.dumps(grass_type_pokemons)

    pokemon_file.write(json_to_write)

with open("pokemons.json") as pokemon_file:
    pokemons = json.load(pokemon_file)["results"]

eletric_type_pokemons = [
  pokemon for pokemon in pokemons if "Electric" in pokemon["type"]
]

with open("pokemons_electric.json", "w") as pokemon_file:
    pokemons = json.dump(eletric_type_pokemons, pokemon_file)
