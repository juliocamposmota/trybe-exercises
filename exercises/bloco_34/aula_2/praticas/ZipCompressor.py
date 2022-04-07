from zipfile import ZipFile
from Compressor import Compressor


class ZipCompressor(Compressor):
    def compress(self, file_name):
        with ZipFile(file_name + '.zip', 'w') as zip_file:
            zip_file.write(file_name)
