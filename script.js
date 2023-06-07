const item = document.querySelectorAll('.item');

item.forEach(element => {
    element.addEventListener('mouseenter', ()=>{
        if(element.style.backgroundColor == "black")
        {
            element.style.backgroundColor = "white";
        }
        else
        {
            element.style.backgroundColor = "black";
        }
    });
    
});

