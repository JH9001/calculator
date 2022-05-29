const operatorDisplay = document.querySelector('.operatorDisplay');
const numberDisplay = document.querySelector('.numberDisplay');
const numberInput = document.querySelectorAll('.number');
const operatorInput = document.querySelectorAll('.operator');
const equalsInput = document.querySelector('.equals');
const clearInput = document.querySelector('.clear');

const divideInput = document.getElementById('divide');
const multiplyInput = document.getElementById('multiply');
const subtractInput = document.getElementById('subtract');
const addInput = document.getElementById('add');

//user input variables
let firstSum = '';
let secondSum = '';
let finalSum = '';
let operatorSelect = '';

//basic maths functions
const divideFunction = (sum1, sum2) => sum1 / sum2;
const multiplyFunction = (sum1, sum2) => sum1 * sum2;
const subtractFunction = (sum1, sum2) => sum1 - sum2;
const addFunction = (sum1, sum2) => sum1 + sum2;

//saves number input to variables depending on operatorSelect variable value
numberInput.forEach(num => {
  num.addEventListener('click', () => {
    if (operatorSelect == '') {
      firstSum += num.textContent;
    } else {
      secondSum += num.textContent;
    }
    numberDisplay.textContent += num.textContent;
  });
});

//uses the operatorSelect variable and event bubbling to invoke the desired maths function
operatorInput.forEach(operator => {
  operator.addEventListener('click', () => {
    if (operatorSelect == '/' && finalSum == '') {
      finalSum = divideFunction(firstSum, secondSum);
  } else if (operatorSelect == '*' && finalSum == '') {
      finalSum = multiplyFunction(firstSum, secondSum);
  } else if (operatorSelect == '-' && finalSum == '') {
      finalSum = subtractFunction(firstSum, secondSum);
  } else if (operatorSelect == '+' && finalSum == '') {
      finalSum = addFunction(firstSum, secondSum);
  }
    else if (operatorSelect == '/') {
      finalSum = divideFunction(finalSum, secondSum);
  } else if (operatorSelect == '*') {
      finalSum = multiplyFunction(finalSum, secondSum);
  } else if (operatorSelect == '-') {
      finalSum = subtractFunction(finalSum, secondSum);
  } else if (operatorSelect == '+') {
      finalSum = addFunction(finalSum, secondSum);
  }
  });
});

//saves the operator clicked into the operatorSelect variable
divideInput.addEventListener('click', () => {
  operatorSelect = divideInput.textContent;
    secondSum = '';
});

multiplyInput.addEventListener('click', () => {
  operatorSelect = multiplyInput.textContent;
    secondSum = '';
});

subtractInput.addEventListener('click', () => {
  operatorSelect = subtractInput.textContent;
    secondSum = '';
});

addInput.addEventListener('click', () => {
  operatorSelect = addInput.textContent;
    secondSum = '';
});

//uses operator in operatorSelect variable and invokes maths function
equalsInput.addEventListener('click', () => {
  if (operatorSelect == '/' && finalSum == '') {
      finalSum = divideFunction(firstSum, secondSum);
  } else if (operatorSelect == '*' && finalSum == '') {
      finalSum = multiplyFunction(firstSum, secondSum);
  } else if (operatorSelect == '-' && finalSum == '') {
      finalSum = subtractFunction(firstSum, secondSum);
  } else if (operatorSelect == '+' && finalSum == '') {
      finalSum = addFunction(firstSum, secondSum);
  }
    else if (operatorSelect == '/') {
      finalSum = divideFunction(finalSum, secondSum);
  } else if (operatorSelect == '*') {
      finalSum = multiplyFunction(finalSum, secondSum);
  } else if (operatorSelect == '-') {
      finalSum = subtractFunction(finalSum, secondSum);
  } else if (operatorSelect == '+') {
      finalSum = addFunction(finalSum, secondSum);
  }
});

//clears the calculator display on click of C button
clearInput.addEventListener('click', () => {
  firstSum = '';
  secondSum = '';
  finalSum = '';
  operatorSelect = '';
});






// CODE I TRIED WHILE WORKING ON THE PROJECT

//displays the input of operator buttons on calculator
// operatorInput.forEach(operator => {
//   operator.addEventListener('click', () => {
//     if (operatorSelect == '') {
//       operatorSelect = operator.textContent;
//     } else if (operatorSelect !== '' && operatorHolder == '') {
//       operatorHolder = operator.textContent;
//     } else if (operatorSelect !== '' && operatorHolder !== '') {
//       operatorSelect = operatorHolder;
//       operatorHolder = operator.textContent;
//     }
//     operatorDisplay.textContent = operator.textContent;
//   });
// });

// multiplyInput.addEventListener('click', () => {
//   if (firstSum !== '' && secondSum !== '' && finalSum == '') {
//     finalSum = multiplyFunction(firstSum, secondSum);
//     secondSum = '';
//   } else if (firstSum !== '' && secondSum !== '' && finalSum !== '') {
//     finalSum = multiplyFunction(finalSum, secondSum);
//     secondSum = '';
//   }
// });

// divideInput.addEventListener('click', () => {
//   if (firstSum !== '' && secondSum !== '' && finalSum == '') {
//     finalSum = divideFunction(firstSum, secondSum);
//     secondSum = '';
//   } else if (firstSum !== '' && secondSum !== '' && finalSum !== '') {
//     finalSum = divideFunction(finalSum, secondSum);
//     secondSum = '';
//   }
// });

// subtractInput.addEventListener('click', () => {
//   if (firstSum !== '' && secondSum !== '' && finalSum == '') {
//     finalSum = subtractFunction(firstSum, secondSum);
//     secondSum = '';
//   } else if (firstSum !== '' && secondSum !== '' && finalSum !== '') {
//     finalSum = subtractFunction(finalSum, secondSum);
//     secondSum = '';
//   }
// });

// addInput.addEventListener('click', () => {
//   if (firstSum !== '' && secondSum !== '') {
//     finalSum = addFunction(firstSum, secondSum);
//     secondSum = '';
//   } else if (firstSum !== '' && secondSum !== '' && finalSum !== '') {
//     finalSum = addFunction(finalSum, secondSum);
//     secondSum = '';
//   }
// });