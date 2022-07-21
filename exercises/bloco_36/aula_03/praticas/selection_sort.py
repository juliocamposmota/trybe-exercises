def selection_sort(numbers):
    n = len(numbers)  # Quantidade de elementos da lista

    for index in range(n - 1):
        min_element_index = index

        for search_index in range(index + 1, n):
            if numbers[search_index] < numbers[min_element_index]:
                min_element_index = search_index

        # Troca os elementos de posição
        current_element = numbers[index]
        numbers[index] = numbers[min_element_index]
        numbers[min_element_index] = current_element

    return numbers


numbers = [7, 5, 9, 2, 6, 8]
print(f"Lista inicial: {numbers}")
ordered_numbers = selection_sort(numbers)
print(f"Lista final: {ordered_numbers}")


# Outra forma de usar

# def search(numbers, start, end):
#     min_element = numbers[start]
#     min_index = start

#     for i in range(start + 1, end):
#         if numbers[i] < min_element:
#             min_element = numbers[i]
#             min_index = i

#     return min_index

# def selection_sort(numbers):
#     n = len(numbers)

#     for i in range(n - 1):
#         min_index = search(numbers, i, n)

#         numbers[i], numbers[min_index] = numbers[min_index], numbers[i]

#     return numbers
