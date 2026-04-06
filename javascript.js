function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    computerChoice = "rock";
  } else if (computerChoice == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Choose rock, paper or scissors: ");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (computerChoice == "rock" && humanChoice == "scissors") {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      console.log("You lose! Scissors beats Paper.");
      computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
      console.log("You win! Scissors beats Paper.");
      humanScore++;
    } else if (computerChoice == "rock" && humanChoice == "paper") {
      console.log("You win! Paper beats Rock.");
      humanScore++;
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
      console.log("You win! Rock beats Scissors.");
      humanScore++;
    }
  }
  for(let i=1; i<=5; i++){
    playRound(getHumanChoice(),getComputerChoice())
  }
  if (computerScore>humanScore){
    console.log("You lose! Computer wins.");    
  }
  else{
    console.log("You Win! Computer loses.");
  }
}

playGame();
