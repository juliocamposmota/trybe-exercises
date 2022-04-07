class Television:
    def __init__(self, volume, canal, tamanho, ligada):
        self.__volume = volume
        self.__canal = canal
        self.__tamanho = tamanho
        self.__ligada = ligada

    def aumentar_volume(self):
        if self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume >= 0:
            self.__volume -= 1

    def modificar_canal(self, novo_canal):
        if 1 >= self.__canal <= 99:
            self.__canal = novo_canal
        else:
            raise ValueError('Canal indisponível')

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
