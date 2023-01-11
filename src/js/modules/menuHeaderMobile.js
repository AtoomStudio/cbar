import closeMenu from "./closeMenu";

const menuHeaderMobile = () => {
  const menuHeaderOpenBtn = document.querySelectorAll(".menuHeader__openBtn");
  const menuHeaderCloseBtn = document.querySelector(".menuHeader__closeBtn");
  const menuHeader = document.querySelector(".menuHeader");

  if (!menuHeader) return;

  menuHeaderOpenBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      menuHeader.classList.add('menuHeader--left')
    });
  });

  menuHeaderCloseBtn.addEventListener("click", () => {
  menuHeader.classList.remove('menuHeader--left')
  });
  
  closeMenu();
}

export default menuHeaderMobile;