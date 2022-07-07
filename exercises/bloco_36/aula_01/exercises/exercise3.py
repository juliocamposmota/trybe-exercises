import random


def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average/n
        list_of_averages.append(average)

    return list_of_averages


"""
Independente do tamanho de n, o primeiro looping sempre tera tamanho e tempo
de processamento constantes. Por isso sua ordem de complexidade de tempo pode
ser definida como O(n) - linear - aqui foi desprezado a ordem O(1) - constante.

Já a complexidade de espaço é definida como O(1) - constante - pois o retorno
será sempre um array de 100 elementos.
"""
