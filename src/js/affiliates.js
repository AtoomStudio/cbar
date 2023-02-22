import Alert from "./modules/alert.js";

function manageAffiliatesForm() {
    const form = document.querySelector('#affiliates-form');
    const submitBtn = document.querySelector('#submit-btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        sendMail(data);
    });

    const sendMail = async (data) => {
        submitBtn.classList.toggle('btn--loading')
        const alertMgr = Alert();
        const response = await fetch("https://api_casino.lndo.site/mail/affiliates/send", {
            method: "post",
            body: JSON.stringify(data),
        })

        if (response.ok) {
            alertMgr.add("Consulta enviada", "success")
            submitBtn.classList.toggle('btn--loading')
            submitBtn.classList.toggle('btn--disabled')
        } else {
            alertMgr.add("Algo ha salido mal, prueba mas tarde o abre el chat", "error")
            submitBtn.classList.toggle('btn--loading')
        }
    }
}

manageAffiliatesForm();