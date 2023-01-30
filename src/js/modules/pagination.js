function pagination () {
    let numberBtns = document.querySelectorAll('.paginator__btn');
   
    numberBtns.forEach ((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (btn.getAttribute('id') !== null) {
                resetValues();
            }      
            else {
                resetValues();
                btn.setAttribute ('id', 'currentPage');
                btn.classList.toggle('is-active')
            }
        })
    })

    const resetValues = () => {
        numberBtns.forEach((button) => {
            button.classList.remove('is-active')
            button.removeAttribute('id');
        })

    }
}

export default pagination;