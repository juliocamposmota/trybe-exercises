# Interface segragation principle
from abc import ABC, abstractmethod


class ReadOnlyConnector(ABC):
    @abstractmethod
    def get_count(self, token):
        pass


class FullConnector(ReadOnlyConnector):
    @abstractmethod
    def count_request(self, token):
        pass


# Uma classe abstrata exige a implementação de todos os seus métodos.
# Uma implementação incompleta não poderá ser instanciada!
# class SQLConnector(FullConnector):
#     def count_request(self, token):
#         ...
#
# TypeError: não pode instanciar porque não implementa o método get_count
# sql = SQLConnector()


class ReadOnlySqlConnector(ReadOnlyConnector):
    pass


class RedisConnector(FullConnector):
    pass
