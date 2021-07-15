let CALCULATED_NUMBER = 0;
let NUM_ARRAY_ONE = [];
let NUM_ARRAY_TWO = [];
let NUM_ONE = 0;
let NUM_TWO = 0;
let NUM_INDEX = 1;

let calcDisplayText = document.querySelector('#calcDisplayText');

btnNumPress();




//Event listeners added to number buttons
function btnNumPress() {
    let btnArray = document.querySelectorAll('.btnNum');

    btnArray.forEach((btn) => {
        btn.addEventListener('click', () => {
            // alert(btn.value);
            // A check to make sure number doesn't get too large for display
            if (NUM_INDEX == 1) {
                if (NUM_ARRAY_ONE.length >= 14) {
                    alert("The Number you are attempting is too large.")
                } else {
                    NUM_ARRAY_ONE.push(btn.value);

                    // We make array a string, remove all , to make string display like a number
                    let newCalcDisplayText = NUM_ARRAY_ONE.toString().replace(/,/g, "");
                    calcDisplayText.textContent = newCalcDisplayText;
    
                    // We store the string as a number for future computation
                    NUM_ONE = Number(newCalcDisplayText);
                }
            } else {
                if (NUM_ARRAY_ONE.length >= 14) {
                    alert("The Number you are attempting is too large.")
                } else {
                    NUM_ARRAY_TWO.push(btn.value);

                    let newCalcDisplayText = NUM_ARRAY_TWO.toString().replace(/,/g, ""); 
                    calcDisplayText.textContent = newCalcDisplayText;
                    
                    NUM_TWO = Number(newCalcDisplayText);
                }

            }
            // calcDisplayText.textContent = btn.value;
        })
    })
}

function operate(operator, numOne, numTwo) {
    switch (operator) {
        case ('+'):
            CALCULATED_NUMBER = add(numOne, numTwo);
            break;
        case ('-'):
            CALCULATED_NUMBER = subtract(numOne, numTwo);
            break;
        case ('*'):
            CALCULATED_NUMBER = multiply(numOne, numTwo);
            break;
        case ('/'):
            CALCULATED_NUMBER = divide(numOne, numTwo);
            break;
    }
    console.log(CALCULATED_NUMBER);
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