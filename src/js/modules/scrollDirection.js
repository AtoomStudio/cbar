const scrollDirection = () =>{
    const className = 'filterSlots__outer-container';
    const pageContainer = document.querySelector('.'+ className)

    document.addEventListener('wheel',  (event)=> {
        if(event.wheelDelta >= 0 ){
            pageContainer.className="";
            pageContainer.classList.add(className +'--'+ 'scroll-up');
        }else{
            pageContainer.className="";
            pageContainer.classList.add(className +'--'+ 'scroll-down');
        }
    });
};

export { scrollDirection as default };
