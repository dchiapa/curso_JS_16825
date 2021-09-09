class Interface {
  constructor() {
    this.container = $(".content");
  }
  showUsers(users) {
    switch (users.length) {
      case 0:
        this.loadMessage();
        break;
      default:
        this.loadUsers(users);
        break;
    }
  }
  loadUsers(users) {
    for (let user of users) {
      this.userProfile = $("<article></article>");
      this.userProfile[0].classList.add("profile__preview");
      this.userProfile[0].setAttribute("data-user", user.userName);
      this.userImg = $("<img/>");
      this.userImg[0].classList.add("profile__img");
      this.userImg[0].src = user.userImage;
      this.userImg[0].alt = user.userName;
      this.userName = $("<h2></h2>");
      this.userName[0].classList.add("profile__title");
      this.userName[0].textContent = user.userName;
      this.userProfile[0].append(this.userImg[0]);
      this.userProfile[0].append(this.userName[0]);
      this.container.append(this.userProfile[0]);
    }
  }
  loadMessage() {
    this.message = document.createElement("article");
    this.message.classList.add("message");
    this.messageText = document.createElement("p");
    this.messageText.classList.add("message__text");
    this.messageText.textContent =
      "No hay usuarios en la base de datos. Puede agregar usuarios en la página principal.";
    this.message.appendChild(this.messageText);
    this.container.appendChild(this.message);
  }
}
