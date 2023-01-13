
const dataBlur = () => {
    const dataModifyBlur = document.querySelector(".data__modify-blur");
    const dataScreen = document.querySelector('.data__screen');

    if(!dataModifyBlur) return;
    dataModifyBlur.addEventListener('click', () => {
        dataScreen.classList.toggle('data__screen--blurred')
    })
}

export default dataBlur;