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
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}

const display = document.querySelector(".display-container");
let arr = display.textContent.split(' ');


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

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = "";
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    arr = display.textContent.split(' ');
    let a = parseInt(arr[0]), operator = arr[1], b = parseInt(arr[2]);
    display.textContent = operate(a, b, operator);
})
