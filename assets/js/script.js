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


}

function computerTurn() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[randomChoice];
}

function result() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}