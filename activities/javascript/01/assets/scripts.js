document.getElementById('morning').addEventListener('click', function (){
    
    const name = document.getElementById('input-value').value;

    document.getElementById('greeting').innerText = "GOOD MORNING!"
    document.getElementById('name-output').innerText = name;

})

document.getElementById('afternoon').addEventListener('click', function (){
    
    const name = document.getElementById('input-value').value;

    document.getElementById('greeting').innerText = "GOOD AFTERNOON!"
    document.getElementById('name-output').innerText = name;

})

document.getElementById('evening').addEventListener('click', function (){
    
    const name = document.getElementById('input-value').value;

    document.getElementById('greeting').innerText = "GOOD EVENING!"
    document.getElementById('name-output').innerText = name;

})