import mixitup from "mixitup";
import mixitupMultifilter from "./mixitup-multifilter.js";
import dataLayer from "./dataLayer.js";

mixitup.use(mixitupMultifilter);
let mixerSlots = null;
let searchValue = "";
const counterValue = document.querySelectorAll('.gridGames__counter-value');

const filterSlotsAll = () => {
  const tags = document.querySelectorAll(".filterSlots__tag");
  const hearts = document.querySelectorAll(".gridGames__item-favourite");
  const btnSlotsMenuOpen = document.querySelector(".btn__openFilterMenu");
  const btnSlotsMenuClose = document.querySelector(".btn__closeFilterMenu");
  const filterSlotsMenu = document.querySelector(".filterSlotsM__menu");
  const filterSlotsActions = document.querySelectorAll(".filterSlotsM__action");


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

  const container = document.querySelector(".slotsFinder");

  const mixitUpOptions = {
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
      onMixClick: function (e) {
        if (this.classList.contains('mixitup-control-active')) return;

        const category = this.closest('.filterSlots__filter, .filterSlotsM__filter').querySelector('.filterSlots__title, .filterSlotsM__title').innerText;
        const value = this.innerText;

        dataLayer.push({
          'event': 'slots-filter',
          'filterType': category,
          'filterValue': value
        });

      },
      onMixEnd: function (state) {
        const newSearchValue = getSearchValueFromSelector(state.activeFilter.selector);
        if (newSearchValue && searchValue !== newSearchValue) {
          dataLayer.push({
            'event': 'slots-filter',
            'filterType': 'name',
            'filterValue': value
          });
        }
      }
    },
  };

  function getSearchValueFromSelector(selector) {
    const regex = /\[data-name\*="(.*?)"]/;
    const match = regex.exec(selector);
    if (match && match[1]) {
      console.log(match[1]);
    }
    return false;
  }

  mixerSlots = mixitup(container, mixitUpOptions);

  updateGameCount();

  const resetBtn = document.getElementById("resetSlots");

  container.addEventListener("mixEnd", () => {
    const state = mixerSlots.getState();
    updateGameCount();

    if (state.totalShow < state.totalTargets) {
      resetBtn.classList.add("visible");
    } else {
      resetBtn.classList.remove("visible");
    }
  });

  btnSlotsMenuOpen.addEventListener("click", () => {
    filterSlotsMenu.classList.add("open");
  });

  btnSlotsMenuClose.addEventListener("click", () => {
    filterSlotsMenu.classList.remove("open");
  });

  filterSlotsActions.forEach((action) => {
    action.addEventListener("click", () => {
      filterSlotsMenu.classList.remove("open");
    });
  });
};

function updateGameCount() {
  const state = mixerSlots.getState();
  counterValue.forEach(value => {
    value.innerText = state.totalShow;
  })
}

export default filterSlotsAll;
