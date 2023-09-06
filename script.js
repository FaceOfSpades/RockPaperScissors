//input rock, paper, or scissors
//computer picks random rock, paper, or scissors
//compare choices

function getComputerChoice() {
   let compChoice = Math.floor(Math.random() * 3 + 1);

   if (compChoice === 1) {
    compChoice = "rock";
   } else if (compChoice === 2) {
        compChoice = "paper";
   } else compChoice = "scissors"; //3

   return compChoice;
}

function getPlayerChoice() {
    let playChoice = prompt("Let's play Rock, Paper, Scissors. Please enter your choice: ");
    playChoice = playChoice.toLowerCase();

    let choice = "false";

    while (choice === "false"){
        if (playChoice === "rock" || playChoice === "paper" || playChoice === "scissors") {
            choice = "true";
            return playChoice;
        } else playChoice = prompt("That is not a valid choice, please try again: ");  
    }  
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose, scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose, rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win, scissors beats paper!";
    } 
}

playRound(getPlayerChoice(), getComputerChoice());





