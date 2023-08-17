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

    appendNumber(newNumber){
        if (currentNumberDisplay.innerText.length > 15) return;
        currentNumberDisplay.innerText += newNumber.target.innerText;
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

clearButtton.addEventListener('click',calculator.clear);

numbersList.forEach(number => {
    addEventListener('click',calculator.appendNumber)
});