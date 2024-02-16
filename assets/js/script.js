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
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    computerChoice = computerChoices[randomChoice];

    if (choice == computerChoice) {
        alert ("Draw!");
    } 
    else if (choice == "Rock") {
        if (computer == "Scissors"){
            alert ("You won!");
        } else {
            alert ("You lost!");
        }
    }
    else if (choice == "Paper") {
        if (computer == "Rock"){
            alert ("You won!");
        } else {
            alert ("You lost!");
        }
    }
    else if (choice == "Scissors") {
        if (computer == "Paper"){
            alert ("You won!");
        } else {
            alert ("You lost!");
        }
    }
}

function result() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}