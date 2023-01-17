function popUpSaldo() {
  const popUpCloseBtn = document.querySelector(".popUpBalance__closeBtn");
  const popUpOpenBtns = document.querySelectorAll(".popUpBalance__openBtn");
  const popUpMenu = document.querySelector(".popUpBalance");

  const header = document.querySelector(".header");

  if (popUpOpenBtns.length === 0) return;

  popUpMenu.style.marginTop = `${header.offsetHeight}px`;

  popUpOpenBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        popUpMenu.classList.toggle('popUpBalance--openMenu')
    })
   
  })

  popUpCloseBtn.addEventListener("click", () => {
    popUpMenu.classList.remove('popUpBalance--openMenu')
  })
}

export default popUpSaldo;
