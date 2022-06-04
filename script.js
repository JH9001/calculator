const numberDisplay = document.querySelector('.numberDisplay');
const numberInput = document.querySelectorAll('.number');
const operatorInput = document.querySelectorAll('.operator');
const equalsInput = document.querySelector('.equals');
const clearInput = document.querySelector('.clear');

const plusMinusInput = document.querySelector('.plusMinus');
const percentageInput = document.querySelector('.percentage');
const decimalInput = document.querySelector('.decimal');

const divideInput = document.getElementById('divide');
const multiplyInput = document.getElementById('multiply');
const subtractInput = document.getElementById('subtract');
const addInput = document.getElementById('add');

//user input variables
let firstSum = '';
let secondSum = '';
let operatorSelect = '';

//basic maths functions
const divideFunction = (sum1, sum2) => sum1 / sum2;
const multiplyFunction = (sum1, sum2) => sum1 * sum2;
const subtractFunction = (sum1, sum2) => sum1 - sum2;
const addFunction = (sum1, sum2) => Number(sum1) + Number(sum2);
const percentFunction = (sum1) => (sum1/100);
const plusMinusFunction = (sum1) => (sum1 * -1);

//saves number input to variables depending on operatorSelect variable value
numberInput.forEach(num => {
  num.addEventListener('click', () => {
    if (operatorSelect == '') {
      firstSum += num.textContent;
      numberDisplay.textContent = firstSum;
    } else {
      secondSum += num.textContent;
      numberDisplay.textContent = secondSum;
    }
  });
});

//uses the operatorSelect variable and event bubbling to invoke the desired maths function
operatorInput.forEach(operator => {
  operator.addEventListener('click', () => {
    if (operatorSelect == '/') {
      firstSum = divideFunction(firstSum, secondSum);
  } else if (operatorSelect == '*') {
      firstSum = multiplyFunction(firstSum, secondSum);
  } else if (operatorSelect == '-') {
      firstSum = subtractFunction(firstSum, secondSum);
  } else if (operatorSelect == '+') {
      firstSum = addFunction(firstSum, secondSum);
  }
    numberDisplay.textContent = firstSum;
  });
});

plusMinusInput.addEventListener('click', () => {
  if (firstSum !== '' && secondSum == '') {
  firstSum = plusMinusFunction(firstSum);
  numberDisplay.textContent = firstSum;
  } else {
    secondSum = plusMinusFunction(secondSum);
    numberDisplay.textContent = secondSum;
  }
});

percentageInput.addEventListener('click', () => {
  firstSum = percentFunction(firstSum);
  numberDisplay.textContent = firstSum;
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
  if (operatorSelect == '/' && secondSum !== '') {
      firstSum = divideFunction(firstSum, secondSum);
  } else if (operatorSelect == '*' && secondSum !== '') {
      firstSum = multiplyFunction(firstSum, secondSum);
  } else if (operatorSelect == '-' && secondSum !== '') {
      firstSum = subtractFunction(firstSum, secondSum);
  } else if (operatorSelect == '+' && secondSum !== '') {
      firstSum = addFunction(firstSum, secondSum);
  }
    numberDisplay.textContent = firstSum;
    secondSum = '';
});

decimalInput.addEventListener('click', () => {
  if (!firstSum.includes('.') && !secondSum.includes('.')) {
    decimalInput.disabled = false;
    firstSum += decimalInput.textContent;
    numberDisplay.textContent = firstSum;
  } else if (!secondSum.includes('.')) {
    decimalInput.disabled = false;
    secondSum += decimalInput.textContent;
    numberDisplay.textContent = secondSum;
  }
});

//clears the calculator display on click of C button
clearInput.addEventListener('click', () => {
  firstSum = '';
  secondSum = '';
  operatorSelect = '';
  numberDisplay.textContent = '';
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

//UNUSED CODE FROM EQUALS INPUT WHEN USING FINALRESULT
 //   else if (operatorSelect == '/') {
  //     firstSum = divideFunction(secondSum, firstSum);
  // } else if (operatorSelect == '*') {
  //     firstSum = multiplyFunction(secondSum, firstSum);
  // } else if (operatorSelect == '-') {
  //     firstSum = subtractFunction(secondSum, firstSum);
  // } else if (operatorSelect == '+') {
  //     firstSum = addFunction(secondSum, firstSum);
  // }

  //UNUSED CODE FROM OPERATORINPUT WHEN USING FINALRESULT
  //   else if (operatorSelect == '/') {
  //     firstSum = divideFunction(secondSum, firstSum);
  // } else if (operatorSelect == '*') {
  //     firstSum = multiplyFunction(secondSum, firstSum);
  // } else if (operatorSelect == '-') {
  //     firstSum = subtractFunction(secondSum, firstSum);
  // } else if (operatorSelect == '+') {
  //     firstSum = addFunction(secondSum, firstSum);
  // }