var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
    if(!gameOver){
        p1score ++;
        if (p1score === winningScore) {
            gameOver = true;
        }
        p1display.textContent = p1score;
    }
});

p2button.addEventListener("click", function(){
    if(!gameOver){
        p2score ++;
        if (p2score === winningScore) {
            gameOver = true;
        }
        p2display.textContent = p2score;
    }
});

