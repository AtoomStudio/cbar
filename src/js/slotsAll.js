import accordion from "./modules/accordion.js";
import filterSlotsAll from "./modules/filterSlotsAll.js";
import favHeart from "./modules/favHeart.js";
import scrollDirection from "./modules/scrollDirection";


document.addEventListener("DOMContentLoaded", () => {
  accordion();
  filterSlotsAll();
  favHeart().init();
  scrollDirection();
});
