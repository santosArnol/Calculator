class Calculator {
    constructor (previousNumberDisplay,currentNumberDisplay){
        this.previousNumberDisplay = previousNumberDisplay;
        this.currentNumberDisplay = currentNumberDisplay;
        this.clear()
    }

    clear(){
        previousNumberDisplay.innerText = "";
        currentNumberDisplay.innerText = "";
    }

    appendNumber(buttonText){
        console.log(buttonText);
        this.currentNumberDisplay.innerText += buttonText;
    }

    delete(){
        this.currentNumberDisplay.innerText = currentNumberDisplay.innerText.slice(0,-1);
    }

    updateDisplay(){
        previousNumberDisplay.innerText = this.previousNumberDisplay.innerText;
        currentNumberDisplay.innerText = this.currentNumberDisplay.innerText;
    }

    inputOperator(operatorText){
        this.operator = operatorText;
        previousNumberDisplay.innerText = this.currentNumberDisplay.innerText + " " +operatorText;
        currentNumberDisplay.innerText = "";
    }





}

const equalsButtton = document.querySelector('[data-equals]');
const clearButtton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const numbersList = document.querySelectorAll('[data-number]')
const operationsList = document.querySelectorAll('[data-operation]')
const previousNumberDisplay = document.querySelector('.previousNumber');
const currentNumberDisplay = document.querySelector('.currentNumber');


const calculator = new Calculator(previousNumberDisplay,currentNumberDisplay);


clearButtton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();        
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();        
});

equalsButtton.addEventListener('click', () => {
    calculator.operate();
    calculator.updateDisplay();        
});

numbersList.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();        
    })
});

operationsList.forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.inputOperator(operation.innerText);
        calculator.updateDisplay();        
    })
});