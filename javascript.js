function getComputerChoice(){
    const cpmoves = ["Rock", "Paper", "Scissors"];
    const cpRandomMove = Math.floor(Math.random() * cpmoves.length);

    return cpmoves[cpRandomMove];

    }

    function getHumanChoice(){
    const choice = prompt("Rock, Paper, Scissors?");

    if (choice === "Rock") {
        return "Rock";
    }
    else if (choice === "Paper") {
        return "Paper"
    }
    else if (choice === "Scissors") {
        return "Scissors"
    }
    else {
        return "Invalid Try Again" + " " + prompt("Rock, Paper Or Scissors?");
    }
    }
    console.log(getComputerChoice());
    console.log(getHumanChoice());