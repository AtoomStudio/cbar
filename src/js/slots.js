import carouselJackpot from "./modules/carouselJackpot.js";
import carouselGrid from "./modules/carouselGrid.js";
import favHeart from "./modules/favHeart.js";
import searchGames from "./modules/search-games.js";
import accordion from "./modules/accordion.js"

document.addEventListener('DOMContentLoaded', () => {
  carouselJackpot();
  accordion();
  favHeart().init();

  document.querySelectorAll('.gridFull .splide').forEach(grid => {
    carouselGrid(grid);
  });
})

searchGames();
