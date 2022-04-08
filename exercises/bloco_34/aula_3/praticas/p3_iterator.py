class DatabaseIterable:
    def __init__(self, sql_connector, query_template):
        self.db = sql_connector
        self.query_template = query_template

    def get_page(self, page):
        return self.db.get(query=self.query_template, page=page)

    def __iter__(self):
        return DatabaseIterator(self.db)


class DatabaseIterator:
    def __init__(self, sql_connector):
        self.db = sql_connector
        self.current_page = 0

    def __next__(self):
        data = self.iterable.get_page(page=self.current_page)

        if not data:
            raise StopIteration()

        self.current_page += 1

        return data


# post_paginator = DatabaseIterable(db, post_page_query_template)

# for page in post_paginator:
#     for post in page:
#         print(post['title'])
