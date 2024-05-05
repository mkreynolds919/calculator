
// These functions return the individual answers for each calculation //
// parseFloat is there to allow decimals //
// toFixed is there to round long decimals to 6 places to avoid running offscreen //
// Multiplying by 1 removes trailing zeroes from decimals after being run through toFixed //

function add(a, b) {
    return 1 * parseFloat(a + b).toFixed(6);
}

function subtract(a, b) {
    return 1 * parseFloat(a - b).toFixed(6);
}

function multiply(a, b) {
    return 1 * parseFloat(a * b).toFixed(6);
}

function divide(a, b) {
    return 1 * parseFloat(a / b).toFixed(6);
}

// The operate function uses switch to find the correct math function to run //
// Message added for trying to divide by zero //

function operate(a, b, operator) {
    switch(operator) {
        case "+": 
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a,b);
        case "/":
            if (b == 0) {
                return "You tried it!";
            }
            return divide(a,b);
    }
}

// Identifies text div within display-container //
// Intially set to 0 for a clean, calculator setting //

let displayText =  document.querySelector(".display-text");
displayText.textContent = 0;

// Empty values are set so functions can compare values //

let displayNumber = "";
let reserveNumber = "";
let operator = "";

// Identifies number buttons (not decimal) //
// Concatenates the button text to the displayNumber value, then updates the displayText value as that number //

const nums = document.querySelectorAll(".number");
nums.forEach((button) => {
    button.addEventListener("click", () => {
        displayNumber += button.textContent;
        displayText.textContent = displayNumber;
    });
});

// Identifies decimal number by id //
// If displayText value already has a decimal, you cannot place another one //
// If it does not, adds decimal point to that value and displayNumber //

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if (!displayNumber.includes(".")) {
        displayNumber += decimal.textContent;
        displayText.textContent = displayNumber;
    }
});

// Identifies operator buttons //
// If no other operator has been used, simply shifts displayNumber to reserveNumber value, clears displayNumber, and asserts an operator //
// If another operator has already been used (without equals), performs operate with reserveNumber, displayNumber, and the previous operator //
// Then, it asserts itself as the new operator, with reserveNumber being updated to the operated answer value //

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator == "") {
            operator = button.textContent;
            reserveNumber = displayText.textContent;
            displayNumber = "";
        } else {
            displayText.textContent = operate(parseFloat(reserveNumber), parseFloat(displayNumber), operator);
            operator = button.textContent;
            reserveNumber = displayText.textContent;
            displayNumber = "";
        }
    })
})

// Identifies equals button //
// Sets displayText as displayNumber and updates it to be the operated answer of reserveNumber, displayNumber, and operator //
// parseFloat is run to avoid string-type operations //
// operator is then cleared and displayNumber is reassigned //

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    displayNumber = displayText.textContent;
    displayText.textContent = operate(parseFloat(reserveNumber), parseFloat(displayNumber), operator);
    operator = "";
    displayNumber = displayText.textContent;
})

// Identifies clear button //
// Sets every value equal to their starting value: nothing //

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    displayNumber = "";
    reserveNumber = "";
    operator = "";
    displayText.textContent = 0;
})

// Identifies signs button // 
// Simply multiplies the value by -1 and updates the displayText content to reflect that update //

const signs = document.querySelector("#signs");
signs.addEventListener("click", () => {
    displayNumber = displayText.textContent;
    displayNumber = (-1 * displayNumber);
    displayText.textContent = displayNumber;
})

// Identifies backspace button //
// Slices the last character from displayNumber string and reassigns //
// If displayNumber is blank, changes displayText to 0 //

const back = document.querySelector("#backspace");
back.addEventListener("click", () => {
    displayNumber = displayNumber.slice(0, -1);
    displayText.textContent = displayNumber;
    if (displayNumber == "") {
        displayText.textContent = 0;
    }
})