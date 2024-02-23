# Rock, Paper, Scissors

## Code Institute - Portfolio Project 2 - JavaScript Essentials

## Testing

* After setting up the HTML, CSS and JavaScript files I checked they were linked by adding a body colour placeholder to the css file and a console.log message to the javascript file. Then opening the preview browser, typing: python3 -m http.server into the terminal. In the preview browser I could see the page was the correct colour and by inspecting the page using DevTools I could see that the message had appeared in the console.

* After adding a click event listener to the buttons I tested that it was responsive, clicking the button should give an alert saying: "You played Rock/Paper/Scissors" depending on which corresponding button was clicked and this worked correctly.

* I tested my computerChoice variable was making a random selection, by using: console.log(computerChoice). When a button was pressed the console would randomly log either "Rock", "Paper" or "Scissors" regardless of what button was pressed.

* I tested my runGame function was working correctly by logging the computerChoice variable to the console and clicking the buttons. If "scissors" were pressed and the console logged "rock" an alert would appear saying "You lost!", if the console logged "paper" the alert would say: "You won!" and if it was scissors the alert would say: "It's a draw!". This worked correctly for all the buttons.

* I tested my incrementPlayerScore and incrementComputerScore functions, when the buttons were clicked the correct alert and console logs appeared and either the player score or computer score increased correctly in-line with the result and if it was a draw neither changed.

* I tested my checkWinner function, if the user score reached 5 the "winner" paragraph reads :"Congratulations! You won 5 times! You win!", if the computer score reaches 5 first the paragraph reads: "Oh no! The computer won 5 times! You lost!"

* I tested the replayGame function and button worked, when the button was pressed the page reloaded and reset all the values.

* I tested that the correct items appeared in the right spans, so what the user and computer played could be seen. Whatever button was clicked the correct word would appear in the player-choice span and in the result paragraph it would say "You played 'the correct thing'". It also did the same for what the computer was selecting, I checked this corresponded to what was being logged by the computer in the console. 

* I changeed the colours of the winner and result text depending on the out come, it should be green for a win, red for a loss and blue for a draw, I tested this worked and made sure there was sufficient contrast so that the words were visible.

* I tested opening the site on differect screen sizes using google DevTools and added media queries to adjust and alter certain aspects so that it looks nice on the different screen sizes.

## Bugs

* When testing my runGame function I wasn't getting the expected result. The button pressed should have been compared to a random selection from the computer returning an alert, saying either "You won!", "You lost!" or "It's a draw!" depending on how they compared. But no alert would appear, I had already tested that my buttons were working correctly and the computerChoice variable was working, but they wern't comparing to each other. The Tutor team helped me to realise that the strings in my computerChoices array were capitalized, whereas the data-types on the buttons were not, so they couldn't compare.

* I was finding that my incrementPlayerScore and incrementComputerScore functions weren't working. I was getting an error message "unreachable code detected" serching on google I discovered on the stackoverflow.com website that it was because I had put them after a return statement so they wouldn't execute: https://stackoverflow.com/questions/12527060/how-can-i-fix-the-error-unreachable-code-detected

* I was finding my checkWinner function wasn't working, a message was meant to be shown when either the user or the computer reached 5 wins, but nothing would show, on the frrecodecamp.com I was helped to realise that the variables I was trying to call weren't being changed. So I set them to 0 as global variables and increased the relevant one each time in the runGame function: https://forum.freecodecamp.org/t/incrementing-score-and-getting-a-message-when-reaching-a-certain-amount/673829 