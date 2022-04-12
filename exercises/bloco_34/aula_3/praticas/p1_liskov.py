from abc import ABC, abstractmethod


class Connector(ABC):
    @abstractmethod
    def get_count(token):
        raise NotImplementedError

    def count_request():
        raise NotImplementedError


class SqlConnector(Connector):
    def __init__(self, adress, port):
        print(f'criada uma conexão em {adress}:{port}')
        pass

    def get_count(token):
        query = f'SELECT count FROM access WHERE token={token};--'
        print(f'Executando query: {query}')

    def count_request(token):
        query = f'UPDATE access SET count = count+=1 WHERE token={token};--'
        print(f'Executando query: {query}')


class RedisConnector(Connector):
    def __init__(self, address, port):
        print(f'criada uma conexão em {address}:{port}')
        pass

    def get_count(self, token):
        result = self.search(token)
        amount = result.get("access_count", None)
        return amount

    def update_count(self, token):
        amount = self.get_count()
        if amount is None:
            self.db.insert({token: 1})
        else:
            self.db.insert({token: amount+1})
