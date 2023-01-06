console.log("Hello world!");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

function playerSelection() {
    const choice = prompt("Choose your move: ");
    return choice.toLowerCase();
};

function playRound(computer, player) {
    if (computer === player) {
        console.log("It's a draw!");
        return 0;
    } else if (computer === "rock" && player === "scissors") {
        console.log("The computer wins! rock beats scissors.");
        return "c";
    } else if (computer === "rock" && player === "paper") {
        console.log("The computer loses! paper beats rock.");
        return "p";
    } else if (computer === "scissors" && player === "paper") {
        console.log("The computer wins! scissors beats paper.");
        return "c";
    } else if (computer === "scissors" && player === "rock") {
        console.log("The computer loses! rock beats scissors.");
        return "p";
    } else if (computer === "paper" && player === "rock") {
        console.log("The computer wins! paper beats rock.");
        return "c";
    } else if (computer === "paper" && player === "scissors") {
        console.log("The computer loses! scissors beats paper.");
        return "p";
    }
};

function game() {
    let computerWins = 0;
    let playerWins = 0;
    for (i = 0; i < 5; i++) {
        const round = playRound(getComputerChoice(), playerSelection());
        if (round === "c") {
            computerWins++;
        } else if (round === "p") {
            playerWins++;
        }
    }
    if (computerWins === playerWins) {
        console.log("It's a draw!");
    } else if (computerWins > playerWins) {
        console.log("The computer wins");
    } else {
        console.log("The player wins");
    }
};

game();