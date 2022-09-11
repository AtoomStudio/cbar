import mixitup from "mixitup";
import mixitupMultifilter from "./mixitup-multifilter.js";
import { gsap } from "gsap";

mixitup.use(mixitupMultifilter);

const tags = document.querySelectorAll(".filterSlots__tag");
const hearts = document.querySelectorAll(".gridGames__item-favourite");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("fav");
    if (heart.classList.contains("fav")) {
      heart.parentElement.classList.add("favorito");
    } else {
      heart.parentElement.classList.remove("favorito");
    }
  });
});

tags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("mixitup-control-active")) {
      e.currentTarget.firstElementChild.setAttribute(
        "src",
        "img/icon-filter-noActive.svg"
      );
    } else {
      e.currentTarget.firstElementChild.setAttribute(
        "src",
        "img/icon-filter-active.svg"
      );
    }
  });
});

const container = document.querySelector(".slotsFinder");

if (window.innerWidth < 1280) {
  console.log('boob')
  const mixerSlots = mixitup(container, {
    multifilter: {
      enable: true,
      parseOn: "submit",
    },
    controls: {
      enable: true,
    },
    animation: {
      enable: false,
    },
    callbacks: {
      onMixClick: function () {
        // Reset the search if a filter is clicked

        if (this.matches("[data-filter]")) {
          inputSearch.value = "";
        }
      },
    },
  });
} else {
  console.log('bob')
  const mixerSlots = mixitup(container, {
    multifilter: {
      enable: true,
    },
    controls: {
      enable: true,
    },
    animation: {
      enable: false,
    },
    callbacks: {
      onMixClick: function () {
        // Reset the search if a filter is clicked

        if (this.matches("[data-filter]")) {
          inputSearch.value = "";
        }
      },
    },
  });
}



const resetBtn = document.getElementById("resetSlots");

container.addEventListener("mixEnd", () => {
  const state = mixerSlots.getState();
  if (state.totalShow < state.totalTargets) {
    resetBtn.classList.add("visible");
  } else {
    resetBtn.classList.remove("visible");
  }
});

const accorArrows = document.getElementsByClassName("accorArrow");
const accorBody = document.getElementsByClassName("body");

for (let n = 0; n < accorArrows.length; n++) {
  accorArrows[n].addEventListener("click", () => {
    if (accorBody[n].classList.contains("active")) {
      gsap
        .timeline()
        .to(accorArrows[n], { rotation: -90, duration: 0.3 })
        .to(accorBody[n], { opacity: 0, duration: 0.3 })
        .to(accorBody[n], { height: 0, duration: 0.3 });
      accorBody[n].classList.remove("active");
    } else {
      gsap
        .timeline()
        .to(accorArrows[n], { rotation: 90, duration: 0.3 })
        .to(accorBody[n], { height: "auto", duration: 0.3 })
        .to(accorBody[n], { opacity: 1, duration: 0.3 });
      accorBody[n].classList.add("active");
    }
  });
}

const btnSlotsMenuOpen = document.querySelector(".btn__openFilterMenu");
const btnSlotsMenuClose = document.querySelector(".btn__closeFilterMenu");
const filterSoltsMenu = document.querySelector(".filterSlotsM__menu");

btnSlotsMenuOpen.addEventListener("click", () => {
  filterSoltsMenu.classList.add("open");
});

btnSlotsMenuClose.addEventListener("click", () => {
  filterSoltsMenu.classList.remove("open");
});


const popUpCloseBtn = document.querySelector('.popUpBalance__closeBtn');
const popUpOpenBtn = document.querySelector('.popUpBalance__openBtn');
const popUpMenu = document.querySelector('.popUpBalance');

popUpOpenBtn.addEventListener('click', () => {
  popUpMenu.style.display = 'block';
})

popUpCloseBtn.addEventListener('click', () => {
  popUpMenu.style.display = 'none';
})

const menuHeaderOpenBtn = document.querySelector(".menuHeader__openBtn");
const menuHeaderCloseBtn = document.querySelector(".menuHeader__closeBtn");
const menuHeader = document.querySelector(".menuHeader");

menuHeaderOpenBtn.addEventListener("click", () => {
  menuHeader.style.display = "flex";
});
menuHeaderCloseBtn.addEventListener("click", () => {
  menuHeader.style.display = "none";
});