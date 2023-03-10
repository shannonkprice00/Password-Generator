// Assignment code here

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "`", "^", "_", "{", "}", "|", "~" ];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var generatePassword = function() {
  var passwordArray = []
  var inputLength = window.prompt("Choose a length for your password");

  if(!inputLength) {
    alert("You must put in a value!");
    return null;
  }
  if(inputLength < 8) {
    alert("Password must be at least 8 characters");
    return null;
  }
  if(inputLength > 128) {
    alert("Password must be less than 128 characters");
    return null;
  }
   if(Number.isNaN(inputLength)) {
    alert("Must put in a number")
    return null;
   }

  var inputLC = window.confirm("Would you like to include lowercase letters in your password?");

  if(inputLC) {
    alert("Confirmed: include lowercase letters");
  } else {
    alert("Password will NOT include lowercase letters");
  }

  if(inputLC) {
    passwordArray.push(lowerCase);
  }
  
  var inputUC = window.confirm("Would you like to include Uppercase letters in your password?");

  if(inputUC) {
    alert("Confirmed: include uppercase letters");
  } else {
    alert("Password will NOT include uppercase letters");
  }

  if(inputUC) {
    passwordArray.push(upperCase);
  }

  var inputNumbers = window.confirm("Would you like to include numbers in your password?");

  if(inputNumbers) {
    alert("Confirmed: include numbers");
  } else {
    alert("Password will NOT include numbers");
  }

  if(inputNumbers) {
    passwordArray.push(numbers);
  }

  var inputSpecialCharacters = window.confirm("Would you like to include special characters in your password?");

  if(inputSpecialCharacters) {
    alert("Confirmed: include special characters");
  } else {
    alert("Password will NOT include special characters");
  }

  if(inputSpecialCharacters) {
    passwordArray.push(specialCharacters);
  }

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

