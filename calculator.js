let CALCULATED_NUMBER = 0;
let NUM_ARRAY_ONE = [];
let NUM_ARRAY_TWO = [];
let NUM_ONE = 0;
let NUM_TWO = 0;
let NUM_INDEX = 1;
let OPERATOR = "";
let DECIMAL_USED = false;
let STORED_NUMBER = 0;

const calcDisplayText = document.querySelector('#calcDisplayText');

btnNumPress();
btnOperationsPress();
btnClearPress();
btnEqualPress();
btnDecimalPress();
btnBackSpacePress();
btnPosNegPress();


// a lil help from https://stackoverflow.com/questions/4416505/how-to-take-keyboard-input-in-javascript
window.addEventListener('keydown', (event) => {
    // console.log(event);
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    
    switch (event.key) {
        case "1": 
            getNumbersDisplay(event.key);
            break;
        case "2": 
            getNumbersDisplay(event.key);
            break;
        case "3": 
            getNumbersDisplay(event.key);
            break;
        case "4": 
            getNumbersDisplay(event.key);
            break;
        case "5": 
            getNumbersDisplay(event.key);
            break;
        case "6": 
            getNumbersDisplay(event.key);
            break;
        case "7": 
            getNumbersDisplay(event.key);
            break;
        case "8": 
            getNumbersDisplay(event.key);
            break;
        case "9": 
            getNumbersDisplay(event.key);
            break;
        case "0": 
            getNumbersDisplay(event.key);
            break;
        case ".": 
            addDecimalPoint();
            break;
        case "+": 
            operateOnNums(event.key);
            break;
        case "-": 
            operateOnNums(event.key);
            break;
        case "*": 
            operateOnNums(event.key);
            break;
        case "/": 
            operateOnNums(event.key);
            break;
        case "Enter": 
            solveEquation();
            break;
        case "Backspace": 
            deleteLastInput();
            break;
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);
// the last option dispatched the event to listener first,
// then dispatches event to window


function btnPosNegPress() {
    let btnPosNeg = document.querySelector('#posNeg');

    btnPosNeg.addEventListener('click', () => {
        invertNum();
    })
}

function btnBackSpacePress() {
    const btnBackSpace = document.querySelector('#btnBackSpace');

    btnBackSpace.addEventListener('click', () => {
        deleteLastInput();
    })
}

function btnDecimalPress() {
    const btnDecimal = document.querySelector('#btnDecimal');

    btnDecimal.addEventListener('click', () => {
        addDecimalPoint();
    })
}

// Calculates then clears variabls for next equation
function btnEqualPress() {
    const btnEqual = document.querySelector('#btnEquals');

    btnEqual.addEventListener('click', () => {
        solveEquation()
    })
}

// RESET EVERYTHING
function btnClearPress() {
    const btnClear = document.querySelector('#btnClear');

    btnClear.addEventListener('click', () => {
        CALCULATED_NUMBER = 0;
        NUM_ARRAY_ONE = [];
        NUM_ARRAY_TWO = [];
        NUM_ONE = 0;
        NUM_TWO = 0;
        NUM_INDEX = 1;
        OPERATOR = "";
        STORED_NUMBER = 0;
        DECIMAL_USED = false;
        calcDisplayText.textContent = "0";
    });
}

// Event listener added to Operator buttons
function btnOperationsPress() {
    const btnArray = document.querySelectorAll('.btnOperation');

    btnArray.forEach((btn) => {
        btn.addEventListener('click', () => {
            operateOnNums(btn.value)
        })
    })
}

//Event listeners added to number buttons
function btnNumPress() {
    const btnArray = document.querySelectorAll('.btnNum');

    btnArray.forEach((btn) => {
        btn.addEventListener('click', () => {
            // alert(btn.value);
            // A check to make sure number doesn't get too large for display
            getNumbersDisplay(btn.value);
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
            if (numTwo == 0) { alert("You Cheeky Bastard! That's Infinity!"); break;}
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

function getNumbersDisplay(input) {
    if (NUM_INDEX == 1) {
        if (NUM_ARRAY_ONE.length >= 14) {
            alert("Came in here with that Big Rick Energy!")
        } else {
            // This is needed to prevent a leading 0 that is aquired during the 
            // BackSpace button
            if (NUM_ARRAY_ONE[0] == 0) {
                NUM_ARRAY_ONE.pop()
            }
            NUM_ARRAY_ONE.push(input);

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
            // This is needed to prevent a leading 0 that is aquired during the 
            // BackSpace button
            if (NUM_ARRAY_TWO[0] == 0) {
                NUM_ARRAY_TWO.pop()
            }
            NUM_ARRAY_TWO.push(input);

            let newCalcDisplayText = NUM_ARRAY_TWO.toString().replace(/,/g, ""); 
            calcDisplayText.textContent = newCalcDisplayText;
            
            NUM_TWO = Number(newCalcDisplayText);
        }
    }
}

function solveEquation() {
    let newCalcDisplayText = operate(OPERATOR, NUM_ONE, NUM_TWO);
    if (newCalcDisplayText % 1 != 0) {
        // Used a parseFloat here to get rid of trailing zeros
        calcDisplayText.textContent = parseFloat(newCalcDisplayText.toFixed(6));
    } else {
        calcDisplayText.textContent = newCalcDisplayText;
    }
    
    NUM_ONE = CALCULATED_NUMBER;
    CALCULATED_NUMBER = 0;
    // NUM_ARRAY_ONE = [];
    NUM_ARRAY_TWO = [];
    
    // NUM_TWO = 0;
    // NUM_INDEX = 1;
    // OPERATOR = "";
    // STORED_NUMBER = 0;
    DECIMAL_USED = false;
}

function deleteLastInput() {
    if (NUM_INDEX == 1) {
        if (NUM_ARRAY_ONE[NUM_ARRAY_ONE.length - 1] == ".") {
            DECIMAL_USED = false
        }
        NUM_ARRAY_ONE.pop();
        if (NUM_ARRAY_ONE.length == 0) {
            NUM_ARRAY_ONE[0] = 0;
        }
        // We make array a string, remove all , to make string display like a number
        let newCalcDisplayText = NUM_ARRAY_ONE.toString().replace(/,/g, "");
        calcDisplayText.textContent = newCalcDisplayText;
        NUM_ONE = Number(newCalcDisplayText);
    } else {
        if (NUM_ARRAY_TWO[NUM_ARRAY_TWO.length - 1] == ".") {
            DECIMAL_USED = false
        }
        NUM_ARRAY_TWO.pop();
        if (NUM_ARRAY_TWO.length == 0) {
            NUM_ARRAY_TWO[0] = 0;
        }
        // We make array a string, remove all , to make string display like a number
        let newCalcDisplayText = NUM_ARRAY_TWO.toString().replace(/,/g, "");
        calcDisplayText.textContent = newCalcDisplayText;
        NUM_TWO = Number(newCalcDisplayText);
    }
}

function addDecimalPoint() {
    if (DECIMAL_USED) {
        alert('You already have a decimal, this isn\'t an IP');
    } else {
        if (NUM_INDEX == 1) {
            NUM_ARRAY_ONE.push(btnDecimal.value)
            // We make array a string, remove all , to make string display like a number
            let newCalcDisplayText = NUM_ARRAY_ONE.toString().replace(/,/g, "");
            calcDisplayText.textContent = newCalcDisplayText;
            DECIMAL_USED = true;
        } else {
            NUM_ARRAY_TWO.push(btnDecimal.value)
            // We make array a string, remove all , to make string display like a number
            let newCalcDisplayText = NUM_ARRAY_TWO.toString().replace(/,/g, "");
            calcDisplayText.textContent = newCalcDisplayText;
            DECIMAL_USED = true;
        }
    }
}

function operateOnNums(operator) {
    if (NUM_INDEX == 1) {
        NUM_INDEX = 2;
    } else if (NUM_INDEX == 2) {
        STORED_NUMBER = operate(OPERATOR, NUM_ONE, NUM_TWO);
        newCalcDisplayText = STORED_NUMBER.toString();
        calcDisplayText.textContent = newCalcDisplayText;
        // Need to reset numArrays to prevent old data corruption
        // THESE NEED TO BE MOVED OR GATED THEY ARE RESETTING EACH CLICK
        NUM_ARRAY_ONE = [];
        NUM_ARRAY_TWO = [];
    }
    OPERATOR = operator;
    calcDisplayText.textContent = "0";
    DECIMAL_USED = false;
    // alert(OPERATOR);
}

function invertNum() {
    if (NUM_INDEX == 1) {
        let inverse = NUM_ONE * -1;
        newCalcDisplayText = inverse.toString();
        calcDisplayText.textContent = newCalcDisplayText;
        NUM_ONE = inverse;
    } else if (NUM_INDEX == 2) {
        let inverse = NUM_TWO * -1;
        newCalcDisplayText = inverse.toString();
        calcDisplayText.textContent = newCalcDisplayText;
        NUM_TWO = inverse;
    }
}