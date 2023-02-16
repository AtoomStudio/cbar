import dataLayer from "./dataLayer";


function itemListEvents() {

    const ecommerceItems = [];
    const lobbies = document.querySelectorAll('[data-lobby]');
    if (!lobbies.length) return;

    lobbies.forEach(lobby => {
        const lobbyName = lobby.dataset.lobby;
        const lobbyId = lobby.dataset.lobbyId;
        const games = lobby.querySelectorAll('[data-game-id]');
        triggerViewListEvent(lobbyName, lobbyId, games);

        lobby.addEventListener('click', e => {
            if (e.target.tagName != 'A') return;

            const index = e.target.closest('[data-game-id]').dataset.index;
            const lobbyId = e.target.closest('[data-lobby]').dataset.lobbyId;
            triggerSelectItemEvent(index, lobbyId);
        });
    });

    function triggerViewListEvent(lobbyName, lobbyId, games) {
        const items = Array.from(games).map((game, index) => {
            const item = {
                item_name: game.dataset.gameName,
                item_id: game.dataset.gameId,
                item_brand: game.dataset.gameProvider,
                item_list_name: lobbyName,
                item_list_id: lobbyId,
                index: game.dataset.index
            };
            ecommerceItems.push(item);

            return item;
        });

        dataLayer.push({ ecommerce: null });
        dataLayer.push({
            event: 'view_item_list',
            ecommerce: {
                items,
            },
        });
    }

    function triggerSelectItemEvent(index, lobbyId) {
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
            event: "select_item",
            ecommerce: {
                items: [ecommerceItems.find(item => item.index == index && item.item_list_id == lobbyId)]
            }
        });
    }
}

export default itemListEvents;