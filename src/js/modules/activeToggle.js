function activeToggle(classname) {
    const activeBtns= document.querySelectorAll(classname);
  
    activeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("is-active");
        });
    });
  }
  
  export default activeToggle;