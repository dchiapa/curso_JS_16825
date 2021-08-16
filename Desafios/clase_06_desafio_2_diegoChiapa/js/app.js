const users = new Users({
  id: "",
  userName: "",
  email: "",
  password: "",
});
const usersList = [
  { id: 2, userName: "Ezequiel", email: "mail@mail.com", password: "A123" },
  { id: 1, userName: "Juan", email: "mail@mail.com", password: "A123" },
  { id: 3, userName: "Pablo", email: "mail@mail.com", password: "A123" },
];
console.log(usersList);
usersList.push(
  new Users({
    id: usersList.length + 1,
    userName: "Diego",
    email: "mail@mail.com",
    password: "123456",
  })
);
console.log(usersList);

users.showUser(usersList, "Ezequiel");

console.log(users.orderUsersID(usersList));

console.log(users.orderUsersName(usersList));
