import accordion from "./modules/accordion.js";
import PlaytechPoker from "./modules/playtechPoker.js";
import adaptationModule from "./modules/adaptationModule.js";

adaptationModule(".card__bottom-content");

document.addEventListener("DOMContentLoaded", () => {
  accordion();

  const activeNav = document.querySelector('.menuPoker-home.active')
  if(!activeNav) return;
  activeNav.scrollIntoView({
    block: "center",
    inline: "center"
  })
});

window.PlaytechPoker = PlaytechPoker;