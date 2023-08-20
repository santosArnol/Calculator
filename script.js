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

        if (currentNumberDisplay.innerText.length > 12) {return}
        
        //Filter problematic input values
        switch (buttonText){
            case '.':
               if (currentNumberDisplay.innerText.includes('.')) { return }
               if (currentNumberDisplay.innerText == ''){
                this.currentNumberDisplay.innerText = '0';                
               }
               break;
            case '0':
                if (currentNumberDisplay.innerText == '0') { return }
                break;
            default:
                if (currentNumberDisplay.innerText == '0'){             
                    this.currentNumberDisplay.innerText = buttonText;
                    return
                }
            }

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


        if (currentNumberDisplay.innerText == ""){
            if (previousNumberDisplay.innerText == ""){
                return
            }
            previousNumberDisplay.innerText = previousNumberDisplay.innerText.slice(0,-2) + " " +operatorText;
            return};

        if (previousNumberDisplay.innerText != ""){
            this.operate()
            return;
        }

        previousNumberDisplay.innerText = this.currentNumberDisplay.innerText + " " +operatorText;
        currentNumberDisplay.innerText = "";
    }

    operate(){

        if (currentNumberDisplay.innerText == ""){
            return
        }

        this.currentNumtoFloat = parseFloat(currentNumberDisplay.innerText);
        this.prevNumtoFloat = parseFloat(previousNumberDisplay.innerText);
        
        switch(this.operator){
            case "+":
                currentNumberDisplay.innerText = (this.currentNumtoFloat + this.prevNumtoFloat);
                break;
            case "-":
                currentNumberDisplay.innerText = (this.prevNumtoFloat - this.currentNumtoFloat);
                break;
            case "*":
                currentNumberDisplay.innerText = (this.currentNumtoFloat * this.prevNumtoFloat);
                break;
            case "/":
                if (this.currentNumtoFloat == 0){
                    alert('NOPE');
                    return
                }
                currentNumberDisplay.innerText = (this.prevNumtoFloat / this.currentNumtoFloat);
                break;                
                                              
        }

        previousNumberDisplay.innerText = "";
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