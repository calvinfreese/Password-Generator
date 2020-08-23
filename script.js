// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = 'abcdefghijklmnopqrstuvwxyz';
var capped = letters.toUpperCase();
var numbers = '1234567890';
var specials = '!@#$%^&*()_+[]\{}|;:,./<>?-=:';
var password = [];
var len;


//Write password to the #password input
function writePassword() {
  isLengthGood(); //Checks if submitted password length qualifies for password staging. 

  var passwordText = document.querySelector("#password");
  var availableCharacters = password.flat(1); // availableCharacters flattens all arrays in password to the base level
  var myPassword = '';
  
  if (password.length == 0) {
    alert('The password length or criteria provided was insufficient. Password length specified must be between 8 and 128 characters, and at least one criteria option must be selected (numbers, letters, uppercase letters, or special characters). Please try generating a password again.');
    passwordText.value = password; // clears passwordText innerHTML 
    return;
  } 
  
  if (len >= 8 && len <= 128) {
    for (var i = 0; i < len; i++) {
      var x = getRandom(availableCharacters.length);
      myPassword = myPassword + availableCharacters[x];
    }
    passwordText.value = myPassword;
  }
}

//Function to Check password length - if length is 8 through 128, stagePass() is called
function isLengthGood() { 
  var lengthCount = prompt('How many characters do you want in your password? (MUST BE BETWEEN 8 and 128 characters.)');
  len = Number(lengthCount); //changes returned value from a string to a number
  
  if (len <= 7 || len >= 129) {
    console.log('Length specified is insufficient. Password can\'t be staged.');
    return len;
  } else {
    stagePass();    
  }
}

// Checks confirmations, converts associated variable to an array, and pushes the new arrays to password variable in array format
var stagePass = function stagePassword() {
  var yesNumbers = confirm('Click "Ok" if you want numbers.');
  var yesLowCase = confirm('Click "Ok" if you want lowercase letters.');
  var yesCaps = confirm('Click "Ok" if you want capital letters.');
  var yesSpec = confirm('Click "Ok" if you want special characters.');

  if (yesNumbers) {
    var numArr = Array.from(numbers);
    password.push(numArr);
    console.log('You want numbers in your password.');
  }

  if (yesLowCase) {
    var lowLetterArr = Array.from(letters);
    password.push(lowLetterArr);
    console.log('You want lower case letters characters in your password.');
  } 

  if (yesCaps) {
    var capsArr = Array.from(capped);
    password.push(capsArr);
    console.log('You want capital letters in your password.');
  }

  if (yesSpec) {
    var specArr = Array.from(specials);
    password.push(specArr);
    console.log('You want special characters in your password.');
  }
};

// grabs random integer from array and converts it to a whole number
var getRandom = function getRandomCharacters(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

//clears console and password array contents from previous generations.
function resetPasswordArray() { 
  console.clear();
  password = [];
  console.log('Password array has been cleared.');
}


// Add event listener to generate button
generateBtn.addEventListener("click", resetPasswordArray); // calls the function that will clear the password array stored values.
generateBtn.addEventListener("click", writePassword);