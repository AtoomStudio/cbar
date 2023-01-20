const showPassword = (passwordSelector, rePasswordSelector = null) => {
    const password = document.querySelector(passwordSelector);
    const passwordWrapper = password.closest('.password__fields--wrapper')
    const btnPassword = passwordWrapper.querySelector('.pwdField__button')

    let re_password;
    let rePasswordWrapper;
    let btnRePassword;

    btnPassword.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('click')

        decriptPassword();
    })

    if (rePasswordSelector) {
        re_password = document.querySelector(rePasswordSelector);
        rePasswordWrapper = re_password.closest('.password__fields--wrapper')
        btnRePassword = rePasswordWrapper.querySelector('.pwdField__button')
        btnRePassword.addEventListener('click', (e) => {
            e.preventDefault();
            decriptPassword();
        })
    }

    const decriptPassword = () => {
        passwordWrapper.classList.toggle('visible');
        togglePasswordType(password);

        if (rePasswordSelector) {
            rePasswordWrapper.classList.toggle('visible');
            togglePasswordType(re_password);
        }
    }
}

const togglePasswordType = (field) => {
    if (field.type === 'password') {
        field.type = 'text'
    } else {
        field.type = 'password'
    }
}

export default showPassword;

