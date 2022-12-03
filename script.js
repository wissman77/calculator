// elements selection
const lastScreen = document.querySelector('.screen-last');
const currentScreen = document.querySelector('.screen-current');
const clearButton = document.querySelector('.btn-clear');
const deleteButton = document.querySelector('.btn-delete');
const digitButtons = document.querySelectorAll('[data-digit]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equal]');
const pointButton = document.querySelector('[data-point]');

// variables
let firstNumber = '';
let secondNumber = '';
let currentOperation = null;


// basic math functions
const add = (a, b) => (a + b).toFixed(3);
const subtract = (a, b) => (a - b).toFixed(3);
const multiply = (a, b) => (a * b).toFixed(3);
const divide = (a, b) => {
  if(b === 0) return 'Cannot divide on zero';
  return (a / b).toFixed(3);
};

// operate function get an operator and 2 numbers and returns the result of the operation
const operate = (operator, x, y) => {
  switch (operator) {
    case '+':
      return add(x, y);
    case '-':
       return subtract(x, y);
    case '/':
      return divide(x, y);
    case '*':
      return multiply(x, y);
      break
    default:
      return 'Unknown Operator';
  }
};

const reset = () => currentScreen.textContent = '';

const addDigitToScreen = (e) => {
  if(currentScreen.textContent === '0') reset();
  currentScreen.textContent +=  e.target.textContent;
};

const clearScreen = () => {
  lastScreen.textContent = '';
  currentScreen.textContent = '0';
  firstNumber = '';
  secondNumber = '';
  currentOperation = null;
};

const deleteDigit = () => {
  if(currentScreen.textContent === '0') return;
  if(currentScreen.textContent.length >= 1) {
    currentScreen.textContent = currentScreen.textContent.slice(0, -1);
  }
  if(currentScreen.textContent === '') currentScreen.textContent = '0';
};

const addDecimalPoint = () => {
  if(!currentScreen.textContent.includes('.')) currentScreen.textContent += '.';
};

digitButtons.forEach(btn => btn.addEventListener('click', addDigitToScreen));
clearButton.addEventListener('click', clearScreen);
deleteButton.addEventListener('click', deleteDigit);
pointButton.addEventListener('click', addDecimalPoint);