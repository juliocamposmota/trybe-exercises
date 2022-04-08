from abc import ABC, abstractmethod


class Serializer(ABC):
    @abstractmethod
    def serializer(cls, data):
        raise NotImplementedError
