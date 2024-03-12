function calculate(operator){
    let firstNumber = parseFloat(document.getElementById('input-first-number').value);
    let secondNumber = parseFloat(document.getElementById('input-second-number').value);
    let total = 0;

    if(operator === 'add')
        total = firstNumber + secondNumber;
    else if(operator === 'subtract')
        total = firstNumber - secondNumber;
    else if(operator === 'multiply')
        total = firstNumber * secondNumber;
    else if(operator === 'divide')
        total = firstNumber / secondNumber;
    else
        alert("SELECT OPERATOR");

    document.getElementById('input-total').value = total;
}

// function add(){
//     let firstNumber = parseFloat(document.getElementById('input-first-number').value);
//     let secondNumber = parseFloat(document.getElementById('input-second-number').value);

//     let total = firstNumber + secondNumber;

//     document.getElementById('input-total').value = total;
// }

// function subtract(){
//     let firstNumber = parseFloat(document.getElementById('input-first-number').value);
//     let secondNumber = parseFloat(document.getElementById('input-second-number').value);

//     let total = firstNumber - secondNumber;

//     document.getElementById('input-total').value = total;
// }

// function multiply(){
//     let firstNumber = parseFloat(document.getElementById('input-first-number').value);
//     let secondNumber = parseFloat(document.getElementById('input-second-number').value);

//     let total = firstNumber * secondNumber;

//     document.getElementById('input-total').value = total;
// }

// function divide(){
//     let firstNumber = parseFloat(document.getElementById('input-first-number').value);
//     let secondNumber = parseFloat(document.getElementById('input-second-number').value);

//     let total = firstNumber / secondNumber;

//     document.getElementById('input-total').value = total;
// }