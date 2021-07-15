let calculatedNumber = 0;


function operate(operator, numOne, numTwo) {
    switch (operator) {
        case ('+'):
            calculatedNumber = add(numOne, numTwo);
            break;
        case ('-'):
            calculatedNumber = subtract(numOne, numTwo);
            break;
        case ('*'):
            calculatedNumber = multiply(numOne, numTwo);
            break;
        case ('/'):
            calculatedNumber = divide(numOne, numTwo);
            break;
    }
    console.log(calculatedNumber);
}

function add(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

function subtract(...args) {
    let sum = args[0] * 2;
    for (let arg of args) {
        sum -= arg;
    }
    return sum;
}

function multiply(...args) {
    let sum = 1;
    for (let arg of args) {
        sum *= arg;
    }
    return sum;
}

function divide(...args) {
    let sum = args[0] * args[0];
    for (let arg of args) {
        sum /= arg
    }
    return sum;
}