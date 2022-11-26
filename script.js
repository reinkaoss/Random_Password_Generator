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


// Defining different combinations of characters
var allChars = []
allChars = upperCasedCharacters.concat(numericCharacters, lowerCasedCharacters, specialCharacters);
noSpecialChars = upperCasedCharacters.concat(numericCharacters, lowerCasedCharacters);
noUpperCase = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
noNumbers = upperCasedCharacters.concat(lowerCasedCharacters, specialCharacters);
noLower = specialCharacters.concat(numericCharacters, upperCasedCharacters, specialCharacters);

// Variable arrays with different characters combinations
var shuffled = allChars.sort(() => 0.5 - Math.random());
var shuffledNoNumb = noNumbers.sort(() => 0.5 - Math.random());
var shuffledNoSpecial = noSpecialChars.sort(() => 0.5 - Math.random());
var shuffledNoUpper = noUpperCase.sort(() => 0.5 - Math.random());
var shuffledNoLower = noLower.sort(() => 0.5 - Math.random());


// Single characters only
var shuffledOnlyNumber = numericCharacters.sort(() => 0.5 - Math.random());
var shuffledOnlySpecial = specialCharacters.sort(() => 0.5 - Math.random());
var shuffledOnlyUpper = upperCasedCharacters.sort(() => 0.5 - Math.random());
var shuffledOnlyLower = lowerCasedCharacters.sort(() => 0.5 - Math.random());

// Main function to check user's password options
function testFunc(x) {
var x = prompt("How many characters you want?")
var upperCase = confirm("Do you want upper case characters?")
var lowerCase = confirm("Do you want lower case characters?")
var specialChars = confirm("Do you want special characters?")
var numericChars = confirm("Do you want numeric characters?")
    // Check min and max characters
    if (x > 64 || x < 10)
    document.getElementById('password').innerHTML = ("Please select a minimun of 10 characters and a maximum of 65 characters");
    // // Wrong input
    // else if (typeof(x) != 'string')
    // document.getElementById('password').innerHTML = ("Please enter a numeric value");

    // All characters included
    else if (lowerCase === true && upperCase === true && specialChars === true && numericChars === true)
    document.getElementById('password').innerHTML = (shuffled.slice(0, x).toString().replace(/,/g,''));

    // No numeric characters
    else if (lowerCase === true && upperCase === true && specialChars === true && numericChars === false)
    document.getElementById('password').innerHTML = (shuffledNoNumb.slice(0, x).toString().replace(/,/g,''));

    // Only numeric characters
    else if (lowerCase === false && upperCase === false && specialChars === false && numericChars === true)
    document.getElementById('password').innerHTML = (shuffledOnlyNumber.slice(0, x).toString().replace(/,/g,''));

    // No special characters
    else if (lowerCase === true && upperCase === true && specialChars === false && numericChars === true)
    document.getElementById('password').innerHTML = (shuffledNoSpecial.slice(0, x).toString().replace(/,/g,''));

    // Only special characters
    else if (lowerCase === false && upperCase === false && specialChars === true && numericChars === false)
    document.getElementById('password').innerHTML = (shuffledOnlySpecial.slice(0, x).toString().replace(/,/g,''));

    // No upper case characters
    else if (lowerCase === true && upperCase === false && specialChars === true && numericChars === true)
    document.getElementById('password').innerHTML = (shuffledNoUpper.slice(0, x).toString().replace(/,/g,''));

    // Only upper case characters
    else if (lowerCase === false && upperCase === true && specialChars === false && numericChars === false)
    document.getElementById('password').innerHTML = (shuffledOnlyUpper.slice(0, x).toString().replace(/,/g,''));

    // No lower case characters
    else if (lowerCase === false && upperCase === true && specialChars === true && numericChars === true)
    document.getElementById('password').innerHTML = shuffledNoLower.slice(0, x).toString().replace(/,/g,'');

    // Only lower case characters 
    else if (lowerCase === true && upperCase === false && specialChars === false && numericChars === false)
    document.getElementById('password').innerHTML = (shuffledOnlyLower.slice(0, x).toString().replace(/,/g,''));

    // None selected
    else if (lowerCase === false && upperCase === false && specialChars === false && numericChars === false)
    document.getElementById('password').innerHTML = ("Password not generated");
    // Default output
    else
    document.getElementById('password').innerHTML = (shuffled.slice(0, x).toString().replace(/,/g,''));
    return;
}


