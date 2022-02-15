let computerShape = [
    'Rock',
    'Paper',
    'Scissors'
];

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function computerPlay() {
    randomIndex = getRandomInt(3);
    randomShape = computerShape[randomIndex];
}

computerPlay();

console.log(randomShape);
