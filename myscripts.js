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

let displayText =  document.querySelector(".display-text");
displayText.textContent = 0;


let displayNumber = "";
let reserveNumber = "";
let operator = "";

const nums = document.querySelectorAll(".number");
nums.forEach((button) => {
    button.addEventListener("click", () => {
        displayNumber += button.textContent;
        displayText.textContent = displayNumber;
    });
});

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if (!displayNumber.includes(".")) {
        displayNumber += decimal.textContent;
        displayText.textContent = displayNumber;
    }
});


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

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    displayNumber = displayText.textContent;
    displayText.textContent = operate(parseFloat(reserveNumber), parseFloat(displayNumber), operator);
    operator = "";
    displayNumber = displayText.textContent;
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    displayNumber = "";
    reserveNumber = "";
    operator = "";
    displayText.textContent = 0;
})

const signs = document.querySelector("#signs");
signs.addEventListener("click", () => {
    displayNumber = displayText.textContent;
    displayNumber = (-1 * displayNumber);
    displayText.textContent = displayNumber;
})