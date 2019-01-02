//Game Score Cap
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
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

// Play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

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
    gameOver(true, `${winningNum} is correct, You win`);
    //gave over wone
    // //Disable input box
    // guessInput.disabled = true;
    // //Change border
    // guessInput.style.borderColor = "green";
    // //Set message
    // setMessage(`${winningNum} is correct`, "green");
  } else {
    //wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game Over, you lost loser. The correct number was ${winningNum} `
      );
      // game over lost

      // //Disable input box
      // guessInput.disabled = true;
      // //Change border
      // guessInput.style.borderColor = "red";
      // //Set message

      // setMessage(
      //   `Game Over, you lost loser. The correct number was ${winningNum} `,
      //   "red"
      // );
    } else {
      // Game continues -- answer wrong

      //Change border
      guessInput.style.borderColor = "red";

      //Clear the input
      guessInput.value = "";

      //Tell user its the wrong number
      setMessage(`${value} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //Disable input box
  guessInput.disabled = true;
  //Change border
  guessInput.style.borderColor = color;
  //text color
  message.style.color = color;
  //Set message
  setMessage(msg);

  // Play again
  guessBtn.value = "¿quieres jugar otra vez? Yes? No?";
  guessBtn.className += "play-again";
}

//Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
