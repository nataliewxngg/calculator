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
            operation = "0";
            result = "";
        } else if (e.target.id == "clear-button") {


            if (operation.charAt(operation.length - 1) == ' ')
                operation = operation.substring(0, operation.length - 2);
            else
                operation = operation.substring(0, operation.length - 1);

        } else if (e.target.id == "mod-button" || e.target.id == "divide-button" || e.target.id == "minus-button" || e.target.id == "add-button" || e.target.id == "multiply-button") {
            operators.push(e.target.id.substring(0, e.target.id.indexOf('-')));
            newOp = true;
            console.log(operators);
        } else if (e.target.id == "equal-button") {
            if (!(nums.length - 1 == operators.length)) 
                result = 'MATH ERROR';

            result = 0;
            for (let operator of operators) {
                console.log(Number(nums[0]));
                console.log(Number(nums[1]));

                if (operator == "add") 
                    result = Number(nums[0]) + Number(nums[1]);
                else if (operator == "minus") 
                    result = Number(nums[0]) - Number(nums[1]);
                else if (operator == "multiply")
                    result = Number(nums[0]) * Number(nums[1]);
                else  
                    result = Number(nums[0]) / Number(nums[1]);
                
                nums.splice(0, 1);
                nums[0] = result;
            }
        } else {
            newOp
                ? nums.push(e.target.id.substring(0, e.target.id.indexOf('-')))
                : nums[nums.length-1] = nums[nums.length - 1] += e.target.id.substring(0, e.target.id.indexOf('-')); 
            newOp = false;
            console.log(nums);
        }
        
        if (operation.trim() == "") operation = "0"; 
        operationText.textContent = operation.toString();

        console.log(result);
        resultText.textContent = result; 
    });
});
