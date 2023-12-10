function generatePassword() {
    //Create arrays for letters numbers and symbols
    var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var numbers = '0123456789'.split('');
    var symbols = 
    // create variable for emply password string
    
    //prompt user for password length and store variable
    //prompt if they want uppercase letters and store
    //prompt if they want lowercase letters and store
    //prompt if they want numbers and store
    //prompt if they want symbols and store
    
    //add together arrays they wanted into an array by assessing boolean responses
  
    //randomize array somehow, pull length var and put into this var
  }
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  