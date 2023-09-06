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

let compPlay = getComputerChoice();
