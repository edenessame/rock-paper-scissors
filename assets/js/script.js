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

    console.log(computerChoice)

    if (choice == computerChoice) {
        return alert ("Draw!");
    } 
    else if (choice == "rock") {
        if (computerChoice == "scissors"){
            incrementPlayerScore();
            return alert ("You won!");
            
        } else {
            incrementComputerScore();
            return alert ("You lost!");
        }
    }
    else if (choice == "paper") {
        if (computerChoice == "rock"){
            incrementPlayerScore();
            return alert ("You won!");
        } else {
            incrementComputerScore();
            return alert ("You lost!");
        }
    }
    else if (choice == "scissors") {
        if (computerChoice == "paper"){
            incrementPlayerScore();
            return alert ("You won!");
        } else {
            incrementComputerScore();
            return alert ("You lost!");   
        }
    }
}

function result() {

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