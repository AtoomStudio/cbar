import closeMenuEvent from "./closeMenu";
import eventDispatch from "./eventDispatch";

const menuHeaderMobile = () => {
  const menuHeaderOpenBtn = document.querySelectorAll(".menuHeader__openBtn");
  const menuHeader = document.querySelector(".menuHeader");

  if (!menuHeader) return;

  menuHeaderOpenBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      menuHeader.classList.add('menu-toggle--open')
      eventDispatch('openMenu', menuHeader);
      closeMenuEvent();
    });
  });
  
}

export default menuHeaderMobile;