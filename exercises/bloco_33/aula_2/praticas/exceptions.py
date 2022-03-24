while True:
    try:
        x = int(input("Please enter a number: "))
    except ValueError:
        print("Ooops! Thats not a valid number.")
    else:
        break

try:
    arquivo = open("names.txt", "r")
except OSError:
    print("file not found")
else:
    print("file successfully manipulated")
finally:
    print("trying to open file")

with open("names.txt", "w") as file:
    file.write("Michelle 27\n")

print(file.closed)
