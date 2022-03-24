names_file = open("names.txt", mode="w")

names_file.write("nome idade\n")
names_file.write("Maria 45\n")
names_file.write("Miguel 39\n")

print("Júlio 30", file=names_file)

lines = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
names_file.writelines(lines)

names_file.close()

# ----------------------------------------------------------------

olamundo_file = open("olamundo.txt", mode="w")

lines = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]

olamundo_file.writelines(lines)
olamundo_file.close()

# ----------------------------------------------------------------

byte_file = open("bytefile.dat", mode="wb")

byte_file.write(b"C\xc3\xa1ssio 30")

byte_file.close()
