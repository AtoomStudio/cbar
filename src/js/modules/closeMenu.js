const closeMenu = () => {
    const menuHeader = document.querySelector('.menuHeader');
    const userMenuMobile = document.querySelector('.userMenuMobile');


    document.addEventListener("click", (event) => {
        if (!event.target.closest('.menuHeader__openBtn')) {
            menuHeader.classList.remove('menuHeader--left')
            }
        },
        false
    )
    
    document.addEventListener("click", (event) => {
        if (!event.target.closest('.userMenuMobile__open')) {
            userMenuMobile.classList.remove('userMenuMobile--right')
            }
        },
        false
    )
}

export default closeMenu;