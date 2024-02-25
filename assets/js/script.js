let choice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
const result = document.getElementById("result");
const winner = document.getElementById("winner");

/**
 * Iterates through the different item buttons and sets them in the variable "choice"
 * So when "choice" is called it is associated with the correct item button that was clicked
 * When the "replay" button is clicked, calls the replayGame function
 * Some code taken from the code institute love maths walk through project
 * https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/05-tidying-up/01-a-few-last-things/assets/js/script.js
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            choice = this.getAttribute("data-type");
            runGame();
        });
    }

    document.getElementById("replay").addEventListener("click", replayGame);

    runGame();
});

/**
 * Sets the computer choice randomly
 * Compares the players choice and the computers choice and determins a winner
 * Updates the result paragraph with who won
 * Updates the userScore and computerScore variables and the "scores" spans
 * calls the checkWinner function
 */
function runGame() {
    let computerChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    computerChoice = computerChoices[randomChoice];
    
    if (choice == computerChoice) {
        result.innerText = `You played ${choice}. The computer played ${computerChoice}. It's a draw!`;
        result.style.color = "blue";
    } 
    else if (choice == "rock") {
        if (computerChoice == "scissors"){
            incrementPlayerScore();
            userScore++;
            result.innerText = `You played ${choice}. The computer played ${computerChoice}. You won!`;
            result.style.color = "#008200";
            } else {
            incrementComputerScore();
            computerScore++;
            result.innerText = `You played ${choice}. The computer played ${computerChoice}. You lost!`;
            result.style.color = "#960018";
        }
    }
    else if (choice == "paper") {
        if (computerChoice == "rock"){
            incrementPlayerScore();
            userScore++;
            result.innerText = `You played ${choice}. The computer played ${computerChoice}. You won!`;
            result.style.color = "#008200";
        } else {
            incrementComputerScore();
            computerScore++;
            result.innerText = `You played ${choice}. The computer played ${computerChoice}. You lost!`;
            result.style.color = "#960018";
        }
    }
    else if (choice == "scissors") {
        if (computerChoice == "paper"){
            incrementPlayerScore();
            userScore++;
            result.innerText = `You played ${choice}. The computer played ${computerChoice}. You won!`;
            result.style.color = "#008200";
        } else {
            incrementComputerScore();
            computerScore++;
            result.innerText = `You played ${choice}. The computer played ${computerChoice}. You lost!`;
            result.style.color = "#960018";
        }
    }
    checkWinner();
}

/**
 * Updates the "winner" paragraph when either the player or computer reaches 5 wins 
 */
function checkWinner() {
    if (userScore >= 5) {
        winner.innerText = "Congratulations! You won 5 times! You win!\n Press the replay button to play again!";
        winner.style.color = "#40a829";
        disablebtn();
        return;
    } else if (computerScore >= 5) {
        winner.innerText = "Oh no! The computer won 5 times! You lost!\n Press the replay button to play again!";
        winner.style.color = "#FF0800";
        disablebtn();
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

/**
 * Resets all the variables to play the game again
 */
function replayGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("result").innerText = "Let's Play!";
    document.getElementById("winner").innerText = "Who will win?";
    enablebtn(); 
    winner.style.color = "black";
    result.style.color = "black";
}

function disablebtn() {
    document.getElementById("btn-rock").disabled = true; 
    document.getElementById("btn-paper").disabled = true; 
    document.getElementById("btn-scissors").disabled = true; 
}

function enablebtn() {
    document.getElementById("btn-rock").disabled = false; 
    document.getElementById("btn-paper").disabled = false; 
    document.getElementById("btn-scissors").disabled = false; 
}