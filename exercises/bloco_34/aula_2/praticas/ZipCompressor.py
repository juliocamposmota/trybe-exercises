from zipfile import ZipFile
from Serializer import Serializer


class ZipCompressor(Serializer):
    FILE_PATH = './'

    @classmethod
    def compress(cls, file_name):
        with ZipFile(cls.FILE_PATH + file_name + '.zip', 'w') as zip_file:
            zip_file.write(file_name)
