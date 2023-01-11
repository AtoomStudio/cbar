import closeMenuEvent from "./closeMenu";

const menuHeaderMobile = () => {
  const menuHeaderOpenBtn = document.querySelectorAll(".menuHeader__openBtn");
  const menuHeader = document.querySelector(".menuHeader");

  if (!menuHeader) return;

  menuHeaderOpenBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      menuHeader.classList.add('menu-toggle--open')
      closeMenuEvent();
    });
  });
  
}

export default menuHeaderMobile;