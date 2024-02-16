document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let choice = this.getAttribute("data-type");
            runGame();
        })
    }

    runGame();
})

function runGame() {

}

function computerTurn() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[randomChoice];
    let computer = document.getElementById("computer-choice");
    document.getElementById("computer-choice").innerText = computerChoice;
}

function checkAnswer() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}