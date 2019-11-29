var numSquares = 6;
var colors = [];
var picked;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var btnReset = document.querySelector("#btnReset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        // Add click listener
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            console.log(clickedColor, picked);
            if (clickedColor === picked){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                btnReset.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    colors = genRandomNum(numSquares);
    picked = pickColor();
    colorDisplay.textContent = picked;
    btnReset.textContent = "New Colors";
    messageDisplay.textContent = "";

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// btnEasy.addEventListener("click", function(){
//     btnHard.classList.remove("selected");
//     btnEasy.classList.add("selected");
//     numSquares = 3;
//     colors = genRandomNum(numSquares);
//     picked = pickColor();
//     colorDisplay.textContent = picked;

//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// btnHard.addEventListener("click", function(){
//     btnHard.classList.add("selected");
//     btnEasy.classList.remove("selected");
//     numbSquares = 6;
//     colors = genRandomNum(numSquares);
//     picked = pickColor();
//     colorDisplay.textContent = picked;

//     for(var i = 0; i < squares.length; i++){ 
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

btnReset.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandomNum(num){
    //array
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
// GENERATE RGB COLOUR
function randomColor(){
    var red = Math.floor(Math.random() * 256); 
    var green = Math.floor(Math.random() * 256); 
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
