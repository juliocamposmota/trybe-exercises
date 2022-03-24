import csv

with open("balneabilidade.csv") as file:
    beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = beach_status_reader
    # print(data)

a, b = "cd"
print(a)
print(b)

head, *tail = [1, 2, 3]
print(head)
print(tail)
