// elements selection
const lastScreen = document.querySelector('.screen-last');
const currentScreen = document.querySelector('.screen-last');
const clearButton = document.querySelector('.btn-clear');
const deleteButton = document.querySelector('.btn-delete');
const digitButtons = document.querySelectorAll('[data-digit]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equal]');
const pointButton = document.querySelector('[data-point]')


// basic math functions
const add = (a, b) => (a + b).toFixed(3);
const subtract = (a, b) => (a - b).toFixed(3);
const multiply = (a, b) => (a * b).toFixed(3);
const divide = (a, b) => {
  if(b === 0) return 'Cannot divide on zero';
  return (a / b).toFixed(3);
};

// operate function get an operator and 2 numbers and returns the result of the operation
const operate = (operator, firstNum, secondNum) => {
  switch (operator) {
    case '+':
      return add(firstNum, secondNum);
      break;
    case '-':
       return subtract(firstNum, secondNum);
      break;
    case '/':
      return divide(firstNum, secondNum);
      break;
    case '*':
      return multiply(firstNum, secondNum);
      break
    default:
      return 'Unknown Operator';
      break;
  }
};
