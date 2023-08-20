// Variables
const DEFAULTBUTTONBG = "#495057";
const NUMBUTTONBG = "#6c757d";
const OPBUTTONBG = "#669bbc";
const CLEARBUTTONBG = "#d62828";
const EQUALBUTTONBG = "#57cc99";

let operation = "";
let result = 0;

const buttons = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".nums");
const opButtons = document.querySelectorAll(".op");
const clearButtons = document.querySelectorAll(".clear");
const equalButton = document.querySelector(".equal");

const calculatorDisplay = document.querySelector("#calculator-display");

// Functions
function add(x,y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x,y) {
    return parseFloat(x) - parseFloat(y);
}

function multiply(x,y) {
    return parseFloat(x) * parseFloat(y);
}

function divide(x,y) {
    return parseFloat(x) / parseFloat(y);
}

function operate(x, y, op) {
    if (op == "+") {
        return add(x, y);
    } else if (op == "-") {
        return subtract(x, y);
    } else if (op == "*") {
        return multiply(x, y);
    } else {
        return divide(x, y);
    }
}

// Event Listeners (HOVER)
buttons.forEach((button) => {
    button.onmouseover = () => button.style.transform = "scale(1.1)";
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.background = DEFAULTBUTTONBG;
    })
})

numButtons.forEach((numButton) => {
    numButton.onmouseover = () => numButton.style.background = NUMBUTTONBG;
})
opButtons.forEach((opButton) => {
    opButton.onmouseover = () => opButton.style.background = OPBUTTONBG;
})
clearButtons.forEach((clearButton) => {
    clearButton.onmouseover = () => clearButton.style.background = CLEARBUTTONBG;
})
equalButton.onmouseover = () => equalButton.style.background = EQUALBUTTONBG;

// Event Listeners (CLICK)
buttons.forEach((button) => {
    button.addEventListener("click", function (e) {

        if (e.target.id == "all-clear-button") {
            operation = "";
        } else if (e.target.id == "clear-button") {
            operation = operation.substring(0, operation.length-1);
        } else if (e.target.id == "mod-button") {
            operation += " % ";
        } else if (e.target.id == "divide-button") {
            operation += " / ";
        } else if (e.target.id == "7-button") {
            operation += "7";
        } else if (e.target.id == "8-button") {
            operation += "8";
        } else if (e.target.id == "9-button") {
            operation += "9";
        } else if (e.target.id == "add-button") {
            operation += " + ";
        } else if (e.target.id == "4-button") {
            operation += "4";
        } else if (e.target.id == "5-button") {
            operation += "5";
        } else if (e.target.id == "6-button") {
            operation += "6";
        } else if (e.target.id == "minus-button") {
            operation += " - ";
        } else if (e.target.id == "1-button") {
            operation += "1";
        } else if (e.target.id == "2-button") {
            operation += "2";
        } else if (e.target.id == "3-button") {
            operation += "3";
        } else if (e.target.id == "multiply-button") {
            operation += " * ";
        } else if (e.target.id == "0-button") {
            operation += "0";
        } else if (e.target.id == "decimal-button") {
            operation += ".";
        } else { // equal button
            operation += " ";

            let x = operation.substring(0, operation.indexOf(" "));
            operation = operation.substring(operation.indexOf(" ") + 1);
            console.log(x);

            let op = operation.substring(0, operation.indexOf(" "));
            operation = operation.substring(operation.indexOf(" ") + 1);
            console.log(op);

            let y = operation.substring(0, operation.indexOf(" "));
            operation = operation.substring(operation.indexOf(" ") + 1);
            console.log(y)

            result = operate(x, y, op);
            console.log(result);
        }

        // display operation on calculator display
        calculatorDisplay.innerHTML = "";
        const h4 = document.createElement("h4");
        h4.innerText = operation;
        calculatorDisplay.appendChild(h4);
    })
})
