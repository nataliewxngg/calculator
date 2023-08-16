// Functions
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]; 
    }
    return sum;
}

function subtract() {
    let diff = 0;
    for (let i = 0; i < arguments.length; i++) {
        diff -= arguments[i];
    }
    return diff;
}

function multiply() {
    let product = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        product *= arguments[i];
    }
    return product;
}

function divide() {
    let quotient = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        quotient /= quotient[i];
    }
    return quotient
}