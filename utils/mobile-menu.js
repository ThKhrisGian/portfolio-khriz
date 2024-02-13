const mobileMenu = () => {
  const btnMenu = document.querySelector(".header__bars");
  const mblMenu = document.querySelector(".mobile-menu");
  const links = document.querySelectorAll(".mobile-menu__link");

  // STATES
  let isMenuVisible = false;

  btnMenu.addEventListener("click", () => {
    isMenuVisible = !isMenuVisible;

    if (isMenuVisible) {
      mblMenu.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mblMenu.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      isMenuVisible = false;
      mblMenu.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileMenu;
