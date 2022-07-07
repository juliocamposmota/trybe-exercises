def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'

    for number in numbers:
        if(previous_number == number):
            return True

        previous_number = number
    return False


if __name__ == "__main__":
    best_numbers = [1, 1, 2]
    best_result = contains_duplicate(best_numbers)
    print(best_result)

    average_numbers = [1, 2, 3, 4, 4]
    average_result = contains_duplicate(average_numbers)
    print(average_result)

    worst_numbers = [1, 2, 3, 4, 5]
    worst_result = contains_duplicate(worst_numbers)
    print(worst_result)

    """
    Analisando a primeira parte do nosso algoritmo, percebe-se que
    independente de qualquer cenário o array de entrada sempre vai fazer a
    ordenação dos seus elementos através do método sort() nativo do Python.
    Estudando sua documentação, é visto que sua complexidade é O(n log n).

    Na segunda parte do nosso algoritmo, é constatado que no pior caso o
    looping percorrerá todos os elementos do array. Sendo assim, sua
    complexidade de tempo pode ser definida como O(n).

    Portanto, como simplificação podemos dizer que a complexidade de tempo do
    algoritmo inteiro é de O(n log n) + O(n) = O(n log n).

    A complexidade de espaço é definida como O(1), pois em todos os casos a
    saída sempre será um booleano.
    """
