// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// Function to generate a random password
function generatePassword() {
  // Define character sets for different types of characters
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  // Prompt user for password length
  let length = parseInt(prompt('Enter the length of the password (between 8 and 128 characters):'));
  // Validate the length
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Please enter a valid number between 8 and 128.');
    return;
  }

  // Ask user for character types to include
  let useLowerCase = confirm('Include lowercase letters?');
  let useUpperCase = confirm('Include uppercase letters?');
  let useNumbers = confirm('Include numbers?');
  let useSymbols = confirm('Include symbols?');

  // Validate that at least one character type is selected
  if (!useLowerCase && !useUpperCase && !useNumbers && !useSymbols) {
    alert('Please select at least one character type.');
    return;
  }

  // Create a character set based on selected types
  let charSet = '';
  if (useLowerCase) charSet += lowerCase;
  if (useUpperCase) charSet += upperCase;
  if (useNumbers) charSet += numbers;
  if (useSymbols) charSet += symbols;

  // Generate the password
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  // Display the generated password
  alert('Your password is: ' + password);
}

// Attach the generatePassword function to a button click event
document.getElementById('generate').addEventListener('click', generatePassword);
