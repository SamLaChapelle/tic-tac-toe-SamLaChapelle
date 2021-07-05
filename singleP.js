// start button variable assigned to the HTML Element button with the Id "start-button"
let startButton = document.getElementById("start-button");
// platerStatus variable assigned to the HTML Element h4 with the Id "player-status"
let playerStatus = document.getElementById("player-status");
// A click event added to the start button to disable when clicked and print "Player X's Turn"

/* ------START BUTTON----- */

startButton.addEventListener("click", (evt) => {
  //calls the playerNames function to prompt the user with the enter name form
  gameSinglePlay();
  gameSingleTimer();
  startButton.disabled = true;
  resetButton.disabled = false;
});

//targeting all board cell boxes by their class and putting it in a variable
let allBoardCells = document.getElementsByClassName("TTT");
//creating an array of all board cell boxes
let boardCellArray = Array.from(allBoardCells);

/* RESET BUTTON */

// reset button variable assigned to the HTML Element button with the Id "reset-button"
let resetButton = document.getElementById("reset-button");
//setting the reset button to disabled
resetButton.disabled = true;
resetButton.addEventListener("click", (evt) => {
  //reloads the page
  document.location.reload();
});

/* -----GAME PLAY FUNCTION----- */

function gameSinglePlay() {
  //disables start button
  startButton.disabled = true;
  //changes the players status to...
  playerStatus.textContent = `X's Turn`;
  /* FOR EACH LOOP W/ EVENT LISTENER */
  //forEach function applied to the boardCellArray
  boardCellArray.forEach((boardCell) => {
    //for each cell (boardCell) itself add an event listener
    boardCell.addEventListener("click", (evt) => {
      //checks if the boardCell has been filled, if so, then alerts the player to "Choose another position", if not proceed
      if (boardCell.textContent === "X" || boardCell.textContent === "O") {
        alert("Choose another position");
      } else if (boardCell.textContent === "") {
        //checks if start button has been clicked and if it has then run the next if block, if not prompt the player with "Click Start To Begin"
        if (startButton.disabled === true) {
          //checks whose turn it is and prints the corresponding text & change the player status to the other players turn
          if (playerStatus.textContent === `X's Turn`) {
            boardCell.textContent = "X";
            playerStatus.textContent = `Computer's Turn`;
            computerTurn();
          }
        }
      }
      //calls winner function
      winnerSingle();
    });
  });
}

/* -----COMPUTER AI FUNCTION----- */

function computerTurn() {
  let compNum = Math.floor(Math.random() * 8);
  let compCell = boardCellArray[compNum];
  if (compCell.textContent) {
    computerTurn();
  } else {
    setInterval(() => {
      compCell.textContent = "O";
      playerStatus.textContent = `X's Turn`;
    }, 1000);
  }
}

/* -----ALL CELL BOXES----- */

//All 9 individual cell boxes targeted by their Id and assigned to a variable
let cellOne = document.getElementById("boxOne");
let cellTwo = document.getElementById("boxTwo");
let cellThree = document.getElementById("boxThree");
let cellFour = document.getElementById("boxFour");
let cellFive = document.getElementById("boxFive");
let cellSix = document.getElementById("boxSix");
let cellSeven = document.getElementById("boxSeven");
let cellEight = document.getElementById("boxEight");
let cellNine = document.getElementById("boxNine");

/* -----WINNER FUNCTION----- */

//winner function contains if block to check the different combination of cells to win
function winnerSingle() {
  /* -----HORIZONTAL WIN CASES----- */
  //checks cells 1,2 and 3 textContent for "X", if yes then player X wins, else if "O" player O wins
  if (
    cellOne.textContent === "X" &&
    cellTwo.textContent === "X" &&
    cellThree.textContent === "X"
  ) {
    //changes player status
    playerStatus.textContent = `X Wins!`;
    //changes the textContent color to show what cells caused the win
    cellOne.style.color = "yellow";
    cellTwo.style.color = "yellow";
    cellThree.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  } else if (
    cellOne.textContent === "O" &&
    cellTwo.textContent === "O" &&
    cellThree.textContent === "O"
  ) {
    //changes player status
    playerStatus.textContent = `Computer Wins!`;
    //changes the textContent color to show what cells caused the win
    cellOne.style.color = "yellow";
    cellTwo.style.color = "yellow";
    cellThree.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  }
  //checks cells 4,5 and 6 textContent for "X", if yes then player X wins, else if "O" player O wins
  if (
    cellFour.textContent === "X" &&
    cellFive.textContent === "X" &&
    cellSix.textContent === "X"
  ) {
    //changes player status
    playerStatus.textContent = `X Wins!`;
    //changes the textContent color to show what cells caused the win
    cellFour.style.color = "yellow";
    cellFive.style.color = "yellow";
    cellSix.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  } else if (
    cellFour.textContent === "O" &&
    cellFive.textContent === "O" &&
    cellSix.textContent === "O"
  ) {
    //changes player status
    playerStatus.textContent = `Computer Wins!`;
    //changes the textContent color to show what cells caused the win
    cellFour.style.color = "yellow";
    cellFive.style.color = "yellow";
    cellSix.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  }
  //checks cells 7,8 and 9 textContent for "X", if yes then player X wins, else if "O" player O wins
  if (
    cellSeven.textContent === "X" &&
    cellEight.textContent === "X" &&
    cellNine.textContent === "X"
  ) {
    //changes player status
    playerStatus.textContent = `X Wins!`;
    //changes the textContent color to show what cells caused the win
    cellSeven.style.color = "yellow";
    cellEight.style.color = "yellow";
    cellNine.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  } else if (
    cellSeven.textContent === "O" &&
    cellEight.textContent === "O" &&
    cellNine.textContent === "O"
  ) {
    //changes player status
    playerStatus.textContent = `Computer Wins!`;
    //changes the textContent color to show what cells caused the win
    cellSeven.style.color = "yellow";
    cellEight.style.color = "yellow";
    cellNine.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  }

  /* -----VERTICAL WIN CASES----- */
  //checks cells 1,4 and 7 textContent for "X", if yes then player X wins, else if "O" player O wins
  if (
    cellOne.textContent === "X" &&
    cellFour.textContent === "X" &&
    cellSeven.textContent === "X"
  ) {
    //changes player status
    playerStatus.textContent = `X Wins!`;
    //changes the textContent color to show what cells caused the win
    cellOne.style.color = "yellow";
    cellFour.style.color = "yellow";
    cellSeven.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  } else if (
    cellOne.textContent === "O" &&
    cellFour.textContent === "O" &&
    cellSeven.textContent === "O"
  ) {
    //changes player status
    playerStatus.textContent = `Computer Wins!`;
    //changes the textContent color to show what cells caused the win
    cellOne.style.color = "yellow";
    cellFour.style.color = "yellow";
    cellSeven.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  }
  //checks cells 2,5 and 8 textContent for "X", if yes then player X wins, else if "O" player O wins
  if (
    cellTwo.textContent === "X" &&
    cellFive.textContent === "X" &&
    cellEight.textContent === "X"
  ) {
    //changes player status
    playerStatus.textContent = `X Wins!`;
    //changes the textContent color to show what cells caused the win
    cellTwo.style.color = "yellow";
    cellFive.style.color = "yellow";
    cellEight.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  } else if (
    cellTwo.textContent === "O" &&
    cellFive.textContent === "O" &&
    cellEight.textContent === "O"
  ) {
    //changes player status
    playerStatus.textContent = `Computer Wins!`;
    //changes the textContent color to show what cells caused the win
    cellTwo.style.color = "yellow";
    cellFive.style.color = "yellow";
    cellEight.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  }
  //checks cells 3,6 and 9 textContent for "X", if yes then player X wins, else if "O" player O wins
  if (
    cellThree.textContent === "X" &&
    cellSix.textContent === "X" &&
    cellNine.textContent === "X"
  ) {
    //changes player status
    playerStatus.textContent = `X Wins!`;
    //changes the textContent color to show what cells caused the win
    cellThree.style.color = "yellow";
    cellSix.style.color = "yellow";
    cellNine.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  } else if (
    cellThree.textContent === "O" &&
    cellSix.textContent === "O" &&
    cellNine.textContent === "O"
  ) {
    //changes player status
    playerStatus.textContent = `Computer Wins!`; //changes the textContent color to show what cells caused the win
    cellThree.style.color = "yellow";
    cellSix.style.color = "yellow";
    cellNine.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  }

  /* -----DIAGONAL WIN CASES----- */
  //checks cells 3,5 and 7 textContent for "X", if yes then player X wins, else if "O" player O wins
  if (
    cellThree.textContent === "X" &&
    cellFive.textContent === "X" &&
    cellSeven.textContent === "X"
  ) {
    //changes player status
    playerStatus.textContent = `X Wins!`;
    //changes the textContent color to show what cells caused the win
    cellThree.style.color = "yellow";
    cellFive.style.color = "yellow";
    cellSeven.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  } else if (
    cellThree.textContent === "O" &&
    cellFive.textContent === "O" &&
    cellSeven.textContent === "O"
  ) {
    //changes player status
    playerStatus.textContent = `Computer Wins!`;
    //changes the textContent color to show what cells caused the win
    cellThree.style.color = "yellow";
    cellFive.style.color = "yellow";
    cellSeven.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  }
  //checks cells 1,5 and 9 textContent for "X", if yes then player X wins, else if "O" player O wins
  if (
    cellOne.textContent === "X" &&
    cellFive.textContent === "X" &&
    cellNine.textContent === "X"
  ) {
    //changes player status
    playerStatus.textContent = `X Wins!`;
    //changes the textContent color to show what cells caused the win
    cellOne.style.color = "yellow";
    cellFive.style.color = "yellow";
    cellNine.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  } else if (
    cellOne.textContent === "O" &&
    cellFive.textContent === "O" &&
    cellNine.textContent === "O"
  ) {
    //changes player status
    playerStatus.textContent = `Computer Wins!`;
    //changes the textContent color to show what cells caused the win
    cellOne.style.color = "yellow";
    cellFive.style.color = "yellow";
    cellNine.style.color = "yellow";
    //resetting the reset button to disabled = false
    resetButton.disabled = false;
  }
}

/* -----TIMER----- */

//count variable assigned to 0
let count = 0;

//timer div targeted through Id and assigned in to timer variable
let timer = document.getElementById("timer");
//gameTimer function housing two other functions
function gameSingleTimer() {
  //targeting minutes and seconds labels by their Id and assigning them to their corresponding variable
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  //assigning count to 0
  let count = 0;
  //setting interval to call countUp function and tick every second
  let intervalId = setInterval(countUp, 1000);
  //countUp function
  function countUp() {
    //add 1 to count
    ++count;
    //sets the textContent of both minutes and seconds label and calls a third function
    seconds.innerHTML = padding(count % 60);
    minutes.innerHTML = padding(parseInt(count / 60));
    //padding function
    function padding(value) {
      //assigning numVal variable to value and an empty string
      let numVal = value + "";
      //checks the length of the numVal, if < 2 then add a padding 0, anything else keep normal numVal
      if (numVal.length < 2) {
        return "0" + numVal;
      } else {
        return numVal;
      }
    }
    //checks if the player status includes "Wins", if true then clearInterval
    if (playerStatus.textContent.includes("Wins!")) {
      clearInterval(intervalId);
    }
  }
}
