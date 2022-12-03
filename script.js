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
let firstNumber = null;
let secondNumber = null;
let currentOperation = null;

// basic math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) return 'Cannot divide on zero';
  return a / b;
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

const addDigitToScreen = (digit) => {
  if (currentScreen.textContent === '0' || isNotNumber(currentScreen.textContent)) reset();
  currentScreen.textContent +=  digit;
};

const clearScreen = () => {
  lastScreen.textContent = '';
  currentScreen.textContent = '0';
  firstNumber = null;
  secondNumber = null;
  currentOperation = null; 
};

const deleteDigit = () => {
  if (currentScreen.textContent === '0') return;
  if (currentScreen.textContent.length >= 1) {
    currentScreen.textContent = currentScreen.textContent.slice(0, -1);
  }
  if (currentScreen.textContent === '') currentScreen.textContent = '0';
};

const addDecimalPoint = () => {
  if (!currentScreen.textContent.includes('.')) currentScreen.textContent += '.';
};

const getAnswer = () => {
  if (currentOperation === null) return;
  secondNumber = Number(currentScreen.textContent);
  currentScreen.textContent = operate(currentOperation, firstNumber, secondNumber);
  lastScreen.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`;
  currentOperation = null;
}

const getOperationType = (operator) => {
  if (isNotNumber(currentScreen.textContent)) {
    reset();
    return;
  }
  if (currentOperation !== null) getAnswer();
  firstNumber = Number(currentScreen.textContent);
  currentOperation = operator;
  lastScreen.textContent = `${firstNumber} ${currentOperation}`;
  currentScreen.textContent = '0';
}

const isNotNumber = (num) => isNaN(num);

// Keyboard handler 
const keyboardHandler = (e) => {
  if (e.key >= 0 && e.key <= 9) addDigitToScreen(e.key);
  if (e.key === '.') addDecimalPoint();
  if (e.key === '=' || e.key === 'Enter') getAnswer();
  if (e.key === 'Backspace') deleteDigit();
  if (e.key === 'Escape') clearScreen();
  if (e.key === '*' ||
      e.key === '/' ||
      e.key === '-' ||
      e.key === '+') getOperationType(e.key);
}

// Event Listeners

digitButtons.forEach(btn => btn.addEventListener('click', () => addDigitToScreen(btn.textContent)));
clearButton.addEventListener('click', clearScreen);
deleteButton.addEventListener('click', deleteDigit);
pointButton.addEventListener('click', addDecimalPoint);
operatorButtons.forEach(btn => btn.addEventListener('click', () => getOperationType(btn.textContent)));
equalButton.addEventListener('click', getAnswer);
window.addEventListener('keydown', keyboardHandler);