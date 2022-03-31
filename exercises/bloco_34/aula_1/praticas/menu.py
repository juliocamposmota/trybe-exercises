from user import User
from mailer import Mailer

first_user = User(
  "Júlio Mota Campos",
  "juliomota@gmail.com",
  1234)

first_user_mailer = Mailer(
  "password_reset@test.com",
  1234,
  first_user.email)

print(first_user.name)
print(first_user.email)
print(first_user.password)

first_user.reset_password()
