import carouselPromociones from "./modules/carouselPromociones.js";

document.addEventListener('DOMContentLoaded', () => {
  carouselPromociones();

  const activeNav = document.querySelector('promo__navbar--item.is-active')
  if(!activeNav) return;
  activeNav.scrollIntoView({
    block: "center",
    inline: "center"
  })
})
