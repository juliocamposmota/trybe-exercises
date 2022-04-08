from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numeros):
        return sum(numeros)/len(numeros)

    @classmethod
    def mediana(cls, numeros):
        numeros.sort()

        index = len(numeros) // 2

        if len(numeros) % 2 == 0:
            return (numeros[index - 1] + numeros[index]) / 2

        return numeros[index]

    @classmethod
    def moda(self, numeros):
        numeros, _ = Counter(numeros).most_common()[0]
        return numeros


notas_aluno = [2, 2, 3, 4, 5, 4, 4]
estatisticas = Estatistica()

media_notas = estatisticas.media(notas_aluno)
mediana_notas = estatisticas.mediana(notas_aluno)
moda_notas = estatisticas.moda(notas_aluno)

print(media_notas)
print(mediana_notas)
print(moda_notas)
