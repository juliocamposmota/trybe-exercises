nums = input("Digite os números deseja somar separados pro espaço: ")

numsArr = nums.split(" ")

sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"{num} não é um número natural, portanto não entrou na soma.")
    else:
        sum += int(num)

print(f"Soma: {sum}")
