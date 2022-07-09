def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))

"""
No primeiro loopin do algoritmo, a ordem de complexidade é O(n) - lienar - de
acordo com a documentação do método max() - nativo do python.

O segundo looping do algoritmo também dependen do tamanho da entrada do array
candies. Portanto sua ordem de complexidade também é O(n) - linear.

Sendo assim a ordem de complexidade do algoritmo pode ser simplificada por
O(n) - linear.

A complexidade de tempo também é O(n) - linear - pois o array de retorno será
do tamanho do array candies de entrada.
"""
