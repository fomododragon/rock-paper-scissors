let shape = [
    "rock",
    "paper",
    "scissors"
];

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function computerPlay() {
    randomIndex = getRandomInt(3);
    computerSelection = shape[randomIndex];
}

function playerPlay() {
    playerSelection = prompt("Let's Play: Rock, Paper or Scissors?").toLowerCase();

    while (true) {
        if (shape.includes(playerSelection)) {
            break;
        } playerSelection = prompt("Try Again: Rock, Paper or Scissors?").toLowerCase();
    }
}

let playerScore = 0;
let computerScore = 0;
let counter = 1;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            counter -= 1;
            return results = "It's a draw!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            return results = "You Lose! Paper beats Rock"; 
        }
        if (computerSelection === "scissors") {
            playerScore += 1;
            return results = "You Win! Rock beats Scissors"; 
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            return results = "You Lose! Scissors beats Paper"; 
        }
        if (computerSelection === "rock") {
            playerScore += 1;
            return results =  "You Win! Paper beats Rock"; 
        }
    } else {
        if (computerSelection === "rock") {
            computerScore += 1;
            return results =  "You Lose! Rock beats Scissors"; 
        }
        if (computerSelection === "paper") {
            playerScore += 1;
            return results =  "You Win! Scissors beats Paper"; 
        }
    }
}

function game() {
    while (counter <= 5) {
        computerPlay();
        playerPlay();
        playRound(playerSelection,computerSelection);
        alert("Round " + counter
         + " - " + results + "\r\n\r\n" + "Player: " + playerScore + "\r\n" + "Computer: " + computerScore);
         counter += 1;
    }
    if (playerScore > computerScore) {
        alert("You have won!");
    } else {
        alert("You have lost");
    }
}

game();