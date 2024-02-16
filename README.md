# Rock, Paper, Scissors

## Code Institute - Portfolio Project 2 - JavaScript Essentials

## Testing

* After setting up the HTML, CSS and JavaScript files I checked they were linked by adding a body colour placeholder to the css file and a console.log message to the javascript file. Then opening the preview browser, typing: python3 -m http.server into the terminal. In the preview browser I could see the page was the correct colour and by inspecting the page using DevTools I could see that the message had appeared in the console.

* After adding a click event listener to the buttons I tested that it was responsive, clicking the button should give an alert saying: "You played Rock/Paper/Scissors" depending on which corresponding button was clicked and this worked correctly.

* I tested my computerChoice variable was making a random selection, by using: console.log(computerChoice). When a button was pressed the console would randomly log either "Rock", "Paper" or "Scissors" regardless of what button was pressed.

* I tested my runGame function was working correctly by logging the computerChoice variable to the console and clicking the buttons. If "scissors" were pressed and the console logged "rock" an alert would appear saying "You lost!", if the console logged "paper" the alert would say: "You won!" and if it was scissors the alert would say: "It's a draw!". This worked correctly for all the buttons. 

## Bugs

* When testing my runGame function I wasn't getting the expected result. The button pressed should have been compared to a random selection from the computer returning an alert, saying either "You won!", "You lost!" or "It's a draw!" depending on how they compared. But no alert would appear, I had already tested that my buttons were working correctly and the computerChoice variable was working, but they wern't comparing to each other. The Tutor team helped me to realise that the strings in my computerChoices array were capitalized, whereas the data-types on the buttons were not, so they couldn't compare.