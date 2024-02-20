let choice
let computerChoice

let userScore = 0
let computerScore = 0



document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            choice = this.getAttribute("data-type");
            runGame();
        })
    }

    document.getElementById("replay").addEventListener("click", replayGame);

    runGame();
})

function runGame() {
    let computerChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    computerChoice = computerChoices[randomChoice];

    let result = document.getElementById("result")

    if (choice == computerChoice) {
        result.innerText = "It's a draw!";
    } 
    else if (choice == "rock") {
        if (computerChoice == "scissors"){
            incrementPlayerScore();
            userScore++
            result.innerText = "You won!";
            
        } else {
            incrementComputerScore();
            computerScore++
            result.innerText = "You lost!";
        }
    }
    else if (choice == "paper") {
        if (computerChoice == "rock"){
            incrementPlayerScore();
            userScore++
            result.innerText = "You won!";
        } else {
            incrementComputerScore();
            computerScore++
            result.innerText = "You lost!";
        }
    }
    else if (choice == "scissors") {
        if (computerChoice == "paper"){
            incrementPlayerScore();
            userScore++
            result.innerText = "You won!";
        } else {
            incrementComputerScore();
            computerScore++
            result.innerText = "You lost!";   
        }
    }
    checkWinner();
}

function checkWinner() {
    
    let winner = document.getElementById("winner");
    
    if (userScore >= 5) {
        winner.innerText = "Congratulations! You won 5 times! You win!";
        return;
    } else if (computerScore >= 5) {
        winner.innerText = "Oh no! The computer won 5 times! You lost!";
        return;
    } 
}

/**
 * Gets the current score from the DOM and increments it by 1
 * code taken from the code institute love maths walk through project
 * https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/03-displaying-the-question-and-answer/04-updating-the-scores/assets/js/script.js
 */
function incrementPlayerScore() {

    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;

}

/**
 * Gets the current score from the DOM and increments it by 1
 * code taken from the code institute love maths walk through project
 * https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/03-displaying-the-question-and-answer/04-updating-the-scores/assets/js/script.js
 */
function incrementComputerScore() {
    
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;

}

function replayGame() {

        document.location.reload();
    
}
