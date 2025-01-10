// VARIABLES
const DEFAULTBUTTONBG = "#495057";
const NUMBUTTONBG = "#6c757d";
const OPBUTTONBG = "#669bbc";
const CLEARBUTTONBG = "#d62828";
const EQUALBUTTONBG = "#57cc99";

let operation = "";
let result = "";
let newOp = true;

let nums = [];
let operators = [];
let modifyOperation = true;

const buttons = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".nums");
const opButtons = document.querySelectorAll(".op");
const clearButtons = document.querySelectorAll(".clear");
const equalButton = document.querySelector(".equal");

const operationText = document.querySelector("#operation-text");
const resultText = document.querySelector("#result-text")

// EVENT LISTENERS
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => button.style.transform = "scale(1.1)");
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.background = DEFAULTBUTTONBG;
    });
});

numButtons.forEach(numButton => numButton.onmouseover = () => numButton.style.background = NUMBUTTONBG);
opButtons.forEach(opButton => opButton.onmouseover = () => opButton.style.background = OPBUTTONBG);
clearButtons.forEach(clearButton => clearButton.onmouseover = () => clearButton.style.background = CLEARBUTTONBG);
equalButton.onmouseover = () => equalButton.style.background = EQUALBUTTONBG;

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (e.target.id == "all-clear-button") {
            modifyOperation = true;
            operation = "";
            result = "";
            nums = [];
            operators = [];
            newOp = true;

        } else if (e.target.id == "clear-button") {
            modifyOperation = true;
            if (newOp && nums.length > 0) {
                newOp = false;
                operators.pop();
            }
            else {
                if (nums.length > 0) {
                    nums[nums.length - 1] = Number(nums[nums.length - 1].toString().substring(0, nums[nums.length - 1].toString().length - 1))
                    if (nums[nums.length - 1] == 0) {
                        nums.pop();
                        newOp = true;
                    }
                } else newOp = true;
            } 
        } else if (e.target.id == "%-button" || e.target.id == "/-button" || e.target.id == "--button" || e.target.id == "+-button" || e.target.id == "*-button") {
            if (nums.length > 0) {
                modifyOperation = true;
                if (newOp) operators.pop();
                operators.push(e.target.id.substring(0, 1));
                newOp = true;
                
                // calculate first 2 numbers if available
                if (nums.length > 1) {
                    calculate();
                    operators.splice(0, 1);
                }
            } else {
                if (e.target.id == "--button") {
                    nums.push(e.target.id.substring(0, 1));
                    newOp = false;
                }
            }
        } else if (e.target.id == "equal-button") {
            if (nums.length == operators.length && modifyOperation) {
                if (result == "") result = 0;
                nums.push(Number(result));
                operation += ` ${result} `
            }

            if (modifyOperation) {
                calculate();
                newOp = true;
            }
            modifyOperation = false;
        } else {
            modifyOperation = true;
            newOp
                ? nums.push(e.target.id.substring(0, e.target.id.indexOf('-')))
                : nums[nums.length - 1] += e.target.id.substring(0, e.target.id.indexOf('-')); 
            newOp = false;
        }

        console.log(`operators: [${operators}]`);
        console.log(`numbers: [${nums}]`);

        // displays the operation and result on the webpage
        if (modifyOperation) {
            operation = "";
            let index = 0;
            for (let num of nums) {
                operation += num.toString();
                if (operators.length > index) {
                    operation += ` ${operators[index]} `;
                    ++index;
                }
            }
        }
        if (operation.trim() == "") operation = "0"; 
        operationText.textContent = operation;
        resultText.textContent = result; 
    });
});

// FUNCTIONS
function calculate() { // operates and returns the result of the first 2 numbers
    result = 0;
    if (operators[0] == "+") result = Number(nums[0]) + Number(nums[1]);
    else if (operators[0] == "-") result = Number(nums[0]) - Number(nums[1]);
    else if (operators[0] == "*") result = Number(nums[0]) * Number(nums[1]);
    else if (operators[0] == "/") result = Number(nums[0]) / Number(nums[1]);
    else if (operators[0] == "%") result = Number(nums[0]) % Number(nums[1]);
    nums.splice(0, 1);
    nums[0] = result;
}
