

// counter program



const incBtn = document.getElementById("increaseBtn");
const deBtn = document.getElementById("decreaseBtn");
const recBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

incBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
deBtn .onclick = function(){
    count--;
    countLabel.textContent = count;
}
recBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
