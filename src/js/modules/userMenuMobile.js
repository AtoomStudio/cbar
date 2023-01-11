
function userMenuMobile() {
  const userMenuMobileOpen = document.querySelectorAll(".userMenuMobile__open");
  const userMenuMobileClose = document.querySelector(
    ".userMenuMobile__collapse"
  );
  const userMenuMobile = document.querySelector(".userMenuMobile");
  
  if (!userMenuMobile) return;

  userMenuMobileOpen.forEach((element) => {
    element.addEventListener("click", event => {
      if(window.innerWidth > 1280) return;
      event.preventDefault();
      userMenuMobile.classList.add("userMenuMobile--right")
    
    });
  });

  userMenuMobileClose.addEventListener("click", () => {
    userMenuMobile.classList.remove("userMenuMobile--right")
  });
}

export default userMenuMobile;
