// import { gsap } from "gsap";

function userMenuMobile() {
  const userMenuMobileOpen = document.querySelectorAll(".userMenuMobile__open");
  const userMenuMobileClose = document.querySelector(
    ".userMenuMobile__collapse"
  );
  const userMenuMobile = document.querySelector(".userMenuMobile");
  if (!userMenuMobile) return;

  userMenuMobileOpen.forEach((el) => {
    el.addEventListener("click", e => {
      if(window.innerWidth > 1280) return;
      e.preventDefault();
      userMenuMobile.classList.add("userMenuMobile--right")
    
    });
  });

  userMenuMobileClose.addEventListener("click", () => {
    userMenuMobile.classList.remove("userMenuMobile--right")
  
  });
}

export default userMenuMobile;
