import carouselLandingSEO from "./modules/carouselLandingSEO.js";
import LobbyApi from "./modules/LobbyAPI.js";

LobbyApi();
window.addEventListener("load", () => {
  carouselLandingSEO();
});
