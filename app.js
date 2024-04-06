let squareBlue = document.getElementById(`square_blue`);
let squareRed = document.getElementById(`square_red`);
let squareYellow = document.getElementById(`square_yellow`);
let squareGreen = document.getElementById(`square_green`);
let squarePurple = document.getElementById(`square_purple`);

let originalColor = "";
squareBlue.addEventListener("click", togglePink);

function togglePink() {
  // console.log('click');
  if (!(this.style.backgroundColor === "pink")) {
    originalColor = this.style.backgroundColor;
    this.style.backgroundColor = "pink";
    return;
  } else if (this.style.backgroundColor === "pink") {
    this.style.backgroundColor = originalColor;
  }
}

squareRed.addEventListener("dblclick", togglePink);

document.addEventListener("keydown", function (zEvent) {
  if (zEvent.key === ' ') {
    if (document.body.style.backgroundColor === 'black'){
        document.body.style.backgroundColor = 'white';
        squareYellow.style.borderRadius = "0%";
        return
    }
    document.body.style.backgroundColor = 'black';
    squareYellow.style.borderRadius = "50%";
    zEvent.preventDefault();
  }
});

let originalText = '';
squarePurple.addEventListener("mouseover", function(){
    originalText = this.innerHTML;
    this.innerHTML = '<h1 id="yellow">You are Hovering over me!</h1>';
    document.getElementById('yellow').style.color = 'yellow';
})
squarePurple.addEventListener("mouseleave", function(){
    this.innerHTML = originalText;
})

// bonus
setTimeout(function() {
    document.body.style.backgroundColor = 'lightblue';
    document.getElementById("timer").innerHTML = "<h2>It has been 15 seconds</h2>";
}, 15000);

setInterval(function(){
    let randX = Math.floor(-Math.random() * 90);
    let randY = Math.floor(Math.random() * 80);
    squareGreen.style.transform = `translate(${randX}vw, ${randY}vh)`
}, 3000);