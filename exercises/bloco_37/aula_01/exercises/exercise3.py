from subprocess import check_output


# processador
cpu_data = check_output("lscpu").decode("UTF-8").split("\n")
cpu_info = {
    "model name": "Modelo",
    "cpu(s)": "Cores",
    "cpu mhz": "Velocidade (MHz)",
    "l1d": "Cache L1d",
    "l1i": "Cache L1i",
    "l2": "Cache L2",
    "l3": "Cache L3",
}

for info_name, info_description in cpu_info.items():
    for information in cpu_data:
        if information.lower().startswith(info_name):
            information = information.split("  ")
            information = information[-1].strip()
            print(f"{info_description}: {information}")

# memória
memory_info = [
    information
    for information in check_output("free")
    .decode("UTF-8")
    .split("\n")[1]
    .split("  ")
    if information != ""
]

total_memory = int(memory_info[1]) / 1000
used_memory = int(memory_info[2]) / 1000

print(
    f"Memória Total: {total_memory:.0f}MB\n"
    f"Memória Utilizada: {used_memory:.0f}MB"
)
