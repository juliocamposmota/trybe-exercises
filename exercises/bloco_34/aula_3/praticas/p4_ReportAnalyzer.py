class ReportAnalyzer:
    def __init__(self, loader):
        self.loader = loader

    def average(self):
        data = self.load.load_data()
        total = sum(order['final_price'] for order in data)
        return total / len(data)
