names_file = open("names.txt", mode="r")

names_content = names_file.read()

print(names_content)

names_file.close()

# ----------------------------------------------------------------

olamundo_file = open("olamundo.txt", mode="r")

for line in olamundo_file:
    print(line)

olamundo_file.close()

# ----------------------------------------------------------------

byte_file = open("bytefile.dat", mode="rb")

byte_content = byte_file.read()

print(byte_content)

byte_file.close()
