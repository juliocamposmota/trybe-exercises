import csv

with open("balneabilidade.csv") as file:
    beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = beach_status_reader

# agrupa campanhas e suas respectivas balneabilidades
bathing_by_campaing = {}
for row in data:
    campaing = row[6]
    bathing = row[2]

    if campaing not in bathing_by_campaing:
        bathing_by_campaing[campaing] = {
          "Própria": 0,
          "Imprópria": 0,
          "Muito Boa": 0,
          "Indisponível": 0,
          "Satisfatória": 0,
        }

    bathing_by_campaing[campaing][bathing] += 1

with open("report_by_campaing.csv", "w") as file:
    writer = csv.writer(file)

    headers = [
        "Campanha",
        "Própria",
        "Imprópria",
        "Muito Boa",
        "Indisponível",
        "Satisfatória",
    ]

    writer.writerow(headers)

    for campaing, bathing in bathing_by_campaing.items():
        row = [campaing, *bathing.values()]
        writer.writerow(row)

with open("balneabilidade.csv") as file:
    beach_status_reader = csv.DictReader(file, delimiter=",", quotechar='"')

    bathing_by_campaing = {}
    for row in beach_status_reader:
        print(row)
        campaing = row["numero_boletim"]
        bathing = row["categoria"]

        if campaing not in bathing_by_campaing:
            bathing_by_campaing[campaing] = {
              "Própria": 0,
              "Imprópria": 0,
              "Muito Boa": 0,
              "Indisponível": 0,
              "Satisfatória": 0,
            }

        bathing_by_campaing[campaing][bathing] += 1

with open("report_by_campaing_dict.csv", "w") as file:
    header = [
      "Campanha",
      "Própria",
      "Imprópria",
      "Muito Boa",
      "Indisponível",
      "Satisfatória",
    ]

    writer = csv.DictWriter(file, fieldnames=header)

    for campaing, bathing in bathing_by_campaing.items():
        row = {"Campanha": campaing, **bathing}
        writer.writerow(row)
