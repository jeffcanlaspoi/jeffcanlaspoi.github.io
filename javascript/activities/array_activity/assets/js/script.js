let employeeList = [];
let editFlag = false;
let existing = false;

document.getElementById('btn-log').addEventListener('click', function(){
    
    let employeeId = document.getElementById('input-employee-id').value;
    let employeeName = document.getElementById('input-employee-name').value;
    let workingHours = document.getElementById('input-working-hours').value;

    if(employeeId === "" || employeeName === "" || workingHours === ""){
        alert('Please input data on the fields.')
    } else {
        if(editFlag === true){
            for(let i = 0; i < employeeList.length; i++){
                if(employeeList[i][0] === employeeId){
                    employeeList[i][1] = employeeName;
                    employeeList[i][2] = workingHours;
                }
            }
        } else {
            if(!employeeList.length){
                employeeList.push( [employeeId, employeeName, workingHours] );
            } else {
                for(let i = 0; i < employeeList.length; i++){
                    if(employeeList[i][0] === employeeId){
                        existing = true;
                        alert('existing');
                    }
                }

                if(!existing){
                    employeeList.push( [employeeId, employeeName, workingHours] );
                }
            }
        }
        editFlag = false;
        existing = false;
    }
    DisplayRow();
    document.getElementById('input-employee-id').value = "";
    document.getElementById('input-employee-name').value = "";
    document.getElementById('input-working-hours').value = "";
    document.getElementById('btn-log').innerText = "Log Hours";
});

function edit(index){
    editFlag = true;
    document.getElementById('input-employee-id').value = employeeList[index][0];
    document.getElementById('input-employee-name').value = employeeList[index][1];
    document.getElementById('input-working-hours').value = employeeList[index][2];
    document.getElementById('btn-log').innerText = "Update";
}

function remove(index){
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
        tblDataHTML += "<td>"
        tblDataHTML += "<button class='btn btn-warning btn-sm me-2' onclick='edit(" + rowCount + ")'> Edit </button>"; 
        tblDataHTML += "<button class='btn btn-danger btn-sm ' onclick='remove(" + rowCount + ")'> Remove </button>"; 
        tblDataHTML += "</td>"; 
        tblDataHTML += "</tr>";

        total = total + parseFloat(employeeList[rowCount][2]);
    }
   
    document.getElementById('tbl-body').innerHTML = tblDataHTML;
    document.getElementById('total-hrs').innerText = total;
}