try:
    file = open("students_grades.txt", "r")

    approved_list = []
    for student in file:
        student_info = student.split()
        print(student_info)

        if int(student_info[1]) >= 6:
            approved_list.append(student_info[0] + '\n')

    print(approved_list)
except OSError:
    print("file not found")
finally:
    file.close()

with open("approved_students.txt", "w") as approved_file:
    approved_file.writelines(approved_list)
