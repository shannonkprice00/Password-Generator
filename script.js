// Assignment code here

// Variables to store possible password characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "`", "^", "_", "{", "}", "|", "~" ];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Function to prompt user for criteria and create password
var generatePassword = function() {
  var passwordArray = []
  var answer = ""
  var inputLength = window.prompt("Choose a length for your password");
// Prompt and validation for password length
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
  // Instructor assisted with number validation during office hours
   if(Number.isNaN(inputLength)) {
    alert("Must put in a number")
    return null;
   }
// Prompt for including lowercase letters
  var inputLC = window.confirm("Would you like to include lowercase letters in your password?");

  if(inputLC) {
    alert("Confirmed: include lowercase letters");
  } else {
    alert("Password will NOT include lowercase letters");
  }
// Tutor assisted with concat structure
  if(inputLC) {
    passwordArray = passwordArray.concat(lowerCase);
  }
  // Prompt for including uppercase letters
  var inputUC = window.confirm("Would you like to include uppercase letters in your password?");

  if(inputUC) {
    alert("Confirmed: include uppercase letters");
  } else {
    alert("Password will NOT include uppercase letters");
  }

  if(inputUC) {
    passwordArray = passwordArray.concat(upperCase);
  }
// Prompt for including numbers
  var inputNumbers = window.confirm("Would you like to include numbers in your password?");

  if(inputNumbers) {
    alert("Confirmed: include numbers");
  } else {
    alert("Password will NOT include numbers");
  }

  if(inputNumbers) {
    passwordArray = passwordArray.concat(numbers);
  }
// Prompt for including special characters
  var inputSpecialCharacters = window.confirm("Would you like to include special characters in your password?");

  if(inputSpecialCharacters) {
    alert("Confirmed: include special characters");
    // Assistance from tutor to condense validation of choosing at least 1 character type using Array.length === 0
  } else if(passwordArray.length === 0) {
    alert("You must select at least one character type")
  } else  {
    alert("Password will NOT include special characters");
  }

  if(inputSpecialCharacters) {
    passwordArray = passwordArray.concat(specialCharacters);
  }

// Assistance from tutor to finetune for loop to generate password
  for (var index = 0; index < inputLength; index++) {
    var random = Math.floor(Math.random() * passwordArray.length);
    answer += passwordArray[random];
  }
// Returns the generated password stored in answer variable
  return answer;
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
generateBtn.addEventListener("click", writePassword);

