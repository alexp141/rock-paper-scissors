function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); //returns value from 0-2

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
        default:
            return "error picking choice"
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let wonGame = `You win! ${playerSelection} beats ${computerSelection}`;
    let lostGame = `You lose! ${playerSelection} beats ${computerSelection}`;

    if (playerSelection === computerSelection) {
        return "Tie game";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return wonGame;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return wonGame;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return wonGame;
    }
    else {
        return lostGame;
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Select your choice");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.startsWith("You win!")) {
            playerScore++;
        }
        else if (result.startsWith("You lose!")){
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You have won the match!")
    }
    else if (playerScore < computerScore) {
        console.log("You have lost the match!")
    }
    else {
        console.log("The match has resulted in a tie!")
    }
}
