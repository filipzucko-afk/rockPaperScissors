const rockButton=document.querySelector(".rockButton")
const paperButton=document.querySelector(".paperButton")
const scissorsButton=document.querySelector(".scissorsButton")
const results=document.querySelector(".results");
const computerChose=document.querySelector(".computerChoice")

let computerScore=0;
let humanScore=0;
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

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (computerScore==5||humanScore==5){
      return;
    }
    if (computerChoice == "rock" && humanChoice == "scissors") {
      computerScore++;
      computerChose.textContent=`Computer chose ${computerChoice}`
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      computerScore++;
      computerChose.textContent=`Computer chose ${computerChoice}`
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      computerScore++;
      computerChose.textContent=`Computer chose ${computerChoice}`
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
      humanScore++;
      computerChose.textContent=`Computer chose ${computerChoice}`
    } else if (computerChoice == "rock" && humanChoice == "paper") {
      humanScore++;
      computerChose.textContent=`Computer chose ${computerChoice}`
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
      humanScore++;
      computerChose.textContent=`Computer chose ${computerChoice}`
    }
    results.textContent=`RESULTS: Human = ${humanScore} | Computer = ${computerScore}`
    if (computerScore==5){
      results.textContent='GAME OVER. YOU LOST.'
    }
    else if(humanScore==5){
      results.textContent='GAME OVER. YOU WON.'
    }
  }
rockButton.addEventListener("click" ,()=>{
  let computerChoice=getComputerChoice();
  playRound("rock",computerChoice);
})
paperButton.addEventListener("click" ,()=>{
  let computerChoice=getComputerChoice();
  playRound("paper",computerChoice);
})
scissorsButton.addEventListener("click" ,()=>{
  let computerChoice=getComputerChoice();
  playRound("scissors",computerChoice);
})