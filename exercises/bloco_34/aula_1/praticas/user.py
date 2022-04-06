from mailer import Mailer


class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        meu_mailer = Mailer(
          "password_reset@teste.com",
          "myverysafepassword",
          self.email)

        meu_mailer.send_email(
          "Reset your password",
          "Clique no link para resetar sua senha")
