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

let displayText =  document.querySelector(".display-text");
displayText.textContent = 0;


let displayNumber = "";
let reserveNumber = "";

const nums = document.querySelectorAll(".number-container button");
nums.forEach((button) => {
    button.addEventListener("click", () => {
        displayNumber += button.textContent;
        displayText.textContent = displayNumber;
    })
})