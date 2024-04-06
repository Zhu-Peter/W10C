let squareBlue = document.getElementById(`square_blue`);
let squareRed = document.getElementById(`square_red`);
let squareYellow = document.getElementById(`square_yellow`);
let squareGreen = document.getElementById(`square_green`);
let squarePurple = document.getElementById(`square_purple`);

// The user clicks an element
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

// The user double clicks an element
squareRed.addEventListener("dblclick", togglePink);

// The user presses the space key on their keyboard
document.body.addEventListener("keydown", function (zEvent) {
  if (zEvent.key === " ") {
    if (document.body.style.backgroundColor === "black") {
      document.body.style.backgroundColor = "white";
      squareYellow.style.borderRadius = "0%";
      return;
    }
    document.body.style.backgroundColor = "black";
    squareYellow.style.borderRadius = "50%";
    zEvent.preventDefault();
  }
});

// The user hovers their mouse over an element
let originalText = "";
squarePurple.addEventListener("mouseover", function () {
  originalText = this.innerHTML;
  this.innerHTML = '<h1 id="yellow">You are Hovering over me!</h1>';
  document.getElementById("yellow").style.color = "yellow";
});
squarePurple.addEventListener("mouseleave", function () {
  this.innerHTML = originalText;
});

// bonus
// Add an event that will change the background color of the body after 15 seconds on the page
setTimeout(function () {
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("timer").innerHTML =
    "<h2>It has been 15 seconds</h2>";
}, 15000);

// Add an event that will move an item on the page randomly every 3 seconds
setInterval(function () {
  let randX = Math.floor(-Math.random() * 90);
  let randY = Math.floor(Math.random() * 80);
  squareGreen.style.transform = `translate(${randX}vw, ${randY}vh)`;
}, 3000);

// The user ever hits ALL the following keys anywhere on the page in any order
let secret = document.querySelectorAll(".secret_text");
let secret_discover = [false, false, false, false, false];
document.addEventListener("keydown", function (zEvent) {
  switch (zEvent.key) {
    case "s":
      checkLetter(zEvent);
      secret_discover[0] = true;
      break;
    case "e":
      checkLetter(zEvent);
      secret_discover[1] = true;
      break;
    case "c":
      checkLetter(zEvent);
      secret_discover[2] = true;
      break;
    case "r":
      checkLetter(zEvent);
      secret_discover[3] = true;
      break;
    case "t":
      checkLetter(zEvent);
      secret_discover[4] = true;
      break;
  }
  if (!secret_discover.includes(false)) {
    loop();
    }
});

function checkLetter(Letter) {
  for (let i = 0; i < secret.length; i++) {
    if (secret[i].innerHTML.toLocaleLowerCase() === Letter.key) {
      secret[i].style.display = "inline";
    }
  }
}

let loop_i = 0;
function loop(){
    setTimeout(function() {
        if (loop_i < 6){
            secret[loop_i].style.color = "yellow";
            loop_i++;
            loop();
        }else if (loop_i >= 6 && loop_i < 12){
            secret[loop_i - 6].style.color = "black";
            loop_i++;
            loop();
        }else if (loop_i >= 12){
            loop_i = 0;
            loop();
        }

    }, 600);
}