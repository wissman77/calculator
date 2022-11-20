// basic math functions
const add = (a, b) => (a + b).toFixed(3);
const subtract = (a, b) => (a - b).toFixed(3);
const multiply = (a, b) => (a * b).toFixed(3);
const divide = (a, b) => {
  if(b === 0) return 'Cannot divide on zero';
  return (a / b).toFixed(3);
};

