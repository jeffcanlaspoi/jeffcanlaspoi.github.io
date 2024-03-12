let btnExecute = document.getElementById("btn-execute");

btnExecute.addEventListener('click', function() {

    let numberOfRows = document.getElementById("input-number-rows").value;
    let numberOfColumns = document.getElementById("input-number-columns").value;
    let tblBodyHTML = "";
    let counter = 1;

    for (let rowCount = 1; rowCount <= numberOfRows; rowCount++) {

        let tblRowHTML = "<tr>";

        for (let columnCount = 1; columnCount <= numberOfColumns; columnCount++) {
            tblRowHTML += "<td class='text-center'>" + rowCount * columnCount + "</td>";
            counter++;
        }

        tblRowHTML += "</tr>";
        tblBodyHTML += tblRowHTML;
    }
    
    document.getElementById("tbl-body").innerHTML = tblBodyHTML;
});