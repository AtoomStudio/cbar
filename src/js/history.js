import activeToggle from "./modules/activeToggle.js";
import calendarHistory from "./modules/calendarHistory.js";
import historyNavBar from "./modules/historyNavBar.js";

document.addEventListener("DOMContentLoaded", () => {
  historyNavBar();
  calendarHistory();
  activeToggle('.paginator__btn')
});