const ENDPOINT = "https://revamp.casinobarcelona.es/servlet/PreRegisterServlet";

function setPreregisterUser() {
    const user = {
        nationality: document.querySelector("#nationality").value,
        name: document.querySelector("#name").value,
        surname: document.querySelector("#surname").value,
        middlename: document.querySelector("#middlename").value,
        nationalId: document.querySelector("#nationalId").value,
        e_mail: document.querySelector("#e_mail").value,
        phone: document.querySelector("#phone").value
    };
    return user;
}

export async function savePreregister() {
    const user = setPreregisterUser();
    user.delete = false;

    await fetchApi(ENDPOINT, {
        method: "POST",
        body: JSON.stringify(user)
    });
}

export async function deletePreregister(dni) {
    const data = new FormData();
    data.append("nationalId", dni);
    data.append("delete", true);
    await fetchApi(ENDPOINT, {
        method: "POST",
        body: data
    });
}

function fetchApi(url, options) {
    return fetch(url, options)
        .catch(error => error)
        .finally(() => {
            console.log("Preregister fetch finished");
        });
}
