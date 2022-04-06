"""
Nome da abstração
Círculo

atributos/estados
- raio
- PI

comportamentos
- calcular area | PI * raio^2
- calcular perimetro | 2 * PI * raio
"""


class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return self.PI * (self.raio ** 2)

    def calcular_perimetro(self):
        return 2 * self.PI * self.raio


c1 = Circulo(5)

area = c1.calcular_area()
perimetro = c1.calcular_perimetro()

print(area)
print(perimetro)
