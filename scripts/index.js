let no1;
let no2;
let operator;

function add(no1, no2) {
    return Number(no1) + Number(no2);
}

function subtract(no1, no2) {
    return Number(no1) - Number(no2);
}

function multiply(no1, no2) {
    return Number(no1) * Number(no2);
}

function divide(no1, no2) {
    return Number(no1) / Number(no2);
}

function operate(operator, no1, no2) {
    if(operator == '+') {
        return add(no1,no2);
    }
    else if(operator == '-') {
        return subtract(no1, no2);
    }
    else if (operator == '*') { 
        return multiply(no1, no2);
    }
    else if (operator == '/') {
        return divide(no1, no2);
    }
    else {
        console.log("Operator not found!");
    }
}