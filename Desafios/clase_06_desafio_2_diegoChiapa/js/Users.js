class Users {
  constructor({ id = "", userName = "", email = "", password = "" }) {
    id && (this.id = id);
    userName && (this.userName = userName);
    email && (this.email = email);
    password && (this.password = password);
  }
  createUser() {
    //? Método que crea un usuario si no existe
  }
  deleteUser() {
    //? Método que elimina un usuario, si existe
  }
  updateUser() {
    //? Método que modifica un usuario, si existe
  }
  getUsers() {
    //? Método que obtiene todos los usuarios
  }
  showUser(users, userName) {
    //? Método que obtiene un usuario por nombre
    console.log(users.find((user) => user.userName === userName));
  }
  orderUsersID = (users) => users.sort((a, b) => a.id - b.id);
  orderUsersName = (users) => {
    this.usersNames = users.map((user) => user.userName);
    return this.usersNames
      .sort()
      .map((userName) => users.find((user) => user.userName === userName));
  };
}
