const menus = document.querySelectorAll('.menu-toggle');
const menuCloseBtns = document.querySelectorAll(".menu-toggle__closeBtn");

function closeMenuEvent() {
    menuCloseBtns.forEach(btn => {
        btn.addEventListener("click", closeMenu);
    });

    setTimeout(() => {
        document.addEventListener("click", closeMenuOnClickOutside);
    }, 500);
}

function closeMenuOnClickOutside() {
    console.log('closeMenu');
    if (!event.target.closest('.menu-toggle')) {
        closeMenu();
    }
}

function closeMenu() {
    menus.forEach(menu => {
        menu.classList.remove('menu-toggle--open')
    });
    document.removeEventListener("click", closeMenuOnClickOutside);
}

export default closeMenuEvent;