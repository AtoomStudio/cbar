const showPassword = (passwordSelector, rePasswordSelector = null) => {
    const btn = document.querySelector('.pwdField__button--first-btn')
    const btns = document.querySelectorAll('.pwdField__button')    
    
    if (passwordSelector && rePasswordSelector) {
        btns.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                decriptPassword();
            })
        })

    } else {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            decriptPassword();
        })
    }

    const decriptPassword = () => {

        const password = document.querySelector(passwordSelector);
        const passwordWrapper = password.closest('.password__fields--wrapper')
        passwordWrapper.classList.toggle('visible');
        togglePasswordType(password);

        if(rePasswordSelector ){
            const re_password = document.querySelector(rePasswordSelector);
            const rePasswordWrapper = re_password.closest('.password__fields--wrapper')
            rePasswordWrapper.classList.toggle('visible');
            togglePasswordType(re_password);
        }
    }
}

const togglePasswordType = (field) => {
    if(field.type === 'password'){
        field.type = 'text'
    } else {
        field.type = 'password'
    }
}

export default showPassword;

