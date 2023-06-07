const item = document.querySelectorAll('.item');
const reset = document.querySelector('.reset');

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

reset.addEventListener('click', ()=>{
    item.forEach(element => {
        element.style.backgroundColor = "white";
    })
});