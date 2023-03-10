function depositAmmount() {
  const btnsArr20 = document.querySelectorAll(".btnAmmount__20");
  const btnsArr50 = document.querySelectorAll(".btnAmmount__50");
  const btnsArr100 = document.querySelectorAll(".btnAmmount__100");


  btnsArr20.forEach((btn20) => {
    btn20.addEventListener("click", (e) => {
      let input = document.querySelector(e.currentTarget.dataset.input);
      input.value = 20;
      input.dispatchEvent(new Event('input'));
    });
  })
  btnsArr50.forEach((btn50) => {
    btn50.addEventListener("click", (e) => {
      let input = document.querySelector(e.currentTarget.dataset.input);
      input.value = 50;
      input.dispatchEvent(new Event('input'));
    });
  })
  btnsArr100.forEach((btn100) => {
    btn100.addEventListener("click", (e) => {
      let input = document.querySelector(e.currentTarget.dataset.input);
      input.value = 100;
      input.dispatchEvent(new Event('input'));
    });
  })

}

export default depositAmmount;
