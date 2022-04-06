from SalesReportCSV import SalesReportCSV
from SalesReportJSON import SalesReportJSON

daily_report_json = SalesReportJSON('daily_report')
daily_report_json.serialize()

daily_report_csv = SalesReportCSV('daily_report')
daily_report_csv.serialize()
