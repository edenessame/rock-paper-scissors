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
            return alert ("You won!");
        } else {
            return alert ("You lost!");
        }
    }
    else if (choice == "paper") {
        if (computerChoice == "rock"){
            return alert ("You won!");
        } else {
            return alert ("You lost!");
        }
    }
    else if (choice == "scissors") {
        if (computerChoice == "paper"){
            return alert ("You won!");
        } else {
            return alert ("You lost!");
        }
    }
}

function result() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}