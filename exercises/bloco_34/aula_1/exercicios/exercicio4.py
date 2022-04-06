"""
Nome da abstração
Pedido

atributos/estados
- cliente
- itens
- pagamento
- desconto

comportamentos
- calcular total
- calcular total com descontos

------------------------------

Nome da abstração
item

atributos/estados
- nome
- preco

comportamentos
- alterar preco

"""


class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def alterar_preco(self, novo_preco):
        self.preco = novo_preco


class Pedido:
    def __init__(self, cliente, itens, pagamento, desconto):
        self.cliente = cliente
        self.itens = itens
        self.pagamento = pagamento
        self.desconto = desconto

    def calcular_total(self):
        total = 0

        for item in self.itens:
            total += item.preco

        return total

    def calcular_total_com_descontos(self):
        return self.calcular_total() * (1 - self.desconto)


cachorro_quente = Item('cachorro_quente', 4.00)
guarana_1l = Item('guarana_1l', 7.00)

pedido1 = Pedido('Paixões', [cachorro_quente, guarana_1l], 'Pix', 0.1)

valor_total = pedido1.calcular_total()
valor_descontado = pedido1.calcular_total_com_descontos()

print(valor_total)
print(valor_descontado)
