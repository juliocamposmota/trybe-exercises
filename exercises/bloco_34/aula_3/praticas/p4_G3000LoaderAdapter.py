class G3000LoaderAdapter:
    def __init__(self, loader):
        self.loader = loader

    def load_data(self, loader):
        return [zip(loader.header, row) for row in loader.rows]
