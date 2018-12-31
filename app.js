//Game Score Cap
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener("click", function() {
  let value = parseInt(guessInput.value);
  console.log(value);
  console.log(typeof value);

  // validate
  if (isNaN(value) || value < min || value > max) {
    setMessage(`Please enter a number ${min} and ${max}`, "red");
  }
  //check for wining number
  if (value === winningNum) {
    //Disable input box
    guessInput.disabled = true;
    //Change border
    guessInput.style.borderColor = "green";
    //Set message
    setMessage(`${winningNum} is correct`, "green");
  } else {
    setMessage(`Try again`, "rainbow");
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
