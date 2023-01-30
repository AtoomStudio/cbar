

const numberBtns = document.querySelectorAll('.paginator__btn');
const prevBtn = document.querySelector('#rePage');
const nextBtn = document.querySelector('#avPage');

function pagination () {
    prevBtn.addEventListener ('click', (e) => {
        e.preventDefault();
        hasIdAttribute (numberBtns);
    })
    
    nextBtn.addEventListener ('click', (e) => {
        e.preventDefault();
        hasIdAttribute (numberBtns);
    })
        
    
}

const hasIdAttribute = ((numbersList)  => {
    numbersList.forEach(number => {
        if(number.getAttribute('id') !== null){
            number.classList.add('is-active')
        } 
        else number.classList.remove('is-active')
    })
})

export default pagination;