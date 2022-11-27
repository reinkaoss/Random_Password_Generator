// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Start generator and prompt password options
function startGenerator() {
var passwordCharacters = []
var passwordOptions = parseInt(prompt("How many characters do you want?"))
alert("You chose a " + passwordOptions + " characters long password")
// Define random password as empty array
var randomPassword = []
var special = confirm("Do you want special characters?")
var numeric = confirm("Do you want numberic characters?")
var upper = confirm("Do you want upper case characters?")
var lower = confirm("Do you want lower case characters?")
// Concat the arrays according with user's input
if (special) {
  passwordCharacters = passwordCharacters.concat(specialCharacters)
}
if(lower) {
  passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
}
if(upper) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
  }
if(numeric) {
    passwordCharacters = passwordCharacters.concat(numericCharacters)
  }
// Generate random value
  for (var i = 0; i < passwordOptions; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]; {
    if(passwordOptions <= 64 && passwordOptions >= 9 && passwordOptions != null)
    document.getElementById('password').innerHTML = randomPassword;
    else document.getElementById('password').innerHTML = "Your password must have between 9 and 64 characters"
    }
}
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', startGenerator);