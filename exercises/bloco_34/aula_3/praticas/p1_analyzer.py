import analyzer


def analyze_data(token, database, data):
    try:
        report = analyzer.complete_report(data)
        database.count_request(token)
        return report
    except analyzer.InvalidDataException:
        return
