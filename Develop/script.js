// DOM elements
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const clipboardEl = document.getElementById('clipboard');
const errorEl = document.getElementById('error');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// generates the event listener
clipboardEl.addEventListener('click', function() {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked ? 1 : 0;
  const hasUpper = uppercaseEl.checked ? 1 : 0;
  const hasNumber = numbersEl.checked ? 1 : 0;
  const hasSymbol = symbolsEl.checked ? 1 : 0;

  // sets the password length criteria
  if (length < 8 || length > 128) {
    errorEl.textContent = 'Error!!';
    resultEl.value = '';
    return; // Stops the execution if length is not within the valid range
  } else {
    errorEl.textContent = '';
  }

  resultEl.value = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
    );
});

// generate password function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// generator functions for the
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// copy password to clipboard
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.value;

  if(!password) {
    return;
  } 

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard!');
});
