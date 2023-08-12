const screen = document.querySelector('#screen');
const buttonsNum = document.querySelectorAll('.number');
const buttonsOperand = document.querySelectorAll('.operand');
const backspace = document.querySelector('#button-backspace');
const screenContent = document.querySelector('#screen-content');
const clear = document.querySelector('#button-clear');
const equals = document.querySelector('#button-operate');

let history;
let nextOperation;

equals.addEventListener('click', operate);

clear.addEventListener('click', clearScreen);

backspace.addEventListener('click', event => {
    screenContent.innerText = screenContent.innerText.slice(0, -1);
    screen.append(screenContent);
})




function clearScreen(){
    screenContent.innerText = '';
    screen.append(screenContent);
}

function add(lastEntered, currentEntered){
    return parseFloat((lastEntered + currentEntered).toFixed(8));
}

function subtract(lastEntered, currentEntered){
    return parseFloat((lastEntered - currentEntered).toFixed(8));
}

function multiply(lastEntered, currentEntered){
    return parseFloat((lastEntered * currentEntered).toFixed(8));
}

function divide(lastEntered, currentEntered){
    return parseFloat((lastEntered / currentEntered).toFixed(8));
}

function operate(){
    console.log(`history: ${history} | nextOp: ${nextOperation}`);
    switch (nextOperation){
        case '+':
            screenContent.innerText = add(history, parseFloat(screenContent.innerText));
            screen.append(screenContent);
            break;
        case '-':
            screenContent.innerText = subtract(history, parseFloat(screenContent.innerText));
            screen.append(screenContent);
            break;
        case 'x':
            screenContent.innerText = multiply(history, parseFloat(screenContent.innerText));
            screen.append(screenContent);
            break;
        case '/':
            screenContent.innerText = divide(history, parseFloat(screenContent.innerText));
            screen.append(screenContent);
            break;
    }
}

function listenForNumbers(){
    for (let num of buttonsNum){
        num.addEventListener('click', event => {
            screenContent.innerText += num.innerText;
            screen.append(screenContent);
        });
    }
}

function listenForOperands(){
    
    for (let op of buttonsOperand){
        op.addEventListener('click', event => {
            history = parseFloat(screenContent.innerText);
            nextOperation = op.innerText;
            clearScreen();
            console.log(`history: ${history} | nextOp: ${nextOperation}`);
        })
    }
}

listenForNumbers();
listenForOperands();