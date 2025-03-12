let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;
let equation = '';

const display = document.querySelector('.calc_display');
const equationDisplay = document.querySelector('.calc_equation');    

function updateDisplay() {
    display.textContent = displayValue;
    equationDisplay.textContent = equation;
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;   
    }
    updateDisplay();
}

function appendDecimal() {
    if (waitingForSecondOperand) {
        displayValue = '0.';
        waitingForSecondOperand = false;
        updateDisplay();
        return;
    }

    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
        equation = `${inputValue} ${nextOperator} `;
    } else if (operator) {
        const result = calculate();
        equation = `${result} ${nextOperator} `;
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }
    
    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function calculate() {
    if (waitingForSecondOperand) return firstOperand;

    const secondOperand = parseFloat(displayValue);
    equation += `${secondOperand}`;
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
        default:
            return parseFloat(displayValue);
    }

    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstOperand = result;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
    return result;
}

function clearAll() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    equation = '';
    updateDisplay();
}

function clearEntry() {
    displayValue = '0';
    updateDisplay();
}

function backSpace() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function square() {
    const currentValue = parseFloat(displayValue);
    equation = `sqr(${currentValue}) = `;
    const result = currentValue * currentValue;
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstOperand = result;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function squareRoot() {
    const currentValue = parseFloat(displayValue);
    equation = `√(${currentValue}) = `;
    const result = Math.sqrt(currentValue);
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstOperand = result;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function toggleSign() {
    const currentValue = parseFloat(displayValue);
    displayValue = `${-currentValue}`;
    updateDisplay();
}

function fraction() {
    const currentValue = parseFloat(displayValue);
    equation = `1/(${currentValue}) = `;
    const result = 1 / currentValue;
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstOperand = result;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
});