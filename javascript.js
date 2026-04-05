const buttons = document.querySelectorAll('button');

function addition (num1, num2) {
  return num1 + num2;
};

function subtraction (num1, num2) {
  return num1 - num2;
};

function multiplication (num1, num2) {
  return num1 * num2;
};

function division (num1, num2) {
  return num1 / num2;
};

let num1 = '';
let operator = '';
let num2 = '';
let resetScreen = false;

function operate (operator, num1, num2) {
  const a = Number(num1);
  const b = Number(num2);
  if (operator === '+') {
    return addition(a, b);
  } else if (operator === '-') {
    return subtraction(a, b);
  } else if (operator === 'x') {
    return multiplication(a, b);
  } else if (operator === '/') {
    return b === 0 ? 'Cannot divide by 0' : division(a, b);
  } else {
    return 'Error';
  };
};
// this updates the display in real time with each input pressed & the result of each operation
function updateDisplay (value) {
  const display = document.querySelector('.display');
  display.textContent = value;
  let output = value.toString();
  // If the result is longer than 8 characters, shrink it
  if (output.length >= 12) {
    // This converts 100000000 to 1.000e+8
    output = Number(value).toPrecision(4);
  }
  display.textContent = output;
};
// this is the function responsible for the digits being shown on the display
function digitClicked (digit) {
  // if a result was just calculated, clear num1 and start over
  if (resetScreen && operator === '') {
    num1 = digit;
    resetScreen = false;
    updateDisplay(num1);
    return;
  }
  if (operator === '') {
    // prevent number from getting too long
    if (num1.length >= 8) return;
    num1 += digit;
    updateDisplay(num1);
  } else {
    if (num2.length >= 8) return;
    num2 += digit;
    updateDisplay(num2);
  };
};
// this is the function responsible for clearing the display at any point
function clearClicked () { 
  num1 = '';
  num2 = '';
  operator = '';
  updateDisplay('0');
};
// this is the function responsible for results being displayed
function equalClicked () {
  if (num1 === '' || num2 === '' || operator === '') 
    return;
  const result = operate(operator, num1, num2);
  updateDisplay(result);
  num1 = result.toString();
  num2 = '';
  operator = '';
  resetScreen = true;
};
// this is the function responsible for what operation occured depending on what operator is used (+, -, x, /)
function operatorClicked(op) {
  if (num1 === '')
    return;
  if (num2 !== '') {
    equalClicked();
  };
  operator = op;
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    // if it's a number
    if (!isNaN(buttonText) || buttonText === '.') {
      digitClicked(buttonText);
    // if it's the clear button
    } else if (buttonText === 'C') {
      clearClicked();
    // if it's the equal button
    } else if (buttonText === '=') {
      equalClicked();
    // otherwise if it's any of the operator (+, -, x, /)
    } else {
      operatorClicked(buttonText);
    };
  });
});


