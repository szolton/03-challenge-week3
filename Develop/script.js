document.getElementById('generate').addEventListener('click', function() {
  var passwordLength = prompt('Enter the length of the password (8-128 characters)');
  if (passwordLength === null) {
    return;
  }
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a valid password length (8-128 characters)');
    return;
  }

  var includeLowercase = confirm('Include lowercase letters?');
  var includeUppercase = confirm('Include uppercase letters?');
  var includeNumbers = confirm('Include numbers?');
  var includeSpecialChars = confirm('Include special characters?');

  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
    alert('Please select at least one character type');
    return;
  }

  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  var availableChars = '';
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeNumbers) {
    availableChars += numberChars;
  }
  if (includeSpecialChars) {
    availableChars += specialChars;
  }

  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  document.getElementById('password').value = password;
});
