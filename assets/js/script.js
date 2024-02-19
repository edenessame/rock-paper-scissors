let choice
let computerChoice



document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            choice = this.getAttribute("data-type");
            runGame();
        })
    }

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
            result.innerText = "You won!";
            
        } else {
            incrementComputerScore();
            result.innerText = "You lost!";
        }
    }
    else if (choice == "paper") {
        if (computerChoice == "rock"){
            incrementPlayerScore();
            result.innerText = "You won!";
        } else {
            incrementComputerScore();
            result.innerText = "You lost!";
        }
    }
    else if (choice == "scissors") {
        if (computerChoice == "paper"){
            incrementPlayerScore();
            result.innerText = "You won!";
        } else {
            incrementComputerScore();
            result.innerText = "You lost!";   
        }
    }
    
}

function winner() {
    let playerScore =document.getElementById("user-score")
    let computerScore =document.getElementById("Computer-score")
    let result = document.getElementById("result")
    
    if (playerScore >= 5) {
        result.innerText = "Congratulations! You won 5 times! You won!";
    } else (computerScore >= 5); {
        result.innerText = "Oh no! The computer won 5 times! You lost!";
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