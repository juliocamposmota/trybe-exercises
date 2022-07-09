def count_pairs(number):
    if number == 1:
        return 0
    elif number % 2 == 0:
        return 1 + count_pairs(number - 1)
    else:
        return count_pairs(number - 1)


my_number = 15

print(count_pairs(my_number))
