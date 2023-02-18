import dataLayer from "./dataLayer";

function menuEvents() {
    const menuItems = document.querySelectorAll('.header__navBar a, .nav__item a, .menuHeader__navItems a, .userMenuMobile a, .userMenu a');
    menuItems.forEach(item => {
        item.addEventListener('click', e => {
            const itemText = e.currentTarget.innerText;
            console.log(itemText);
            dataLayer.push({
                'event': 'menu-click',
                'event-label': itemText
            })
        });
    });
}

export default menuEvents;