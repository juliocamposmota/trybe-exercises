def count_pairs(number):
    counter = 0

    for digit in range(number + 1):
        if digit % 2 == 0 and digit != 0:
            counter += 1

    return counter


my_array = 16

print(count_pairs(my_array))
