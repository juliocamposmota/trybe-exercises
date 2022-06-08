from random import choice
from lightsaber import LightSaber
from personagem import Personagem


class Jedi(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.light_saber = LightSaber("Verde", 50)

    def defender(self):
        defesa = choice([True, False])

        if defesa:
            print(f"{self.nome} defendeu o ataque")

        return defesa

    def contra_acatar(self, personagem):
        personagem.set_hp(self.light_saber.intensity)
        print(f"{self.nome} contra atacou {personagem.nome}")

    def falar(self):
        return("May the force be with you.")


class Sith(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.light_saber = LightSaber("vermelho", 50)

    def atacar(self, personagem):
        if not personagem.defender():
            personagem.set_hp(self.light_saber.intensity)
            print(f"{self.nome} atacou {personagem.nome}")

    def falar(self):
        return("Come to the Dark side!")
