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
