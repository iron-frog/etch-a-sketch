const container = document.querySelector(".container");
const button = document.querySelector(".but");

const containerWidth = container.offsetWidth-20;
const containerHeight = container.offsetHeight-20;

function createGrid(num){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    const time = new Date();
    const seconds = time.getSeconds();
    const squareWidth = (containerWidth/num) + "px";
    const squareHeight = (containerHeight/num) + "px";

    for(let i =0; i<num*num; i++){
        let square = document.createElement("div");
        square.className = "square";
        square.style.width = squareWidth;
        square.style.height = squareHeight;
        container.appendChild(square);
    }
    const newTime = new Date();
    const newSeconds =newTime.getSeconds();
    console.log("Time taken: " + (newSeconds-seconds));
}


function howMany(){
    let amount = parseInt(prompt("Input for how many squares per side"));
    return amount
}

button.addEventListener("click", ()=>{
    let amount = howMany();
    if(!Number.isInteger(amount)){
        alert("Please enter a number");
    }
    else if(amount >100){
        alert("Please enter number less than 100");
    }
    else{
        createGrid(amount);
    }
});

function draw(e){
    if(!(e.target.className =="square")){
        return;
    }
    const square = document.querySelectorAll(".square");
    square.forEach(item => item.addEventListener('mousemove', ()=>{
        item.classList.add("hover");
    }))
    // square.forEach(item=> item.addEventListener('transitionend', ()=>{
    //         item.classList.remove("hover");
    //     }));
}

container.addEventListener('mousemove', draw);
