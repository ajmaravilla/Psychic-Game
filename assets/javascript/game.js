//Given the user chooses to play the psyckic game
//And Given the page is rendered
    var wins = 0;
    var losses = 0;
    var guessesLeft = 13;
    var guessesSoFar = []; 
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //When the user selects a letter
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
        guessesSoFar.push(userGuess); 
        if (userGuess == computerGuess) { //And when the user's selection matches the computer selection
            wins++;
            alert("Congratulations! You guessed what the computer was thinking! You Win!"); //Then the system will display the following alert
            guessesLeft = 13; //Then the system will reset the number of guesses remianing to 13
            guessesSoFar.length = 0; //Then the system will reset the number the user has taken to 0
        }
        else if (guessesLeft == 0){ //When the user fails to select the same letter as the computer 
            losses++;
            alert("Sorry! You failed the guess the correct letter! You lost this round. Refresh the page if you wish to play again."); //Then the system will display the folowing message
            guessesLeft = 13; //Then the system will reset the number of guesses remianing to 13
            guessesSoFar.length = 0; //Then the system will reset the number the user has taken to 0
        }
        else if (userGuess !== computerGuess){
            guessesLeft--; //decreases the number of guesses available
        }  
        
        var html = 
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSoFar +
        "</p>"
        ;
        
        document.querySelector('#game').innerHTML = html;
    }