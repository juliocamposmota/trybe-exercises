import sys
import random

random_number = random.randint(1, 10)
guess = ""

while guess != random_number:
    guess = int(input("Qual o seu palpite? "))

print("O número sorteado era: ", guess)

if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)
