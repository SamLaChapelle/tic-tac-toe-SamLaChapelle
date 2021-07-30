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
            //calls winner function
            winnerSingle();
            computerTurn();
          }
        }
      }
    });
  });
}

let gameOver = false;

/* -----COMPUTER AI FUNCTION----- */

function computerTurn() {
  //guard clause checking if gameOver variable is false then proceed with computer function, if true then force return a break out of the function
  if (!gameOver) {
    //variable holding the callback function for the Timeout interval
    let compInt = () => {
      compCell.textContent = "O";
      //calls winner function
      winnerSingle();
      //if statement to check for player status and return nothing to force a break and pull the computer out of the call back function
      if(playerStatus.textContent === "Computer Wins!") {
        return
      }
      playerStatus.textContent = `X's Turn`;
    };
    let compTurn;
    //declaring two variables to set up the array for all cells on the board and having the computer randomly choose one
    let compNum = Math.floor(Math.random() * 8);
    let compCell = boardCellArray[compNum];
    //if a cell is already filled with an X or O then rerun the function to make the computer choose another spot
    if (compCell.textContent) {
      computerTurn();
    } else if (!compCell.textContent) {
      //checking the player status to clear the Timeout when there is a winner
      if (playerStatus.textContent.includes("X Wins!")) {
        clearTimeout(compTurn);
        playerStatus.textContent = "X Wins!";
      } else if (playerStatus.textContent.includes("Computer Wins!")) {
        clearTimeout(compTurn);
        playerStatus.textContent = "Computer Wins!";
      } else {
        compTurn = setTimeout(compInt, 1000);
      }
    }
  } else {
    return;
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
    gameOver = true;
    gameSingleTimer();
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
    gameOver = true;
    gameSingleTimer();
  }
  //checks cells 4,5 and 6 textContent for "X", if yes then player X wins, else if "O" player O wins
  else if (
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
    gameOver = true;
    gameSingleTimer();
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
    gameOver = true;
    gameSingleTimer();
  }
  //checks cells 7,8 and 9 textContent for "X", if yes then player X wins, else if "O" player O wins
  else if (
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
    gameOver = true;
    gameSingleTimer();
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
    gameOver = true;
    gameSingleTimer();
  }

  /* -----VERTICAL WIN CASES----- */
  //checks cells 1,4 and 7 textContent for "X", if yes then player X wins, else if "O" player O wins
  else if (
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
    gameOver = true;
    gameSingleTimer();
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
    gameOver = true;
    gameSingleTimer();
  }
  //checks cells 2,5 and 8 textContent for "X", if yes then player X wins, else if "O" player O wins
  else if (
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
    gameOver = true;
    gameSingleTimer();
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
    gameOver = true;
    gameSingleTimer();
  }
  //checks cells 3,6 and 9 textContent for "X", if yes then player X wins, else if "O" player O wins
  else if (
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
    gameOver = true;
    gameSingleTimer();
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
    gameOver = true;
    gameSingleTimer();
  }

  /* -----DIAGONAL WIN CASES----- */
  //checks cells 3,5 and 7 textContent for "X", if yes then player X wins, else if "O" player O wins
  else if (
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
    gameOver = true;
    gameSingleTimer();
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
    gameOver = true;
    gameSingleTimer();
  }
  //checks cells 1,5 and 9 textContent for "X", if yes then player X wins, else if "O" player O wins
  else if (
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
    gameOver = true;
    gameSingleTimer();
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
    gameOver = true;
    gameSingleTimer();
  }
}

/* -----TIMER----- */

let count = 0;
let intervalId;
//timer div targeted through Id and assigned in to timer variable
let timer = document.getElementById("timer");
//gameTimer function housing two other functions
function gameSingleTimer() {
  //targeting minutes and seconds labels by their Id and assigning them to their corresponding variable
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  //assigning count to 0
  let count = 0;
  //if there is no interval Id then set the interval Id
  if (!intervalId) {
    intervalId = setInterval(countUp, 1000);
  }
  //checks if the player status includes "Wins", if true then clearInterval
  if (playerStatus.textContent.includes("Wins!")) {
    clearInterval(intervalId);
    return;
  }
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
  }
}
