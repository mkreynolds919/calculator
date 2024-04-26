function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch(operator) {
        case "+": 
            add(a,b);
        case "-":
            subtract(a,b);
        case "x":
            multiply(a,b);
        case "/":
            divide(a,b);
    }
}

const display = document.querySelector(".display-container");
let displayContent = display.textContent;
const arr = displayContent.split(' ');
let a = arr[0], operator = arr[1], b = arr[2];

const nums = document.querySelectorAll(".number-container button");
nums.forEach((btn) => {
    btn.addEventListener("click", () => {
        display.textContent += `${btn.id}`;
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((btn) => {
    btn.addEventListener("click", () => {
        display.textContent += ` ${btn.textContent} `;
    })
})