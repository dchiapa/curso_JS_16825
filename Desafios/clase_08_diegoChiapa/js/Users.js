const storage = new Storage();

class Users {
  constructor() {}
  //* Manejo de usuarios
  createUser() {
    this.usersList = storage.storageGetUsers();
    this.validateName();
    if (this.userName !== null) {
      this.validateEmail();
      if (this.userEmail !== "ESC" && this.userEmail !== null) {
        this.validatePassword();
        if (this.userPassword !== null) {
          this.userPicture = prompt(
            "Ingrese el link de su foto de perfil:\nSe agregará una imagen por defecto si deja el campo en blanco."
          );
          if (this.userPicture === "") {
            this.userPicture =
              "https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804.png";
          }
          this.usersList.push({
            id: this.usersList.length + 1,
            userName: this.userName,
            userEmail: this.userEmail,
            userPassword: this.userPassword,
            userPicture: this.userPicture,
          });
          storage.storageUpdateUsersList();
          this.newUser = true;
        } else this.newUser = false;
      } else this.newUser = false;
    } else this.newUser = false;
    if (!this.newUser) {
      alert(
        "El usuario no ha sido creado.\nPara volver a comenzar recargue la página"
      );
    } else {
      alert(
        `Usuario creado con éxito\nNombre de usuario: ${this.userName}\nEmail: ${this.userEmail}`
      );
    }
  }
  deleteUser(userName) {
    this.getUser(userName);
    if (this.user) {
      this.usersList.splice(this.usersList.indexOf(this.user), 1);
      storage.storageUpdateUsersList();
      alert("Usuario eliminado");
    }
  }
  getUser(userName) {
    this.usersList = storage.storageGetUsers();
    if (this.usersList) {
      this.user = this.usersList.find((user) => user.userName === userName);
      if (!this.user) {
        this.user = null;
        alert("Usuario no encontrado");
      }
    }
  }
  updateUser(userName) {
    this.getUser(userName);
    if (this.user) {
      this.validateName();
      if (this.userName !== null) {
        this.validateEmail();
        if (this.userEmail !== "ESC" && this.userEmail !== null) {
          this.validatePassword();
          if (this.userPassword !== null) {
            this.user.id;
            this.user = {
              ...this.user,
              userName: this.userName,
              userEmail: this.userEmail,
              userPassword: this.userPassword,
            };
            storage.storageUpdateUsersList();
            alert(
              `Usuario actualizado\nUserName: ${this.userName}\n Email: ${this.userEmail}`
            );
          }
        }
      }
    }
  }
  showUser() {
    //? Método que obtiene un usuario por nombre
  }
  //* Manejo de usuarios
  //* Validaciones
  validateName() {
    do {
      this.userName = prompt("Ingrese el nombre de usuario:");
    } while (
      (this.usersList &&
        this.usersList.find((user) => user.userName === this.userName)) ||
      this.userName === ""
    );
  }
  validateEmail() {
    do {
      this.userEmail = prompt("Ingrese su email:");
    } while (this.userEmail === "" || this.userEmail === "ESC");
    if (
      this.usersList &&
      this.usersList.find((user) => user.userEmail == this.userEmail)
    ) {
      if (this.usersList.find((user) => user.userEmail == this.userEmail)) {
        alert(
          "El mail ingresado ya esta asociado a una cuenta.\nPor favor recupere su contraseña o ingrese a la plataforma."
        );
        this.userEmail = "ESC";
      }
    }
  }
  validatePassword() {
    do {
      this.userPassword = prompt("Ingrese su contraseña:");
    } while (this.userPassword === "");
  }
  //* Validaciones
}
