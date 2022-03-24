import sys

print("O resultado é", 42)
print("Os resultado são", 6, 23, 42)

print("Maria", "João", "Miguel", "Ana")
print("Maria", "João", "Miguel", "Ana", sep=", ")

print("Em duas ")
print("linhas.")

print("Na mesma", end="")
print("linha.")

err = "Arquivo não encontrado"
print(f"Error: {err}", file=sys.stderr)

x = 5
y = 3

print(f"{x} / {y} = {x / y:.5f}")
print(f"{x:.^3}")

print("first %s then %s" % ("one", "two"))  # old
print("first {} then {}".format("one", "two"))  # new

print("%d plus %d" % (1, 2))  # old
print("{} plus {}".format(1, 2))  # new
