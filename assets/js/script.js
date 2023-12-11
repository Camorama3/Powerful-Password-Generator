function getPasswordLength() {
  var passwordLength, attempt = 0;
  do {
    if (attempt > 0) {
      alert("Please enter a number between 8 and 128!")
    }
    passwordLength = parseInt(prompt("How long would you like the password to be?", "Between 8 and 128"));
    attempt++;
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
  return passwordLength;
}

function getUppercasePreference() {
  var shouldContainUppercaseLetters, attempt = 0;
  do {
    if (attempt > 0) {
      alert("Please enter Y or N!")
    }
    shouldContainUppercaseLetters = prompt("Would you like upper case letters included in the password?", "Y for yes, N for no");
    attempt++;
  } while ("Y" !== shouldContainUppercaseLetters && "N" !== shouldContainUppercaseLetters);
  return "Y" === shouldContainUppercaseLetters;
}

function getLowercasePreference() {
  var shouldContainLowercaseLetters, attempt = 0;
  do {
    if (attempt > 0) {
      alert("Please enter Y or N!")
    }
    shouldContainLowercaseLetters = prompt("Would you like lower case letters included in the password?", "Y for yes, N for no");
    attempt++;
  } while ("Y" !== shouldContainLowercaseLetters && "N" !== shouldContainLowercaseLetters);
  return "Y" === shouldContainLowercaseLetters;
}

function getNumberPreference() {
  var shouldContainNumbers, attempt = 0;
  do {
    if (attempt > 0) {
      alert("Please enter Y or N!")
    }
    shouldContainNumbers = prompt("Would you like numbers included in the password?", "Y for yes, N for no");
    attempt++;
  } while ("Y" !== shouldContainNumbers && "N" !== shouldContainNumbers);
  return "Y" === shouldContainNumbers;
}

function getSymbolPreference() {
  var shouldContainSymbols, attempt = 0;
  do {
    if (attempt > 0) {
      alert("Please enter Y or N!")
    }
    shouldContainSymbols = prompt("Would you special characters included in the password?", "Y for yes, N for no");
    attempt++;
  } while ("Y" !== shouldContainSymbols && "N" !== shouldContainSymbols);
  return "Y" === shouldContainSymbols;
}

function generatePassword(passwordLength, useUpperCase, useLowerCase, useNumbers, useSymbols) {
  // Define constants for letters, numbers, and symbols
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!@#$%^&*()';

  // Combine what is preferred by user
  let availableCharacters = '';

  if (useUpperCase) {
    availableCharacters += upperCaseLetters;
  }
  if (useLowerCase) {
    availableCharacters += lowerCaseLetters
  }
  if (useNumbers) {
    availableCharacters += numbers
  }
  if (useSymbols) {
    availableCharacters += symbols
  }

  // Create variable for empty password string
  var password = '';
  // Randomize, pull length var and put into this var
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password textbox
function writePassword() {
  var passwordLengthInput = getPasswordLength();
  var uppercasePreference = getUppercasePreference();
  var lowercasePreference = getLowercasePreference();
  var numberPreference = getNumberPreference();
  var symbolPreference = getSymbolPreference();
  
  var password = generatePassword(passwordLengthInput, uppercasePreference, lowercasePreference, numberPreference, symbolPreference);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
