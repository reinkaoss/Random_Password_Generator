// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var allChars = []
allChars = upperCasedCharacters.concat(numericCharacters, lowerCasedCharacters, specialCharacters);
noSpecialChars = upperCasedCharacters.concat(numericCharacters, lowerCasedCharacters);
noUpperCase = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
noNumbers = upperCasedCharacters.concat(lowerCasedCharacters, specialCharacters);


var shuffled = allChars.sort(() => 0.5 - Math.random());
var shuffledNoNumb = noNumbers.sort(() => 0.5 - Math.random());
var shuffledNoSpecial = noSpecialChars.sort(() => 0.5 - Math.random());
var shuffledNoUpper = noUpperCase.sort(() => 0.5 - Math.random());


// var startGenerator = confirm("Please select your password options");

var x = document.getElementById("generate").addEventListener('click', prompt("How many characters you want?"))
var upperCase = confirm("Do you want upper case?")
var specialChars = confirm("Do you want special chars?")
var numericChars = confirm("Do you want numeric chars?")
x = parseInt(x);


function testFunc(x) {
    if (upperCase === true && specialChars === true && numericChars === true && x < 65)
    document.getElementById('password').innerHTML = (shuffled.slice(0, x));
    else if (upperCase === true && specialChars === true && numericChars === false  && x < 65)
    document.getElementById('password').innerHTML = (shuffledNoNumb.slice(0, x));
    else if (upperCase === true && specialChars === false && nuaaaaamericChars === true  && x < 65)
    document.getElementById('password').innerHTML = (shuffledNoSpecial.slice(0, x));
    else if (upperCase === false && specialChars === true && numericChars === true  && x < 65)
    document.getElementById('password').innerHTML = (shuffledNoUpper.slice(0, x));
    else if (upperCase === false && specialChars === false && numericChars === false  && x < 65)
    document.getElementById('password').innerHTML = ("Password not generated");
    else if (x.length <= 65)
    console.log("Test")
    // document.getElementById('password').innerHTML = ("Max characters is 65");
    else
    document.getElementById('password').innerHTML = (shuffled.slice(0, x));
    return;
}

testFunc(x);
console.log(typeof(x))

// // // Function to generate password with user input
// function generatePassword() {
//   if(x <= 65)
//   document.getElementById('password').innerHTML = (testFunc(x));
//   else 
//   document.getElementById('password').innerHTML = ("Password not generated");
//   return;
// }

// generatePassword()

// // // Get references to the #generate element
document.getElementById("generate").addEventListener('click', testFunc(x));

// // // // Add event listener to generate button

// // // // // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('password');
// }