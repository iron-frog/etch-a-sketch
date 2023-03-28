const container = document.querySelector(".container");
const button = document.querySelector(".but");
const slider = document.querySelector("#squares");
const value = document.querySelector("#value");
const colorVal = document.querySelector("#col");
value.textContent = slider.value +" * " + slider.value ;
//


const containerWidth = container.offsetWidth - 20;
const containerHeight = container.offsetHeight - 20;
let startColour = [];
let isDrawing = false;


function createGrid(num) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const time = new Date();
    const seconds = time.getSeconds();
    const squareWidth = (containerWidth / num) + "px";
    const squareHeight = (containerHeight / num) + "px";

    for (let i = 0; i < num * num; i++) {
        let square = document.createElement("div");
        square.className = "square";
        square.style.width = squareWidth;
        square.style.height = squareHeight;
        container.appendChild(square);
    }
    const newTime = new Date();
    const newSeconds = newTime.getSeconds();
    console.log("Time taken: " + (newSeconds - seconds));
}

function draw(e) {
    if (!(e.target.className == "square")) {
        return;
    }

    const square = document.querySelectorAll(".square");
    square.forEach(item => item.addEventListener('mousemove', () => {
        
        if (isDrawing) {
            item.classList.add("hover");
            item.style.backgroundColor = colorVal.value;
        }
        
    }));
    square.forEach(item => item.addEventListener('mousedown', () => {
        isDrawing = true;
    }));
    square.forEach(item => item.addEventListener('mouseup', () => {
        isDrawing = false;
    }));
    // square.forEach(item => item.addEventListener('mouseout', () => {
    //     isDrawing = false;
    // }));

}
createGrid(slider.value);
slider.addEventListener('input', (e)=>{
    value.textContent = slider.value +" * " + slider.value ;
    createGrid(e.target.value);
})

container.addEventListener('mousemout', ()=> isDrawing =false);
container.addEventListener('mousemove', draw);


