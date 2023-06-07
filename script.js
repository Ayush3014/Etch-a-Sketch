const item = document.querySelectorAll('.item');
const reset = document.querySelector('.reset');
const black = document.getElementById('black');
const random = document.getElementById('random');
const selected = document.getElementById('dropdown');

item.forEach(element => {
    element.addEventListener('mouseenter', ()=>{
        element.style.backgroundColor = "black";
    });    
});

reset.addEventListener('click', () => {
    item.forEach(element => {
        element.style.backgroundColor = "white";
    })
});

selected.addEventListener("change", () => {
    if(selected.value === black.value)
    {
        item.forEach(element => {
            element.addEventListener('mouseenter', ()=>{
                element.style.backgroundColor = "black";
            });    
        });
    }

    else if(selected.value === random.value)
    {
        item.forEach(element => {
            element.addEventListener('mouseenter', () => {
                const red = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);

                element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });
        });
    }
});

