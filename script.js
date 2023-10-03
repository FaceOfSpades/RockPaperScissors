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

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";

    if (playerSelection === computerSelection) {
        result = "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose, paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win, rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win, paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose, scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose, rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win, scissors beats paper!";
    } 
    return result;
}
 let winCount = 0;
 let lossCount = 0;
 let result = "";
   
const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");
const results = document.querySelector("#results");
const p = document.createElement("p");
const p2 = document.createElement("p");
const gameResult = document.createElement("h2");
const roundResult = document.createElement("h2");
const reset = document.createElement("button");
reset.textContent = "Reset";

buttons.forEach( (e) => {
    e.addEventListener("click", () => {
        roundResult.remove();
        result = e.innerHTML;
        result = result.toLowerCase();
        let winner = playRound(result);

        if (winner === "You win, rock beats scissors!" || winner === "You win, scissors beats paper!" || winner === "You win, paper beats rock!") {
            winCount++;
        } else if (winner === "It's a Tie!"){

        }
        else lossCount++;

        roundResult.textContent = winner;
        results.appendChild(roundResult);

        p.textContent = "Your score: " + winCount;
        p2.textContent = "Computer score: " + lossCount;
        div.appendChild(p);
        div.appendChild(p2);

        if (winCount == 5) {
            gameResult.textContent = "Congratulations, you were the first to 5. You won the game!";
            results.appendChild(gameResult);
            div.appendChild(reset);
        }

        if (lossCount == 5) {
            gameResult.textContent = "Sorry, you lost. Your opponent scored 5 points first.";
            results.appendChild(gameResult);
            div.appendChild(reset);
        }

        reset.addEventListener("click", () => {
            winCount = 0;
            lossCount = 0;
            reset.remove();
            p.remove();
            p2.remove();
            gameResult.remove();
            roundResult.remove();
        })
    })
})