import closeMenuEvent from "./closeMenu";
import eventDispatch from "./eventDispatch";

function userMenuMobile() {
  const userMenuMobileOpen = document.querySelectorAll(".userMenuMobile__open");
  const userMenuMobile = document.querySelector(".userMenuMobile");

  if (!userMenuMobile) return;

  userMenuMobileOpen.forEach((element) => {
    element.addEventListener("click", event => {
      if (window.innerWidth > 1280) return;
      event.preventDefault();
      userMenuMobile.classList.add("menu-toggle--open");
      eventDispatch('openMenu', userMenuMobile);
      closeMenuEvent();
    });
  });

}

export default userMenuMobile;
