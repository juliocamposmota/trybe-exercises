from GzCompressor import GzCompressor
from abc import ABC, abstractclassmethod


class SalesReport(ABC):
    def __init__(self, export_file, compressor=GzCompressor()):
        self.export_file = export_file
        self.compressor = compressor

    def build(self):
        # lógica sendo omitida dos exemplos
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    FILE_EXTENSION = '.json'

    def get_export_file_name(self):
        return self.export_file + self.FILE_EXTENSION

    def compress(self):
        self.serialize()
        self.compressor.compress(self.get_export_file_name())

    @abstractclassmethod
    def serialize(self):
        raise NotImplementedError

    @abstractclassmethod
    def get_length(self):
        raise NotImplementedError
