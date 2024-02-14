document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let choice = this.getAttribute("data-type")
            return alert(`You clicked ${choice}`)
        })
    }
})

function runGame() {

}

function computerTurn() {

}

function checkAnswer() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}