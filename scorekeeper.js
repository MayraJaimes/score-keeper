var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var h1 = document.querySelector("h1");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p1display");
var p1score = 0;
var p2score = 0;


p1button.addEventListener("click", function(){
    p1score ++;
    p1display.textContent = p1score;
});

p2button.addEventListener("click", function(){
    p2score ++;
    p2display.textContent = p2score;
});