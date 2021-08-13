const user = new Users({
  userName: "Diego",
  email: "mail@mail.com",
  password: "123456",
});

const usersName = ["Ezequiel", "dChiapa", "eChiapa"];

usersName.push(user.userName);

for (const user of usersName) {
  console.log(user);
}
