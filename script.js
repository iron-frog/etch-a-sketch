const container = document.querySelector(".container");
console.log(container.offsetWidth);

for(let i =0; i<256; i++){
    let square = document.createElement("div");
    square.className = "square";
    square.style.width = "60px";
    square.style.height = "60px";

    container.appendChild(square);

}
const block = document.querySelectorAll(".square");

function getWidth(e){
    console.log(e.target.offsetWidth);
}

//container.addEventListener('click',getWidth);
//console.log(block);

block.forEach(b => b.addEventListener('mousemove', ()=>{
    b.classList.add("hover");
}));

block.forEach(b=> b.addEventListener('transitionend', ()=>{
    b.classList.remove("hover");
}));