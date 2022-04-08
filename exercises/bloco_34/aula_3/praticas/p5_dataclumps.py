# class User:
#     def __init__(self, name, street, number, district):
#         self.name = name
#         self.address_street = street
#         self.address_number = number
#         self.address_district = district

from collections import namedtuple


class Address:
    def __init__(self, street, number, district):
        self.street = street
        self.number = number
        self.district = district


class User:
    def __init__(self, name, address):
        self.name = name
        self.address = address


GeoPoint = namedtuple('GeoPoint', 'lat lon')
location = GeoPoint(-22.81711234090266, -47.069559317039655)
print(location.lat)
