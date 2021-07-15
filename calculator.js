let CALCULATED_NUMBER = 0;
let NUM_ARRAY_ONE = [];
let NUM_ARRAY_TWO = [];
let NUM_ONE = 0;
let NUM_TWO = 0;
let NUM_INDEX = 1;
let OPERATOR = "";
let DECIMAL_USED = false;
let STORED_NUMBER = 0;

let calcDisplayText = document.querySelector('#calcDisplayText');

btnNumPress();
btnOperationsPress();
btnClearPress();
btnEqualPress();

// Calculates then clears variabls for next equation
function btnEqualPress() {
    let btnEqual = document.querySelector('#btnEquals');

    btnEqual.addEventListener('click', () => {
        let newCalcDisplayText = operate(OPERATOR, NUM_ONE, NUM_TWO);
        calcDisplayText.textContent = newCalcDisplayText;
        CALCULATED_NUMBER = 0;
        NUM_ARRAY_ONE = [];
        NUM_ARRAY_TWO = [];
        NUM_ONE = 0;
        NUM_TWO = 0;
        NUM_INDEX = 1;
        OPERATOR = "";
    })
}

// RESET EVERYTHING
function btnClearPress() {
    let btnClear = document.querySelector('#btnClear');

    btnClear.addEventListener('click', () => {
        CALCULATED_NUMBER = 0;
        NUM_ARRAY_ONE = [];
        NUM_ARRAY_TWO = [];
        NUM_ONE = 0;
        NUM_TWO = 0;
        NUM_INDEX = 1;
        OPERATOR = "";
        calcDisplayText.textContent = "0";
    });
}

// Event listener added to Operator buttons
function btnOperationsPress() {
    let btnArray = document.querySelectorAll('.btnOperation');

    btnArray.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (NUM_INDEX == 1) {
                NUM_INDEX = 2;
            } else if (NUM_INDEX == 2) {
                OPERATOR = btn.value;
                STORED_NUMBER = operate(OPERATOR, NUM_ONE, NUM_TWO);
                newCalcDisplayText = STORED_NUMBER.toString();
                calcDisplayText.textContent = newCalcDisplayText;
            } else {
                OPERATOR = btn.value;
                calcDisplayText.textContent = "0";
                // alert(OPERATOR);
            }

        })
    })
}

//Event listeners added to number buttons
function btnNumPress() {
    let btnArray = document.querySelectorAll('.btnNum');

    btnArray.forEach((btn) => {
        btn.addEventListener('click', () => {
            // alert(btn.value);
            // A check to make sure number doesn't get too large for display
            if (NUM_INDEX == 1) {
                if (NUM_ARRAY_ONE.length >= 14) {
                    alert("Came in here with that Big Rick Energy!")
                } else {
                    NUM_ARRAY_ONE.push(btn.value);

                    // We make array a string, remove all , to make string display like a number
                    let newCalcDisplayText = NUM_ARRAY_ONE.toString().replace(/,/g, "");
                    calcDisplayText.textContent = newCalcDisplayText;
    
                    // We store the string as a number for future computation
                    NUM_ONE = Number(newCalcDisplayText);
                }
            } else if(NUM_INDEX == 2) {
                // Check if additional operators have been called
                if (STORED_NUMBER > 0 || STORED_NUMBER < 0) {
                    // Replace NUM_ONE if this is after 2nd operator
                    NUM_ONE = STORED_NUMBER;
                }
                if (NUM_ARRAY_TWO.length >= 14) {
                    alert("Came in here with that Big Rick Energy!")
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
    return CALCULATED_NUMBER;
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