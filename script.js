const gridCount = document.getElementById('gridNumber');
const eight = document.getElementById('eight');
const sixteen = document.getElementById('sixteen');
const thirtyTwo = document.getElementById('thirty-two');
const sixtyFour = document.getElementById('sixty-four');

let count = 8;      // default grid size
createGrid(count);

gridCount.addEventListener("change", () => {
    removeGrid();
    if (gridCount.value == sixteen.value){
        count = 16;
    }
    else if(gridCount.value == thirtyTwo.value){
        count = 32;
    }
    else if(gridCount.value == sixtyFour.value){
        count = 64;
    }
    else{
        count = 8;
    }
    createGrid(count);
});
    
function removeGrid()
{
    const sketch = document.querySelector('.sketch');
    if(sketch){
        sketch.remove();
    }
}

function createGrid(count) {

    const sketch = document.createElement('div');
    sketch.className = 'sketch';

    const container = document.createElement('div');
    container.className = 'container';
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${count}, 1fr)`;

    for(let i=0; i<count*count; i++)
    {
        const item = document.createElement('div');
        item.className = 'item';
        item.style.height = `${400 / count}px`; 
        item.style.width = `${400 / count}px`;
        container.appendChild(item);
    }
    sketch.appendChild(container);

    document.body.appendChild(sketch);

    controls();
}

function controls(){

    const item = document.querySelectorAll('.item');
    const reset = document.querySelector('.reset');
    const black = document.getElementById('black');
    const random = document.getElementById('random');
    const selected = document.getElementById('dropdown');
    const colorPicker = document.getElementById('colorPicker'); 

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
    
    colorPicker.addEventListener('input', () => {
        item.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = colorPicker.value;
            });
        });
    }); 
}