let no1 = " ";
let no2 = " ";
let operator = " ";
let operationAdded = false;
let no1Element = document.getElementById("no1");
let no2Element = document.getElementById("no2");
let operationElement = document.getElementById("operator");
let calcDigits = document.getElementById("calc-digits");
let calcOperations = document.getElementById("calc-operations");
let clearButton = document.getElementById("calc-clear");
let resultElement = document.getElementById("result");
let isError = false;
let resultCal = null;

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
        if (no2 == 0) {
            return "Wat";
        }
        return divide(no1, no2);
    }
    else {
        console.log("Operator not found!");
    }
}

calcDigits.addEventListener("click", () => {
    if(isError) {
        return;
    }
    if (event.target.matches("button")) {
        let target = event.target;
        if (!operationAdded) {
            if (no1 != " ") {
                no1.innerHTML = no1;
            }
            no1 = no1 + target.innerHTML;
            no1 = no1.replace(/\s/g, '');
            no1Element.innerHTML = no1;
            if (no1 > 999999999) {
                no1 = " ";
                no2 = " ";
                operator = " ";
                result.innerHTML = "";
                operationAdded = false;
                no1Element.innerHTML = "Error";
                no2Element.innerHTML = "";
                operationElement.innerHTML = "";
                isError = true;
            }
        }
        else {
            no2 = no2 + target.innerHTML;
            no2 = no2.replace(/\s/g, '');
            no2Element.innerHTML = no2;
            if (no2 > 999999999) {
                no1 = " ";
                no2 = " ";
                operator = " ";
                result.innerHTML = "";
                operationAdded = false;
                no1Element.innerHTML = "Error";
                no2Element.innerHTML = "";
                operationElement.innerHTML = "";
                isError = true;
                console.log("borken");
            }
        }
    }
});

calcOperations.addEventListener("click", () => {
    if(isError) {
        return;
    }
    if (event.target.matches("button")) {
        let target = event.target;
        if (target.innerHTML.replace(/\s/g, '') == "=" && no1 != " " && no2 != " ") {
            let result = operate(operator.replace(/\s/g, ''), Number(no1), Number(no2));
            if(result > 99999999999) {
                no1 = " ";
                no2 = " ";
                operator = " ";
                result.innerHTML = "";
                operationAdded = false;
                no1Element.innerHTML = "Error";
                no2Element.innerHTML = "";
                operationElement.innerHTML = "";
                isError = true;
            }
            else {
                resultElement.innerHTML = Math.round(result * 100000) / 100000;
                no1 = Math.round(result * 100000) / 100000;
                no2 = " ";
                resultCal = no1;  
            }
        }
        else if (target.innerHTML.replace(/\s/g, '') == "=") {
            no1 = " ";
            no2 = " ";
            operator = " ";
            result.innerHTML = "";
            operationAdded = false;
            no1Element.innerHTML = "Error";
            no2Element.innerHTML = "";
            operationElement.innerHTML = "";
            isError = true;
        }
        else if (!operationAdded) {
            let operation = target.innerHTML;
            operationElement.innerHTML = operation;
            operationAdded = true;
            operator = operation;
        }
        else if (resultCal != null) {
            no1Element.innerHTML = no1;
            let operation = target.innerHTML;
            operationElement.innerHTML = operation;
            operationAdded = true;
            operator = operation;
            resultElement.innerHTML = "";
            no2Element.innerHTML = "";
        }
        else {
            no1 = " ";
            no2 = " ";
            operator = " ";
            result.innerHTML = "";
            operationAdded = false;
            no1Element.innerHTML = "Error";
            no2Element.innerHTML = "";
            operationElement.innerHTML = "";
            isError = true;
        }
        
    }
});

clearButton.addEventListener("click", () => {
    no1 = " ";
    no2 = " ";
    operator = " ";
    operationAdded = false;
    no1Element.innerHTML = "";
    no2Element.innerHTML = "";
    operationElement.innerHTML = "";
    result.innerHTML = "";
    isError = false;
    resultCal = null;
});