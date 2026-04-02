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

function operate (operator, num1, num2) {
  const a = Number(num1);
  const b = Number(num2);
  if (operator === '+') {
    return addition(a, b);
  } else if (operator === '-') {
    return subtraction(a, b);
  } else if (operator === '*') {
    return multiplication(a, b);
  } else if (operator === '/') {
    return b === 0 ? 'Cannot divide by 0' : division(a, b);
  } else {
    return 'Error';
  };
};
