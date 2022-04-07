import gzip
from Serializer import Serializer


class GzCompressor(Serializer):
    @staticmethod
    def compress(file_name):
        with open(file_name, 'rb') as content:
            with gzip.open(file_name + '.gz', 'wb') as gzip_file:
                gzip_file.writelines(content)
