import { p as popUpSaldo, m as marginHeader, d as depositSteps, a as depositAmmount } from './depositAmmount-4b0888aa.js';

function heartToggle() {
  const heartBtn = document.querySelector(".heart");

  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("active");
  });
}

window.addEventListener("load", () => {
  heartToggle();
  popUpSaldo();
  marginHeader();
  depositSteps();
  depositAmmount();
});
//# sourceMappingURL=screens.js.map
