"""
Nome da abstração
Televisao

atributos/estados
- volume
- canal
- taxa de aumento de volume
- tamanho
- estado

comportamentos
- aumentar volume
- diminuir volume
- mudar de canal
- ligar/desligar
"""


class Televisao:
    def __init__(self, tamanho):
        self.volume = 10
        self.canal = 21
        self.taxa_volume = 1
        self.tamanho = tamanho
        self.estado = False

    def aumentar_volume(self):
        self.volume += self.taxa_volume

    def diminuir_volume(self):
        self.volume -= self.taxa_volume

    def mudar_canal(self, novo_canal):
        self.canal = novo_canal

    def ligar_ou_desligar(self):
        self.estado = not self.estado


tv_sala = Televisao(32)

print('vol: ', tv_sala.volume)
tv_sala.aumentar_volume()
print('vol: ', tv_sala.volume)
tv_sala.diminuir_volume()
tv_sala.diminuir_volume()
print('vol: ', tv_sala.volume)

tv_sala.mudar_canal(7)
print('assistindo canal: ', tv_sala.canal)

tv_sala.ligar_ou_desligar()
print('estou: ', tv_sala.estado)
