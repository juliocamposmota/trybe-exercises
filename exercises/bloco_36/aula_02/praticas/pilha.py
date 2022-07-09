def sum_factorial(n):
    if n == 1:
        return 1
    else:
        return n + sum_factorial(n - 1)


print(sum_factorial(4))
