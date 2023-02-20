import { setFavStatus } from "./favHeart";
import dataLayer from "./dataLayer";

export default function gameLauncher() {
    const playBtns = document.querySelectorAll('.play-btn');
    const demoBtns = document.querySelectorAll('.demo-btn');
    const heartBtn = document.querySelector('#fav__btn');
    const maximizeBtn = document.querySelector('#maximize__btn');
    const minimizeBtn = document.querySelector('#minimize__btn');
    const closeBtn = document.querySelector('#close__btn');
    const gameIframe = document.querySelector('#gameIframe');
    const toggleAside = document.querySelector('#toggle-aside__btn');
    const screens = document.querySelector('.screens');
    const toRealBtn = document.querySelector('.demo-bar__action--real');
    const gameLauncherContainer = document.querySelector('.pageContainer > section');

    playBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const roomId = btn.dataset.roomId;
            const opener = btn.dataset.opener;
            const extra = btn.dataset.extra;
            startGame(opener, roomId, extra);
        });
    });

    demoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const roomId = btn.dataset.roomId;
            const opener = btn.dataset.opener;
            const extra = btn.dataset.extra;
            startGame(opener, roomId, extra, true);
        });
    });

    if (toRealBtn) {
        toRealBtn.addEventListener('click', e => {
            e.preventDefault();
            closeGame();
            playBtns[0].click();
            dataLayer.push({ event: 'demo-to-real' });
        });
    }

    if (heartBtn) {
        heartBtn.addEventListener('click', e => {
            heartBtn.classList.toggle('active');
            setFavStatus(e.currentTarget.dataset.gameId, heartBtn.classList.contains('active'));
        });
    }

    maximizeBtn.addEventListener('click', () => {
        maximize();
    });

    minimizeBtn.addEventListener('click', () => {
        minimize();
    });

    closeBtn.addEventListener('click', () => {
        closeGame();
    });

    toggleAside.addEventListener('click', () => {
        toggleAside.classList.toggle('open');
        screens.classList.toggle('aside-open');
        triggerResize();
    });

    function startGame(opener, roomId, extra = "", demo = false) {
        document.body.classList.add('game-mode');
        if (demo) document.body.classList.add('game-mode--demo');
        triggerResize();

        if (demo) {
            if (typeof openUniversalDemo === "function") {
                openUniversalDemo(opener, roomId, "");
                return;
            }
            dataLayer.push({
                event: 'demo-start',
            });
        } else {
            dataLayer.push({
                event: 'game-start',
            });
        }

        if (typeof openUniversal === "function") {
            openUniversal(opener, roomId, extra);
            return;
        }

        gameIframe.src = "https://example.com";
    }

    function closeGame() {
        if(document.fullscreenEnabled) {
            document.exitFullscreen();
        }
        document.body.classList.remove('game-mode', 'game-mode--demo', 'game-mode--maximized');
        gameIframe.src = "";
    }

    function maximize() {
        if(document.fullscreenEnabled) {
            gameLauncherContainer.requestFullscreen();
        }
        document.body.classList.add('game-mode--maximized');
        window.dispatchEvent(new Event('resize'));
        triggerResize();
    }

    function minimize() {
        if(document.fullscreenEnabled) {
            document.exitFullscreen();
        }
        document.body.classList.remove('game-mode--maximized');
        triggerResize();
    }

    function triggerResize() {
        window.dispatchEvent(new Event('resize'));
    }

}