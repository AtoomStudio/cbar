(function (factory) {
  typeof define === 'function' && define.amd ? define('main', factory) :
  factory();
}((function () { 'use strict';

  function carouselBanner() {
    var carousel = new Splide(".m-banner__car.splide", {
      perPage: 1,
      arrow: true,
      pagination: false
    });
    carousel.mount();
  }

  function carouselJackpot() {
    var carousel = new Splide('.js--splide--carousel-jackpot', {
      type: 'loop',
      pagination: false,
      perPage: 4,
      perMove: 1,
      gap: 15,
      breakpoints: {
        1200: {
          perPage: 2
        }
      }
    });
    carousel.mount();
  }

  function carouselBets() {
    var carousel = new Splide('.js--splide--carousel-bets', {
      type: 'loop',
      pagination: false,
      perPage: 5,
      perMove: 1,
      gap: 15,
      breakpoints: {
        1600: {
          perPage: 4
        },
        1200: {
          perPage: 3
        },
        992: {
          perPage: 2
        }
      }
    });
    carousel.mount();
  }

  const arrowArr = document.getElementsByClassName("js-arrow__grid");
  const gridArr = document.getElementsByClassName("o-grid__half--grid");

  function collapseGrid() {
    for (let n = 0; n < arrowArr.length; n++) {
      arrowArr[n].addEventListener("click", () => {
        if (gridArr[n].classList.contains("active")) {
          gsap.timeline().to(arrowArr[n], {
            rotation: -90,
            duration: 0.3
          }).to(gridArr[n], {
            opacity: 0,
            duration: 0.6
          }).to(gridArr[n], {
            height: 0,
            duration: 0.3
          });
          gridArr[n].classList.remove("active");
        } else {
          gsap.timeline().to(arrowArr[n], {
            rotation: 0,
            duration: 0.3
          }).to(gridArr[n], {
            height: "auto",
            duration: 0.3
          }).to(gridArr[n], {
            opacity: 1,
            duration: 0.6
          });
          gridArr[n].classList.add("active");
        }
      });
    }
  }

  const carouselBannerExist = document.getElementsByClassName("m-banner__car");
  const carouselJackpotExist = document.getElementsByClassName("js--splide--carousel-jackpot");
  const carouselBetsExist = document.getElementsByClassName("js--splide--carousel-bets");
  const gridHalfExist = document.getElementsByClassName("m-grid__half");
  window.addEventListener("load", () => {
    if (carouselBannerExist.length > 0) {
      carouselBanner();
    }

    if (carouselJackpotExist.length > 0) {
      carouselJackpot();
    }

    if (carouselBetsExist.length > 0) {
      carouselBets();
    }

    if (gridHalfExist.length > 0) {
      collapseGrid();
    }
  });
  const hearts = document.querySelectorAll(".o-casino__grid-fav");
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("fav");

      if (heart.classList.contains("fav")) {
        heart.parentElement.parentElement.classList.add("favourite");
      } else {
        heart.parentElement.parentElement.classList.remove("favourite");
      }
    });
  });
  var mixer = mixitup(".m-casino__filter", {
    multifilter: {
      enable: true
    },
    selectors: {
      target: ".o-casino__grid-item"
    },
    controls: {
      enable: true
    },
    animation: {
      enable: false
    }
  });

})));
