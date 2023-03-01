import eventDispatch from "./eventDispatch";

async function updateBalance() {
    const shortBalances = document.querySelectorAll(".deposits__balance-value");
    const popupBalances = document.querySelector(".popUpBalance__grid");

    function fetchBalances() {
        return fetch("/api/playerBalances.json.html")
            .then((response) => response.json())
    }

    function bindEvents() {
        document.addEventListener("updateBalance", update);

        
        const gameUrls = [
            '/casino/',
            '/ruleta-en-vivo/',
            '/apuestas-virtuales/',
            '/slots/'
        ];
        // Check if window.location.pathname contains any of the gameUrls
        if (gameUrls.some(url => window.location.pathname.includes(url))) {
            setTimeout(() => {
                eventDispatch('updateBalance');
            }, 60000);
        }
    }

    async function update() {
        const balances = await fetchBalances();
        parseShortBalances(balances);
        parsePopupBalances(balances);
    }

    function parseShortBalances(balances) {
        shortBalances.forEach((element) => {
            const totalBalance = balances.find((balance) => balance.typeId === -1);
            if (!totalBalance) return;

            element.innerHTML = formatCurrency(totalBalance.amount);
        })
    }

    function formatCurrency(amount) {
        return Number(amount).toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR',
        });
    }

    function parsePopupBalances(balances) {
        let balancesList = "";
        balances.forEach((balance) => {
            if (balance.typeId === -1) return;
            if (balance.amount === "0.0") return;
            balancesList += `
                <p class="title">${balance.name}</p>
                <p class="total">${formatCurrency(balance.amount)}</p>
                `;
        });
        popupBalances.innerHTML = balancesList;
    }

    bindEvents();

}

export default updateBalance;