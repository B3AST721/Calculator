//SUm of numbers
const add = (...numbers) => {
    return numbers.reduce((total, current) => {
        return total + current;
    });
};

//Subtraction of numbers
const subtract = (...numbers) => {
    return numbers.reduce((total, current) => {
        return total - current;
    });
};

//Product of numbers
const multiply = (...numbers) => {
    return numbers.reduce((total, current) => {
        return total * current;
    });
};

//Divide numbers
const divide = (...numbers) => {
    return numbers.reduce((total, current) => {
        return total / current;
    });
};

//Takes 2 numbers and an operator and calls a function from above
const operate = (num1, operator, num2) => {
    if (operator === '+'){
        return add(num1, num2);
    } else if (operator === '-'){
        return subtract(num1, num2);
    } else if (operator === '*'){
        return multiply(num1, num2);
    }
    return divide(num1, num2);
}

//Select the different buttons and displays
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const currentOperand = document.querySelector('.current-number');
const previousOperand = document.querySelector('.previous-number');
const showResult = document.querySelector('.result');
const equals = document.querySelector('.equals')

//Store the values for display
let savedNumber = '';
let selectedOperator = '';
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;


numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        savedNumber += number.value;
        currentOperand.textContent = savedNumber;
    })
})

operationButtons.forEach((operator => {
    operator.addEventListener('click', function() {
      if (firstNumber && savedNumber) {
        displayResult();
      }
      // save the first number
      firstNumber = savedNumber;
  
      // get the operator that was clicked
      selectedOperator = operator.textContent;
      previousOperand.textContent = savedNumber + selectedOperator;
      savedNumber = '';
  
      console.log('FirstNumber' + firstNumber + 'Stored' + savedNumber)
      console.log(selectedOperator);
  
    })
  }));
  
  equals.addEventListener('click', function() {
    displayResult();
  });
  
  clearButton.addEventListener('click', () => {
      currentOperand.innerHTML = '';
      previousOperand.innerHTML = '';
  })

  function displayResult() {
    result = operate(parseFloat(firstNumber), selectedOperator, parseFloat(savedNumber))
    // update content of current operation with result and previous operand with the calculation, make storedNumber = result
    currentOperand.textContent = result;
    previousOperand.textContent = firstNumber + ' ' + selectedOperator + ' ' + savedNumber;
    savedNumber = result;
    console.log('FirstNumber' + firstNumber + 'Stored' + savedNumber);
  }