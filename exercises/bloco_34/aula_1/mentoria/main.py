from personagem import Personagem
from jedisith import Jedi, Sith


personagem1 = Personagem("Padmé", "Humana", 40, 160, 50)
personagem2 = Jedi("Luke", "Human", 80, 180, 100)
personagem3 = Sith("Darth Vader", "Human", 130, 210, 130)

print("---Personagens---")
print(f"{personagem1.nome}: {personagem1.falar()}")
print(f"{personagem2.nome}: {personagem2.falar()}")
print(f"{personagem3.nome}: {personagem3.falar()}")

print("---Round 1---")
print("Darth Vader iniciou o ataque!")
personagem3.atacar(personagem2)
personagem2.contra_acatar(personagem3)
