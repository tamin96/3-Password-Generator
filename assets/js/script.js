var specialCharacters = [" ", "!", '"', "#", "£", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowercaseCharacters = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

var uppercaseCharacters = ["A", "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];

function passwordCriteria() {
  var passwordLength = parseInt(
    prompt("Please enter the number of characters you would like your password to contain"),
    10
  );
  
  if (Number.isNaN(passwordLength)) 
  {
    alert("Please enter the password length with numeric characters");
    return null;
  }

  if (passwordLength < 8) 
  {
    alert("Password length must be at least 8 characters");
    return null;
  }
  
  if (passwordLength > 128) 
  {
    alert("Password length can be no more than 128 characters");
    return null;
  }

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

  if (
    containsSpecialCharacters === false &&
    containsNumericCharacters === false &&
    containsLowerCaseCharacters === false &&
    containsUpperCaseCharacters === false
  ) {
    alert("At least one character type must be included");
    return null;
  }

  var options = {
    passwordLength: passwordLength,
    containsSpecialCharacters: containsSpecialCharacters,
    containsNumericCharacters: containsNumericCharacters,
    containsLowerCaseCharacters: containsLowerCaseCharacters,
    containsUpperCaseCharacters: containsUpperCaseCharacters,
  };

  return options;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = passwordCriteria();
  var newPassword = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.containsSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.containsNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.containsLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandom(lowercaseCharacters));
  }

  if (options.containsUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandom(uppercaseCharacters));
  }

  for (var i = 0; i < options.passwordLength; i++) {
    var possibleCharacters = getRandom(possibleCharacters);

    newPassword.push(possibleCharacters);

  }

  for (var i = 0; i < guaranteedCharacters.passwordLength; i++) {
    newPassword[i] = guaranteedCharacters[i];
  }

  return newPassword.join('');

}

generateBtn.addEventListener("click", writePassword);
