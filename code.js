// code.js - CSC102 Assignment 2.3: The Building Blocks of JavaScript - Functions
// Author: Joseph McCoy
// Powers the "Quarks Casino Slot Draw" game on game.html

// Runs when the form is submitted (called from the form's onsubmit attribute)
function spinReels() {
  // Generate two random "reel" values between 1 and 9
  var reel1 = Math.floor(Math.random() * 9) + 1;
  var reel2 = Math.floor(Math.random() * 9) + 1;

  // Add the two reel values together
  var total = reel1 + reel2;

  // Call the second function, passing the total, to get the result message
  var message = getResultMessage(total);

  // Build the output string showing both reels, the total, and the result
  var output = "Reel 1: " + reel1 + " | Reel 2: " + reel2 + " | Total: " + total + "<br>" + message;

  // Display everything on the page using innerHTML (no alerts)
  document.getElementById("resultArea").innerHTML = output;

  // Prevent the form from actually submitting/reloading the page
  return false;
}

// Takes one parameter (the total) and returns a result message using if/else if/else
function getResultMessage(total) {
  // Declare a variable to hold the message we will return
  var resultText;

  // Jackpot: both reels landed on the highest possible combined value
  if (total === 18) {
    resultText = "JACKPOT! Both reels maxed out - you win big!";
  }
  // Even total counts as a smaller win
  else if (total % 2 === 0) {
    resultText = "Nice! Even total - small win!";
  }
  // Anything else is a loss
  else {
    resultText = "No match this time - spin again!";
  }

  // Send the message back to whatever called this function
  return resultText;
}
