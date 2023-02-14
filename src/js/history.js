import pagination from "./modules/pagination.js";
import calendarHistory from "./modules/calendarHistory.js";
import historyNavBar from "./modules/historyNavBar.js";

document.addEventListener("DOMContentLoaded", () => {
  historyNavBar();
  calendarHistory();
  pagination();

  const activeNav = document.querySelector('.history__nav.is-active')
  if(!activeNav) return;
  activeNav.scrollIntoView({
    block: "center",
    inline: "center"
  })
});