const colors = ['black', 'red', 'blue', 'green', 'white', 'grey', 'purple'];
const square = document.getElementById("square");

function colorChoose() {    
    square.style.backgroundColor = colors[getRandomNumber()];
};



function borderChoose() {
    square.style.borderColor = colors[getRandomNumber()];
};

function reset() {
    square.style.backgroundColor = "black";
    square.style.borderColor = "white";
}

function getRandomNumber() {
return Math.floor(Math.random() * colors.length);
};