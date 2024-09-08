function operate(number1, number2, operator){
    let result = 0;
    switch (operator){

        case "+":
            result = add(number1,number2);
            result = result.toFixed(7);
            resultText.textContent = result;
            previousOperand.textContent = number1 + " " + operator + " " + number2 + " =";
        break;


        case "-":
            result = subtract(number1,number2);
            result = result.toFixed(7);
            resultText.textContent = result;
            previousOperand.textContent = number1 + " " + operator + " " + number2 + " =";
        break;


        case "*":
            result = multiply(number1,number2);
            result = result.toFixed(7);
            resultText.textContent = result;
            previousOperand.textContent = number1 + " " + operator + " " + number2 + " =";
        break;


        case "/":
            if (number2 == 0){
                previousOperand.textContent = number1 + " " + operator + " " + number2 + " =";
                resultText.textContent = "Nice try";
            }
            else{
                result = divide(number1, number2);
                result = result.toFixed(7);
                resultText.textContent = result;
                previousOperand.textContent = number1 + " " + operator + " " + number2 + " =";
            }

        break;
    }
}

function makeCalculation(){
    number2 = Number(resultText.textContent);
    operate(number1,number2,operator);
}

function addOperator(e){
    number1 = Number(resultText.textContent);
    resultText.textContent = 0;
    operator = e.target.value;
    previousOperand.textContent = number1 + " " + operator;
}

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1/number2;
}

function displayNumber(e){

    if(resultText.textContent.charAt(0) == "0"){
        resultText.textContent = e.target.value;
    }
    else{
        resultText.textContent += e.target.value;
    }
    
}

function clear(){
    number1 = 0;
    number2 = 0;
    operator = "";
    previousOperand.textContent = ""
    resultText.textContent = 0;
}

function removeDigit(){
    resultText.textContent = resultText.textContent.slice(0, -1);
}

function modifySymbol(){
    if (resultText.textContent.includes("-")){
        resultText.textContent = resultText.textContent.substring(1);
    }
    else{
        resultText.textContent = resultText.textContent.slice(0,0) + "-" + resultText.textContent.slice(0);
    }
}

function addDot(){
    if(!resultText.textContent.includes(".")){
        resultText.textContent = resultText.textContent + ".";
    }
}

function addPercentage(){
    resultText.textContent = Number(resultText.textContent) / 100;
}


const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".symbol");
const equals = document.querySelector("#equals");
const reset = document.querySelector("#clear");
const deleteDigit = document.querySelector("#deleteDigit");
const changeSymbol = document.querySelector("#changeSymbol");
const previousOperand = document.querySelector("#previousOperand");
const resultText = document.querySelector("#result");
const dot = document.querySelector("#dot");
const percentage = document.querySelector("#percentage");

numbers.forEach(number => {
    number.addEventListener("click", displayNumber);
});

operators.forEach(operator => {
    operator.addEventListener("click",addOperator);
});

equals.addEventListener("click", makeCalculation);
reset.addEventListener("click",clear);
deleteDigit.addEventListener("click",removeDigit);
changeSymbol.addEventListener("click",modifySymbol);
dot.addEventListener("click",addDot);
percentage.addEventListener("click",addPercentage);



let number1 = 0;
let number2 = 0;
let operator = "";
