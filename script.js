// Variables
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
            operation = "";
            result = "";
            nums = [];
            operators = [];
            newOp = true;

        } else if (e.target.id == "clear-button") {
            if (newOp) {
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
            if (newOp) operators.pop();
            operators.push(e.target.id.substring(0, 1));
            newOp = true;
        } else if (e.target.id == "equal-button") {
            if (!(nums.length - 1 == operators.length)) 
                result = 'MATH ERROR';

            result = 0;
            for (let operator of operators) {
                if (operator == "+") result = Number(nums[0]) + Number(nums[1]);
                else if (operator == "-") result = Number(nums[0]) - Number(nums[1]);
                else if (operator == "*") result = Number(nums[0]) * Number(nums[1]);
                else if (operator == "/") result = Number(nums[0]) / Number(nums[1]);
                else if (operator == "%") result = Number(nums[0]) % Number(nums[1]);
                
                nums.splice(0, 1);
                nums[0] = result;
            }
        } else {
            newOp
                ? nums.push(e.target.id.substring(0, e.target.id.indexOf('-')))
                : nums[nums.length-1] = nums[nums.length - 1] += e.target.id.substring(0, e.target.id.indexOf('-')); 
            newOp = false;
        }

        console.log(`operators: [${operators}]`);
        console.log(`numbers: [${nums}]`);

        // display operation and results on webpage
        operation = "";
        let index = 0;
        for (let num of nums) {
            operation += num.toString();
            if (operators.length > index) {
                operation += ` ${operators[index]} `;
                ++index;
            }
        }

        if (operation.trim() == "") operation = "0"; 
        operationText.textContent = operation;

        resultText.textContent = result; 
    });
});
