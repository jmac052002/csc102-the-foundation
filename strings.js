// strings.js - CSC102 Assignment 3.2: User Input Validation
// Author: Joseph McCoy
// Powers the secret message form on strings.html

// Runs when the form is submitted (called from the form's onsubmit attribute)
function validateInputs() {
// Get the value the user typed into the first name text box
var firstName = document.getElementById("firstName").value;

// Get the value the user typed into the last name text box
var lastName = document.getElementById("lastName").value;

// Get the value the user typed into the zip code text box
var zipCode = document.getElementById("zipCode").value;

// Combine the first name, a single space, and the last name into one variable
var fullName = firstName + " " + lastName;

// Check if the combined name is longer than 20 characters
if (fullName.length > 20) {
// Show a warning using innerHTML so the user can fix their name
document.getElementById("resultArea").innerHTML = "Warning: That name is more than 20 characters. Please shorten it and try again.";

// Stop the program here and prevent the form from submitting/reloading
return false;
}

// Build a pattern that only matches exactly 5 digits (0-9)
var zipPattern = /^[0-9]{5}$/;

// Check the zip code against the pattern
if (!zipPattern.test(zipCode)) {
// Show a warning using innerHTML so the user can fix their zip code
document.getElementById("resultArea").innerHTML = "Warning: Zip code must contain exactly 5 digits. Please correct it and try again.";

// Stop the program here and prevent the form from submitting/reloading
return false;
}

// Both the name and zip code are valid, so build the secret message
var secretMessage = "Welcome, " + fullName + "! Your zip code " + zipCode + " has been verified.<br>Secret message: The treasure map is hidden behind the old oak tree at Quarks Casino.";

// Display the secret message on the page using innerHTML (no alerts)
document.getElementById("resultArea").innerHTML = secretMessage;

// Prevent the form from actually submitting/reloading the page
return false;
}
