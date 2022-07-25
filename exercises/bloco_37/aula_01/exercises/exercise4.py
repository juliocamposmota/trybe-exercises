from time import sleep
from subprocess import check_output


while True:
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

    sleep(1)
