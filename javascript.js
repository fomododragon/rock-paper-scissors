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

computerPlay();
playerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            return "It's a draw!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock"; 
        }
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"; 
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return  "You Lose! Scissors beats Paper"; 
        }
        if (computerSelection === "rock") {
            return  "You Win! Paper beats Rock"; 
        }
    } else {
        if (computerSelection === "rock") {
            return  "You Lose! Rock beats Scissors"; 
        }
        if (computerSelection === "paper") {
            return  "You Win! Scissors beats Paper"; 
        }
    }
}

console.log(playRound(playerSelection, computerSelection));

