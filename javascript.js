let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const cpmoves = ["rock", "paper", "scissors"];
    const cpRandomMove = Math.floor(Math.random() * cpmoves.length);

    return cpmoves[cpRandomMove];

    }

    function getHumanChoice(){
   const choice = prompt(["Rock, Paper, Scissors?"]).toLowerCase();

    if (choice  === "rock") {
        return "rock";
    }
    else if (choice === "paper") {
        return "paper"
    }
    else if (choice === "scissors") {
        return "scissors"
    }
    else {
       return "Invalid Choice";
    }
    }

   function playRound(humanChoice, cpChoice) {
    if (humanChoice == cpChoice) {
        return "It's a Tie!"
    } else if ((humanChoice == "rock" && cpChoice == "scissors") || (humanChoice == "paper" && cpChoice == "rock") || (humanChoice == "scissors" && cpChoice == "paper")) {
        humanScore++;
        return "Human Wins";
    } else {
        computerScore++;
    return "Computer Wins";
   }
}

function gameResults() {
    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Score - Human : ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer will own you again!");
    } else {
        console.log("Well It's a tie");
    }
}


gameResults()   