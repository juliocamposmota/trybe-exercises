from ZipCompressor import ZipCompressor
from SalesReportCSV import SalesReportCSV
from SalesReportJSON import SalesReportJSON

daily_report_json = SalesReportJSON('daily_report')
daily_report_json.serialize()
json_size = daily_report_json.get_length()
print(json_size)

daily_report_csv = SalesReportCSV('daily_report')
daily_report_csv.serialize()
csv_size = daily_report_csv.get_length()
print(csv_size)

relatorio_compras = SalesReportJSON('rel_compras_abr')
relatorio_vendas = SalesReportJSON('rel_vendas_abr', ZipCompressor)

relatorio_compras.compress()
relatorio_vendas.compress()
