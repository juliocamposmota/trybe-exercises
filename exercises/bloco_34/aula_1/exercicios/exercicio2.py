"""
Nome da abstração
Triângulo

atributos/estados
- base (tamanho)
- altura (tamanho)
- aresta (quantidade)
- vertice (quantidade)

comportamentos
- calcular area | (b * h)/2
- informar quantidade de arestas
- informar quantidade de vertices
"""


class Triangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
        self.arestas = 3
        self.vertices = 3

    def calcular_area(self):
        return (self.base * self.altura)/2

    def quantidade_arestas(self):
        return self.arestas

    def quantidade_vertices(self):
        return self.vertices


r1 = Triangulo(5, 10)

area = r1.calcular_area()
arestas = r1.quantidade_arestas()
vertices = r1.quantidade_vertices()

print(area)
print(arestas)
print(vertices)
