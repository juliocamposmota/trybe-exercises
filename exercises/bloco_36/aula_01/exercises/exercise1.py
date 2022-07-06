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

    # complexidade de tempo O(1)
    # complexidade de espaço O(1)

    average_numbers = [1, 2, 3, 4, 4]
    average_result = contains_duplicate(average_numbers)
    print(average_result)

    # complexidade de tempo O(n)
    # complexidade de espaço O(1)

    worst_numbers = [1, 2, 3, 4, 5]
    worst_result = contains_duplicate(worst_numbers)
    print(worst_result)

    # complexidade de tempo O(n)
    # complexidade de espaço O(1)
