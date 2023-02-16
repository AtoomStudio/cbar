function gameReview() {
  const reviewEl = document.querySelector('.reviewsScreen');
  const starsEls = document.querySelectorAll('.reviewsScreen__star');
  const countEl = document.querySelector('.reviewsScreen__score .reviewsScreen__count span');
  const userScoreEl = document.querySelector('.reviewsScreen__user-rating .reviewsScreen__average');
  let isRated = reviewEl.classList.contains('reviewsScreen--rated');

  function bindEvents() {

    if (isRated) return;

    starsEls.forEach(starEl => {
      starEl.addEventListener('click', handleStarClick);
    });
  }

  function handleStarClick(e) {
    if(!player) {
      window.location.href = "/login.html?postLoginUrl=" + window.location.pathname;
      return;
    }

    const star = e.currentTarget;
    const score = star.dataset.score;
    sendScore(score);
    userScoreEl.textContent = score;
    starsEls.forEach(starEl => {
      starEl.classList.remove('reviewsScreen__star--active');
    });
    star.classList.add('reviewsScreen__star--active');

    if (isRated) return;
    countEl.textContent = parseInt(countEl.textContent) + 1;
    reviewEl.classList.add('reviewsScreen--rated');
    isRated = true;

  }

  function sendScore(score) {
    const room = reviewEl.dataset.roomId;
    const url = "/servlet/RankingServlet";
    fetch(`${url}?room=${room}&ranking=${score}`)
      .then(response => response.json())
      .then(json => console.log(json));
  }

  function init() {
    bindEvents();
  }

  return {
    init
  };
}

export default gameReview;