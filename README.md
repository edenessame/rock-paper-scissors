# Rock, Paper, Scissors

Rock, Paper, Scissors is a hand game played between two people where they each choose an "item" represented by a hand shape:
a closed fist is a rock, an open hand is paper and just the index and middle finger extended in a V shape are scissors.

In this game the player plays against the computer, the player makes their selection by clicking on one of the three options and the computer makes a random responce also from one of the three options and the result is displayed on the screen.

The winner is determined by the rules that rock beats scissors (by breaking them), scissors beats paper (by cutting it) and paper beats rock (by covering it).

The overall winner of this game is the first to win five rounds.

![The websites appearance on different screen sizes](./readme-assets/RPS_different_screens.png)

## User experience

The users are the players who are interested in playing the game. As it is easy to play and understand the game is suitable for users of all ages.

### User stories

As the sole developer of this website my goal is to create a game that is easy to play that is suitable for useres of all ages.
I came up with the following needs that the user would want satisfied by the website.
  * As a user, I want to understand the purpose of the website quickly and easily.
  * As a user, I want the site to have a nice, easy to look at appearance, with colours that work well together.
  * As a user, I want the site to work smoothly.
  * As a user, I want to be able to easily navigate the site.
  * As a user, I want to be able to interact with the website.
  * As a user, I want clear and easy to understand instructions so I know how to play the game.
  * As a user, I want the game to work the same as playing a person in real life.
  * As a user I want the computers choice to be random, so it doesn't always lose or always win.
  * As a user I want the game to have an end point, with a winner, so it doesn't just carry on.

### Strategy

The goal is to create a well functioning game that responds smoothly and is easy for the user to play and understand.

### Scope

As the developer I wanted to create an interactive and responsive game of chance, with varying results to keep the user engaged and a positive visual experience.

### Structure

I used a simple layout that isn't overcrowded and is easy to understand:
  * The heading is clear and easy to read at the top of the page.
  * Followed by the main game area, which is large and a different colour so it stands out. 
  * Then the scores are underneath and easy to see.
  * This is followed by the "Replay" button which is large and also a different colour, so it stands out and is easy to see.
  * Finally the rules and instructions are at the bottom, so they are not intrusive to anyone who knows how to play, but are easy to find for anyone who doesn't.

### Surface

I used a mostly monochramatic colour scheme for the site with different shades of blue, that I think complement each other, with the background the lightest, so it's not distracting with the buttons the darkest, so they draw the focus. For the hand icons I chose yellow as it is an unspecific hand colour. 

When the icon buttons are hovered over, the colour changes to the main backround colour, so its very clear what the user is going to click on and it stands out against the game area background that the buttons are on.

When the user wins a round, or the whole game, I used green text as this usually connotes winning and a positive result.

When the user loses a round, or the whole game, I used red text as this usually connotes losing and a negative result.

For a draw I used blue as it was my main colour scheme it seemed neutral.

I made sure they were all easily readable on top of the background.

The majority of the text is black, because its clear and easy to read.

When the user mouses over the "Replay" button it turns to a nice shade of green, to connote a positive out come to pressing the button. Green as if to imply go and play the game again, rather than something like red to imply stop and ending game.
  
## Technologies

* HTML - to create the basic structure of the site.
* CSS - to give style to the site and make it easy for the user to view.
* JavaScript - to create a dynamic and iteractive site for the user to interact with. 

## Features

### Heading

![The website heading](./readme-assets/Heading_RPS.png)

The heading is clear, easy to read and tells the user the name of the game.

### Main game area

The main game area is simple and easy to understand, providing the three play buttons for the user to press and messages inviting them to play.

![The main game play area](./readme-assets/RPS_Game_area.png)

When the user hovers their mouse over the buttons they change colour and the cursor turns into a pointer so the user can see which icon they are going to select. When clicking on an item, a function is called `let randomChoice = Math.floor(Math.random() * 3);` to randomly select a number from 0, 1 or 2, this number corresponds to an array: `let computerChoices = ["rock", "paper", "scissors"];` and this then creates the computers random response to the user by selecting one of the items in the array: `computerChoice = computerChoices[randomChoice];` The users choice and the computers choice are then compared to each other to determine the winner. 

![The buttons changing colour when hovered over](./readme-assets/RPS_hover.png)

After each round the "Let's Play!" text updates saying what the user played, what the computer played and who won. If the user won, the text is green, if the computer won, the text is red and if it's a draw the text is blue.

![Result text if the user won](./readme-assets/RPS_you_won.png)
![Result text if the computer won](./readme-assets/RPS_you_lost.png)
![Result text if it's a draw](./readme-assets/RPS_draw.png)

If the user wins five times the "Who will win?" text will update with a message congratulating them in green and informing them they can play again by pressing the replay button.

![winner text if the user won](./readme-assets/RPS_you_won_overall.png)

If the computer wins five times the "Who will win?" text will update with a message telling them they lost in red and informing them they can play again by pressing the replay button.

![Winner text if the computer won](./readme-assets/RPS_CPU_won.png)

### Score area

After each round the user and computer scores will increment in the score area and update the result text with who won the round, until one of them reaches five, this will then update the overall winner text in the game area saying who was first to reach five and dissabling the buttons, until the replay button is pressed.

![score area](./readme-assets/Score_area.png)

### Replay button

Pressing the replay button resets all the variables so the user can play again. When its hovered over, it's green to be inviting and not a warning colour.

![Replay button](./readme-assets/RPS_replay.png) 
![Replay button hovered over](./readme-assets/RPS_replay_green.png)

### How to play and the rules

The how to play section informs the user how to play the game and what is required to win. The rules section tells the user the predefined rules so they know which hands beat each other.

![instructions on how to play and the rules](./readme-assets/RPS_rules.png)

## Testing

### Manual testing the site features

* After setting up the HTML, CSS and JavaScript files I checked they were linked by adding a body colour placeholder to the css file and a console.log message to the javascript file. Then opening the preview browser by typing: python3 -m http.server into the terminal. In the preview browser I could see the page was the correct colour and by inspecting the page using DevTools I could see that the message had appeared in the console.

* After adding a click event listener to the buttons I tested that it was responsive, clicking the button should give an alert saying: "You played Rock/Paper/Scissors" depending on which corresponding button was clicked and this worked correctly.

* I tested my computerChoice variable was making a random selection, by using: console.log(computerChoice). When a button was pressed the console would randomly log either "Rock", "Paper" or "Scissors" regardless of what button was pressed.

* I tested my runGame function was working correctly by logging the computerChoice variable to the console and clicking the buttons. If "scissors" were pressed and the console logged "rock" an alert would appear saying "You lost!", if the console logged "paper" the alert would say: "You won!" and if it was scissors the alert would say: "It's a draw!". This worked correctly for all the buttons.

* I tested my incrementPlayerScore and incrementComputerScore functions, when the buttons were clicked the correct alert and console logs appeared and either the player score or computer score increased correctly in-line with the result and if it was a draw neither changed.

* I tested my checkWinner function, if the user score reached 5 the "winner" paragraph reads :"Congratulations! You won 5 times! You win!", if the computer score reaches 5 first the paragraph reads: "Oh no! The computer won 5 times! You lost!"

* I tested that the correct message appeared in the result paragraph, so that it read what the user and computer had played and what the result from that was. Whatever button was clicked the correct corresponding word would appear, followed by the correct thing the computer played (I checked this corresponded to what was being logged to the console by the computer). This was then followed by the correct result of the two items played, either "You won!", "You lost!" or "it's a draw!" 

* I changed the colours of the winner and result text depending on the out come, it should be green for a win, red for a loss and blue for a draw, I tested this worked and made sure there was sufficient contrast so that the words were visible.

* When the user hovers over the buttons they should change colour and the mouse turn to a pointer, so the user can see where they will click, I tested this worked correctly in the browser and it did.

* I tested the disablebtn and enablebtn functions, when the score of either the player or computer reaches 5, the icon buttons are disabled and no longer clickable, then all the variables and text colours are reset when the "replay" button is pressed. I tested this worked correctly in the browser and it did.

* I tested the replayGame function and button worked, when the button was pressed it reset all the values and enabled the buttons again.

* When everything was complete I tested that everything still worked correctly together:
  * The buttons changed colour when moused over
  * The "result" message gave the value of the correct button that was clicked and the correct selection that was logged to the console by the computer and was the correct colour depending on the result.
  * The scores incremented correctly corresponding to the result.
  * When either the user or computers scores reached five the "winner" text updated with the correct winner in the correct colour and the buttons were disabled.
  * When pressing the "replay" button, all the variables and text colours are reset to their original values and the game can be played again.

### Testing the site responsivity on different screen sizes and browsers

* I tested the site on Google Chrome, Firefox and Microsoft Edge using both an Asus and Hewlett Packard laptop and Google Chrome and Microsoft Edge on a Google Pixle phone and it works in different browsers. Here are the screenshots of how it looks on the Asus laptop with a screen width resolution of 1536 pixles:

   * [The website opened in Google Chrome](./readme-assets/screen_sizes/RPS_on_chrome.png)
   * [The website opened in Microsoft Edge](./readme-assets/screen_sizes/RPS_on_edgepng.png)
   * [The website opened in Firefox](./readme-assets/screen_sizes/RPS_firefox.png)

* I tested the site is responsive on differect screen sizes using google DevTools:

   * [The website opened in Google Chrome on a Galaxy Fold, screen width 280 pixles](./readme-assets/screen_sizes/RPS_Galaxy_fold.png)
   * [The website opened in Google Chrome on a Google Pixle 7, screen width 412 pixles](./readme-assets/screen_sizes/RPS_Google_pixle_7.png)
   * [The website opened in Google Chrome on an iPhone Pro Max 14, screen width 430 pixles](./readme-assets/screen_sizes/RPS_iphone_14_pro_max.png)
   * [The website opened in Google Chrome on an iPad mini, screen width 768 pixles](./readme-assets/screen_sizes/RPS_iPad_mini.png)
   * [The website opened in Google Chrome on a device with a screen width of 1024 pixles](./readme-assets/screen_sizes/RPS_screen_width_1024.png)
   * [The website opened in Google Chrome on a device with a screen width of 1440 pixles](./readme-assets/screen_sizes/RPS_screen_width_1440.png)

* I confirmed all the content was readable and easy to understand.

### Bugs

* When testing my runGame function I wasn't getting the expected result. The button pressed should have been compared to a random selection from the computer returning an alert, saying either "You won!", "You lost!" or "It's a draw!" depending on how they compared. But no alert would appear, I had already tested that my buttons were working correctly and the computerChoice variable was working, but they wern't comparing to each other. The Tutor team helped me to realise that the strings in my computerChoices array were capitalized, whereas the data-types on the buttons were not, so they couldn't compare.

* I was finding that my incrementPlayerScore and incrementComputerScore functions weren't working. I was getting an error message "unreachable code detected" serching on google I discovered on the stackoverflow.com website that it was because I had put them after a return statement so they wouldn't execute: https://stackoverflow.com/questions/12527060/how-can-i-fix-the-error-unreachable-code-detected

* I was finding my checkWinner function wasn't working, a message was meant to be shown when either the user or the computer reached 5 wins, but nothing would show, on the frrecodecamp.com I was helped to realise that the variables I was trying to call weren't being changed. So I set them to 0 as global variables and increased the relevant one each time in the runGame function: https://forum.freecodecamp.org/t/incrementing-score-and-getting-a-message-when-reaching-a-certain-amount/673829 

### Unfixed bugs

* No unfixed bugs

### Validator testing

* **HTML** 
  * No errors were returned when passing through the official [W3C Validator](./readme-assets/html_validator_RPS.png)

* **CSS**
  * No errors were found when passing through the official [(Jigsaw) Validator](./readme-assets/CSS_validator_RPS.png)

* **JavaScript**
  * When passing through the JavaScript validator JShint, I got a warning message: Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. I had followed the method used in the love maths tutorial for adding event listeners to buttons, which also gave this warning when passed through [JShint](./readme-assets/JShint-lovemaths.png). I asked one of the tutor team about this and they assured me that it's nothing that will affect my project, so I could leave it as it is. [No warnings were flagged otherwise](./readme-assets/JShint_RPS.png).

  * The following metrics were returned:
    * There are 9 functions in this file.
    * Function with the largest signature take 0 arguments, while the median is 0.
    * Largest function has 34 statements in it, while the median is 3.
    * The most complex function has a cyclomatic complexity value of 8 while the median is 1.
  
* **Accessibility**   
  * I confirmed that the aria attributes match their roles, have valid values and are not missspelled and that the colours and fonts used are easy to read and accessible by running it through [lighthouse devtools](./readme-assets/Lighthouse_RPS.png)

## Deployment

* The site was deployed to Git Hub pages using the following steps:
  * In the Github repository, click the settings tab.
  * Under "General" in the subsection "Code and automation" click "Pages".
  * In the "Build and deployment" section, under "Source" select "Deploy from a branch" from the dropdown menu. 
  * Under "Branch" select "Main" from the dropdown menu and save.
  * The link to the website can be found at the top of the page.
  * The deployed website will update automatically with new commits to the master branch. 

* The live link can be found here: https://edenessame.github.io/rock-paper-scissors/  

## Credits

### Content

* Help understanding and implementing HTML, CSS and JavaScript came from the Code Institute course.

* Help in how to structure and layout a README file came from the Code Institutes [sample README](https://github.com/Code-Institute-Solutions/readme-template?tab=readme-ov-file)

* The favicon used came from [favicon.io](https://favicon.io/emoji-favicons/oncoming-fist).

* The icons used for the buttons and footer came from [fontawesome.com](https://fontawesome.com/).

* I used the code institute [Love maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/) project to help guide me.

* Further help and understanding was sought from [W3schools](https://www.w3schools.com/html/default.asp) the [freecodecamp](https://forum.freecodecamp.org/) and [stackoverflow](https://stackoverflow.com/).

* The responsive appearance on different screen sizes in the readme was obtained from [Am I responsive](https://ui.dev/amiresponsive).

* The Code Institute tutor support team for helping guide me.

* My mentor, Medale Oluwafemi, for his invaluable knowledge and guidance.

