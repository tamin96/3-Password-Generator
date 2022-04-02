// Array for special characters
var specialCharacters = [" ", "!", '"', "#", "£", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Array for numeric characters
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array for lowercase characters
var lowercaseCharacters = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// Array for uppercase characters
var uppercaseCharacters = ["A", "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];

// Function for password criteria
function passwordCriteria() {
  var passwordLength = parseInt(
    // Prompt to ask for user input
    prompt("Please enter the number of characters you would like your password to contain"),
    10
  );
  
  // Conditional statement to make sure an alert appears if the user does not input numeric characters
  if (Number.isNaN(passwordLength)) 
  {
    alert("Please enter the password length with numeric characters");
    return null;
  }

  // Conditional statement to make sure an alert appears if the user inputs a value less than 8
  if (passwordLength < 8) 
  {
    alert("Password length must be at least 8 characters");
    return null;
  }
  
  // Conditional statement to make sure an alert appears if the user inputs a value more than 128
  if (passwordLength > 128) 
  {
    alert("Password length can be no more than 128 characters");
    return null;
  }

  // Confirm boxes for each type of character

  var containsSpecialCharacters = confirm(
    "Click OK to confirm the password should contain special character(s)"
  );

  var containsNumericCharacters = confirm(
    "Click OK to confirm the password should contain numeric character(s)"
  );

  var containsLowerCaseCharacters = confirm(
    "Click OK to confirm the password should contain lower case character(s)"
  );

  var containsUpperCaseCharacters = confirm(
    "Click OK to confirm the password should contain upper case character(s)"
  );

  //Conditional statement with alert to make sure user inputs at least one type of character

  if (
    containsSpecialCharacters === false &&
    containsNumericCharacters === false &&
    containsLowerCaseCharacters === false &&
    containsUpperCaseCharacters === false
  ) {
    alert("At least one character type must be included");
    return null;
  }

  // Object for user input

  var options = {
    passwordLength: length,
    containsSpecialCharacters: specialCharacters,
    containsNumericCharacters: numericCharacters,
    containsLowerCaseCharacters: lowercaseCharacters,
    containsUpperCaseCharacters: uppercaseCharacters,
  };

  return options;
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
