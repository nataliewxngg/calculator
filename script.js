// Variables
let operation = "";
const buttons = document.querySelectorAll("button");

// Functions
function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
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

// Event Listeners
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
        } else {
            // do operations here
        }

        console.log(operation)
    })
})
