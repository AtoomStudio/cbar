import closeMenuEvent from "./closeMenu";

function popUpSaldo() {
  const popUpOpenBtns = document.querySelectorAll(".popUpBalance__openBtn");
  const popUpMenu = document.querySelector(".popUpBalance");

  const header = document.querySelector(".header");

  if (popUpOpenBtns.length === 0) return;

  popUpMenu.style.marginTop = `${header.offsetHeight}px`;

  popUpOpenBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      popUpMenu.classList.add("menu-toggle--open");
      closeMenuEvent();
      
    })
  })
}

export default popUpSaldo;
