class Menu {
  constructor() {
    this.hamburger__btn = document.querySelector(".nav__hamburguer");
    this.nav__items = document.querySelectorAll(".nav__item");
    this.menuOpen = false;
    this.hamburger__btn.addEventListener(
      "click",
      () => {
        this.toggle();
      },
      false
    );
  }
  toggle() {
    if (!this.menuOpen) {
      this.hamburger__btn.classList.add("open");
      this.nav__items.forEach((nav__item) => {
        nav__item.classList.add("active");
      });
      this.menuOpen = true;
    } else {
      this.hamburger__btn.classList.remove("open");
      this.nav__items.forEach((nav__item) => {
        nav__item.classList.remove("active");
      });
      this.menuOpen = false;
    }
  }
}
