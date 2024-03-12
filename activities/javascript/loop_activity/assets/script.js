document.getElementById("btn-execute").addEventListener('click', function() {

    const numberOfRows = document.getElementById("input-number-rows").value;
    const numberOfColumns = document.getElementById("input-number-columns").value;
    let tblBodyHTML = "";

    for (let rowCount = 1; rowCount <= numberOfRows; rowCount++) {

        let tblRowHTML = "<tr>";

        for (let columnCount = 1; columnCount <= numberOfColumns; columnCount++) {
            tblRowHTML += "<td class='text-center'>" + rowCount * columnCount + "</td>";
        }

        tblRowHTML += "</tr>";
        tblBodyHTML += tblRowHTML;
    }
    
    document.getElementById("tbl-body").innerHTML = tblBodyHTML;
});