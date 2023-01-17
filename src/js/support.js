import historyNavBar from "./modules/historyNavBar.js";


function initSupportForm() {
  const theForm = document.querySelector("#supportForm")
  const button = document.querySelector('.btn__fontSm')

  const alertMgr = Alert();

  button.addEventListener('click', () => {
    button.classList.toggle('btn--loading')
  })

  const sendMail = async () => {
    const response = await fetch("https://api.casinobarcelona.es/mail/support/send", {
      method: "post",
      body: new FormData(theForm),
    })

    
    if (response.ok) {
      alertMgr.add("Consulta enviada", "success")
        button.classList.toggle('btn--loading')

    } else {
      alertMgr.add("Algo ha salido mal, prueba mas tarde o abre el chat", "error")
        button.classList.toggle('btn--loading')

    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    sendMail();
  }

  theForm.onsubmit = submitForm;
}

document.addEventListener('DOMContentLoaded', () => {
  historyNavBar();
  initSupportForm();
})