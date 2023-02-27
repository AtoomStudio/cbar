import carouselGrid from "./carouselGrid";

const LobbyApi = () => {
    const API_URL = 'https://api.casinobarcelona.es/api';
    const selector = ".lobby-api";
    const elements = document.querySelectorAll(selector);
    if (!elements) return;

    elements.forEach(element => {
        //preFetchApi(element);
        fetchApi(element);
    });

    function preFetchApi(element) {
        element.innerHTML = `Cargando`;
    }

    function fetchApi(element) {
        const filters = JSON.parse(element.dataset.filters);
        const filtersString = new URLSearchParams(filters).toString();
        const baseUrl = `${API_URL}/room_slots?${filtersString}&page=`;
        let currentPage = 1;

        fetch(`${baseUrl + currentPage}`, { 'headers': { 'Accept': 'application/json' } })
            .then(response => response.json())
            .then(data => {
                renderData(element, data);
            })
            .catch(error => {
                element.innerHTML = `${error}`;
            })
            .finally(() => {
                postFetchApi(element);
            });
    }

    function postFetchApi(element) {
        carouselGrid(element.closest('.splide'));
        if(typeof JackpotTicker !== "undefined") {
            JackpotTicker();
        }
    }

    function getTemplate() {
        const itemTpl = document.getElementById('tpl-lobby-item');
        if (!itemTpl) return false;
        return itemTpl.content.cloneNode(true);
    }

    function renderData(element, rooms) {

        const imagePrefix = window.location.hostname === 'localhost' ? 'https://www.casinobarcelona.es' : '';

        const roomsHtml = rooms.map(room => {
            const itemTemplate = getTemplate();
            const item = itemTemplate.querySelector('.item');
            const image = item.querySelector('.item__image');
            const links = item.querySelectorAll('a');
            const hoverTitle = item.querySelector('.gridHover__title');

            if(room.tags.includes('Jackpot')) {
                item.dataset.jackpot = "";
                const jackpotContainer = document.createElement('div');
                jackpotContainer.classList.add('jackpot__container');
                jackpotContainer.id = `jackpot-counter-${room.roomId}`;
                jackpotContainer.innerText = "1000 €";
                item.appendChild(jackpotContainer);
            }

            item.dataset.gameId = room.roomId;

            const imagename = room.link.replace(/^.*\/(.*)\.html$/, "$1") + '.webp';
            image.src = `${imagePrefix}/img/cbar-logos/all/thumb/${imagename}`;
            image.dataset.original = `${imagePrefix}${room.thumb}`;
            image.alt = room.name;
            image.onerror = () => { image.onerror = null; image.src = image.dataset.original };

            links.forEach(link => {
                link.href = room.link;
                link.title = room.name;
            });

            hoverTitle.innerHTML = room.name;

            element.appendChild(item);
        });
    }
}
export default LobbyApi;
