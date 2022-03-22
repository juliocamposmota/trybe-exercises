def get_biggest_name(name_list):
    biggest_name = name_list[0]
    for name in name_list:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


name_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
biggest_name = get_biggest_name(name_list)
print(biggest_name)
