// Variables
const DEFAULTBUTTONBG = "#495057";
const NUMBUTTONBG = "#6c757d";
const OPBUTTONBG = "#669bbc";
const CLEARBUTTONBG = "#d62828";
const EQUALBUTTONBG = "#57cc99";

let operation = "";
let result = "";
let newOp = "";
let secondOp = false;

const buttons = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".nums");
const opButtons = document.querySelectorAll(".op");
const clearButtons = document.querySelectorAll(".clear");
const equalButton = document.querySelector(".equal");

const operationText = document.querySelector("#operation-text");
const resultText = document.querySelector("#result-text")

const operations = {
    mod: " % ",
    divide: " / ", 
    minus: " - ",
    add: " + ",
    multiply: " * ",
    decimal: "."
}

function operate(x, y, op) {
    if (op == "+") {
        return parseFloat(x) + parseFloat(y);
    } else if (op == "-") {
        return parseFloat(x) - parseFloat(y);
    } else if (op == "*") {
        return parseFloat(x) * parseFloat(y);
    } else {
        return parseFloat(x) / parseFloat(y);
    }
}

// Event Listeners (HOVER)
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
    })
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
            operation = "0";
            secondOp = false;
            result = "";
        } else if (e.target.id == "clear-button") {
            if (operation.charAt(operation.length - 1) == ' ') {
                operation = operation.substring(0, operation.length-2);
                // console.log("true");
            } else
                operation = operation.substring(0, operation.length-1);
        } else if (e.target.id == "mod-button"||e.target.id == "divide-button"||e.target.id == "minus-button" || e.target.id == "add-button" || e.target.id == "multiply-button" ||e.target.id == "decimal-button") {
            // console.log(operations[e.target.id.substring(0, e.target.id.indexOf("-"))])
            if (secondOp) { 
                result = operate(result, operation.substring(operation.lastIndexOf(' ') + 1, operation.length), newOp);
                operation = "";
                newOp = operations[e.target.id.substring(0, e.target.id.indexOf("-"))].trim();
                
                console.log(result);
                console.log(newOp);
            } else {
                result = operation;
                operation += operations[e.target.id.substring(0, e.target.id.indexOf("-"))];
                newOp = operations[e.target.id.substring(0, e.target.id.indexOf("-"))].trim();
            }
            secondOp = true;
        } else if (e.target.id == "equal-button") {
            result = operate(operation, result.substring(0,result.indexOf(' ')), result.substring(result.indexOf(' ')+1,result.lastIndexOf(' ')));
            
            operation = "0";
            operating = "";
            secondOp = false;
        } else {
            operation += e.target.id.substring(0,e.target.id.indexOf('-'));
        }
        
        if (operation.trim() == "") operation = " ";
        operationText.textContent = operation.toString();
        if (secondOp)
            resultText.textContent = result.toString();
    })
})
