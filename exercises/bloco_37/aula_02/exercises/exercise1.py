def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0

    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time

    return max_time


first_collected_values = [0, 1, 1, 1, 0, 0, 1, 1]
second_collected_values = [1, 1, 1, 1, 0, 0, 1, 1]

print(verify_max_time_ok(first_collected_values))
print(verify_max_time_ok(second_collected_values))

# Complexidade 0(n)
