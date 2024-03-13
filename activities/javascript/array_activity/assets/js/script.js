let employeeList = [];

document.getElementById('btn-login').addEventListener('click', function(){
    
    let employeeId = document.getElementById('input-employee-id').value;
    let employeeName = document.getElementById('input-employee-name').value;
    let workingHours = document.getElementById('input-working-hours').value;
    let total = 0;

    employeeList.push( [employeeId, employeeName, workingHours] );
    DisplayRow();
});

function Remove(index){
    employeeList.splice(index, 1);
    DisplayRow()
}

function DisplayRow(){
    let tblDataHTML = "";
    let total = 0;

    for(let rowCount = 0; rowCount < employeeList.length; rowCount++){
        tblDataHTML += "<tr class='text-center'>";
        tblDataHTML += "<td class='p-2'>" + employeeList[rowCount][0] + "</td>"; 
        tblDataHTML += "<td>" + employeeList[rowCount][1] + "</td>"; 
        tblDataHTML += "<td>" + employeeList[rowCount][2] + "</td>"; 
        tblDataHTML += "<td><button class='btn btn-danger btn-sm' onclick='Remove(" + rowCount + ")'> Remove </button></td>"; 
        tblDataHTML += "</tr>";

        total = total + parseFloat(employeeList[rowCount][2]);
    }
   
    document.getElementById('tbl-body').innerHTML = tblDataHTML;
    document.getElementById('total-hrs').innerText = total;
}