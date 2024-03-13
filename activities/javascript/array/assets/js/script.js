let employeeList = [];

document.getElementById('btn-login').addEventListener('click', function(){
    
    let employeeId = document.getElementById('input-employee-id').value;
    let employeeName = document.getElementById('input-employee-name').value;
    let workingHours = document.getElementById('input-working-hours').value;

    employeeList.push( [employeeId, employeeName, workingHours] );
    DisplayRow();
});

function Remove(index){
    employeeList.splice(index, 1);
    DisplayRow()
}

function DisplayRow(){
    let tblDataHTML = "";
    
    for(let rowCount = 0; rowCount < employeeList.length; rowCount++){
        tblDataHTML += "<tr class='text-center'>";
        tblDataHTML += "<td class='p-2'>" + employeeList[rowCount][0] + "</td>"; 
        tblDataHTML += "<td>" + employeeList[rowCount][1] + "</td>"; 
        tblDataHTML += "<td>" + employeeList[rowCount][2] + "</td>"; 
        tblDataHTML += "<td><button class='btn btn-danger btn-sm' onclick='Remove(" + rowCount + ")'> Remove </button></td>"; 
        tblDataHTML += "</tr>";
    }
   
    document.getElementById('tbl-body').innerHTML = tblDataHTML;
}