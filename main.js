//GLOBAL VARIABLES
let playerScore = 0;
let computerScore = 0;

//Computer's CHOICE
//Choose randomly between Rock Paper and Scissors

function computerPlay() {
  choice = { 0: "rock", 1: "paper", 2: "scissors" };
  computerChoice = choice[Math.floor(Math.random() * 3)];
  return computerChoice;
}

//DECLARING VARIABLES USING the DOM
//weapon variables
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//score-box variables

const playerBox = document.querySelector(".player-box");
const computerBox = document.querySelector(".computer-box");

//score message variables
const scoreResult = document.querySelector("#score-result");
const scoreMessage = document.querySelector("#score-message");

//score variables
const playerScoreMessage = document.querySelector("#player-score");
const computerScoreMessage = document.querySelector("#computer-score");

//ENDSCREEN ELEMENTS
const displayEndscreen = document.querySelector(".endscreen");
const restartButton = document.querySelector(".btn-restart");
const container = document.querySelector(".container");
const displayResultMessage = document.querySelector(".display-result");

//EVENT LISTENERS
rockButton.addEventListener("click", () => game("rock"));
paperButton.addEventListener("click", () => game("paper"));
scissorsButton.addEventListener("click", () => game("scissors"));
restartButton.addEventListener("click", restartGame);

//This function plays a single round

function playRound(playerSelection, computerSelection) {
  decisionReader = playerSelection.toLowerCase() + "-" + computerSelection;

  decision = {
    "rock-rock": "It's a Tie!",
    "rock-paper": "You Lose!Paper beats Rock",
    "rock-scissors": "You Win!Rock beats Scissors",
    "paper-rock": "You Win!Paper beats Rock",
    "paper-paper": "It's a Tie!",
    "paper-scissors": "You Lose!Scissors beats Paper",
    "scissors-rock": "You Lose!Rock beats Scissors",
    "scissors-paper": "You Win!Scissors beats Paper",
    "scissors-scissors": "It's a Tie!",
  };

  result = decision[decisionReader];

  if (result.startsWith("You Win")) {
    scoreResult.textContent = "You Won!";
    scoreMessage.textContent = `${playerSelection} beats ${computerSelection}`;
    playerScore += 1;
    playerScoreMessage.textContent = `Player: ${playerScore}`;
  } else if (result.startsWith("You Lose")) {
    scoreResult.textContent = "You Lost!";
    scoreMessage.textContent = `${computerSelection} beats ${playerSelection}`;
    computerScore += 1;
    computerScoreMessage.textContent = `Computer: ${computerScore}`;
  } else {
    scoreResult.textContent = "It's a Tie!";
    scoreMessage.textContent = `${computerSelection} ties with ${playerSelection}`;
    computerScore = computerScore;
    playerScore = playerScore;
  }
}

//THE ACTUAL GAME (MAIN FUNCTION)
function game(playerSelection) {
  if (isGameOver()) {
    endScreen();
  }

  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);

  if (isGameOver()) {
    displayResult();
    endScreen();
  }
}

//check if one of the players has reached 5

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

//Display ENDSCREEN
function endScreen() {
  displayEndscreen.classList.add("active");
  container.classList.add("opacity");
}

//RESTART GAME
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreResult.textContent = "Choose your weapon";
  scoreMessage.textContent = "First to score 5 points wins the game";
  playerScoreMessage.textContent = "Player: 0";
  computerScoreMessage.textContent = "Computer: 0";
  playerBox.textContent = "❔";
  computerBox.textContent = "❔";
  displayEndscreen.classList.remove("active");
  container.classList.remove("opacity");
}

//DISPLAY RESULT AT THE END:WHO WON and WHO LOST?

function displayResult() {
  if (playerScore > computerScore) {
    displayResultMessage.textContent = "You Won!";
  } else {
    displayResultMessage.textContent = "You Lost!";
  }
}

//Update score boxes with the images of the chosen weapon
function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      playerBox.textContent = "ROCK";
      break;
    case "paper":
      playerBox.textContent = "PAPER";
      break;
    case "scissors":
      playerBox.textContent = "SCISSORS";
      break;
  }

  switch (computerSelection) {
    case "rock":
      computerBox.textContent = "ROCK";
      break;
    case "paper":
      computerBox.textContent = "PAPER";
      break;
    case "scissors":
      computerBox.textContent = "SCISSORS";
      break;
  }
}
