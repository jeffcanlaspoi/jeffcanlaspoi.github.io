// Add function
document.querySelector('#btnAdd').addEventListener('click', function(){
    let inputGrade = document.createElement("input");
    inputGrade.className = "form-control mb-2";
    inputGrade.type="number";
    inputGrade.placeholder="Enter Grade";

    let gradeField = document.querySelector('#input-grade-field');
    gradeField.append(inputGrade);
});

// Calculate function
document.querySelector('#btnCalculate').addEventListener('click', function(){
    average();
});

// Remove function
document.querySelector('#btnRemove').addEventListener('click', function(){
    document.querySelector("input:last-child").remove();
    average();
});

// Calculation
function average(){
    let inputs = document.querySelectorAll('input');
    let gradeResult = 0;

    if(inputs.length){
        for(let input of inputs){
            gradeResult += Number(input.value);
        }
    
        let average = gradeResult / inputs.length;
        document.querySelector("#grade-result").innerText = average;
    } else {
        document.querySelector("#grade-result").innerText = 0;
    }
    
}