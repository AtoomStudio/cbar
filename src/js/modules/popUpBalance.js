import closeMenuEvent from "./closeMenu";
import eventDispatch from "./eventDispatch";

function popUpSaldo() {
  const popUpOpenBtns = document.querySelectorAll(".popUpBalance__openBtn");
  const popUpMenu = document.querySelector(".popUpBalance");

  const header = document.querySelector(".pageContainer>header");

  if (popUpOpenBtns.length === 0) return;

  popUpMenu.style.top = `${header.offsetHeight}px`;

  popUpOpenBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      if(popUpMenu.classList.contains("menu-toggle--open")) return;
      
      popUpMenu.classList.add("menu-toggle--open");
      eventDispatch('openMenu', popUpMenu);
      closeMenuEvent();
    })
  })
}

export default popUpSaldo;
