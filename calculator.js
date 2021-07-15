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