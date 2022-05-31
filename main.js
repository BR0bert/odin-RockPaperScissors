//Computer's CHOICE
//Choose randomly between Rock Paper and Scissors

function computerPlay() {
  choice = { 0: "rock", 1: "paper", 2: "scissors" };
  computerChoice = choice[Math.floor(Math.random() * 3)];
  return computerChoice;
}

//Prompts the user to choose a weapon: Rock, Paper or Scissors
function playerPlay() {
  input = prompt("Choose your Weapon! ");
  return input;
}

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

  return decision[decisionReader];
}

//Currently a 5-round game
function game() {
  playerScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    result = playRound(playerPlay(), computerPlay());

    if (result.startsWith("You Win")) {
      playerScore += 1;
    } else if (result.startsWith("You Lose")) {
      computerScore += 1;
    } else {
      playerScore += 1;
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    console.log("You Won! " + playerScore + ":" + computerScore);
  } else if (playerScore < computerScore) {
    console.log("You Lost! " + playerScore + ":" + computerScore);
  } else {
    console.log("It's a Tie! " + playerScore + ":" + computerScore);
  }
}

game();
