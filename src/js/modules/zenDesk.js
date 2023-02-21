function ZenDesk() {

    const start = () => {
        if(typeof zE === "undefined") return;

        const windowHref = window.location.href;
        const openChatBtns = document.querySelectorAll("[data-open-chat]");
        const closeChatBtns = document.querySelectorAll("[data-close-chat]");

        zE(function () {
            if (player) {
                zE.identify({
                    name: player.name + " " + player.middleName + " " + player.lastName,
                    email: player.email,
                });
            }
            zE.setLocale("es");
            zE.hide();

            if (windowHref.includes("preguntas-frecuentes.html") || windowHref.includes("/members/") || windowHref.includes("atencion-al-cliente.html") || windowHref.includes("register.html")) {
                zE.show();
            }

            openChatBtns.forEach((btn) => {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    open();
                });
            });
            
            closeChatBtns.forEach((btn) => {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    close();
                });
            });
        });
    }

    const open = callback => {
        zE.activate();
        if (callback) callback(); 
    }

    const show = callback => {
        zE.show();
        if (callback) callback();
    }

    const hide = callback => {
        zE.hide();
        if (callback) callback();
    }


    return {
        start,
        open,
        show,
        hide
    }

}

export default ZenDesk;