def encontra_maior(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior = encontra_maior(lista, tamanho - 1)

        if maior > lista[tamanho - 1]:
            return maior
        else:
            return lista[tamanho - 1]


def maior_inteiro(lista):
    tamanho = len(lista)
    return encontra_maior(lista, tamanho)


minha_lista = [0, 1, 7, 5, 4, 5, -1]

print(maior_inteiro(minha_lista))
