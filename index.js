const addButton = document.querySelector(".add-btn");
const tableData = [];
function addRow(){
    var StudentTable = document.querySelector(".stud-table");
    var row = document.createElement("tr");
    var studentNameInput = document.createElement("input");
    studentNameInput.id = "name-id";
    studentNameInput.setAttribute("placeholder", "Click to enter Name");
    studentNameInput.setAttribute("required","");

    var idCell = row.insertCell(0);
    var studentNameCell = row.insertCell(1);
    studentNameCell.id = "name-cell-id";
    studentNameCell.appendChild(studentNameInput);

    var studentRollCell = row.insertCell(2);
    var studentRollInput = document.createElement("input");
    studentRollInput.setAttribute("placeholder", "Click to enter Roll No.");
    studentRollInput.setAttribute("required","");
    studentRollCell.appendChild(studentRollInput);

    var subjectCell = row.insertCell(3);
    var subjectCellInput = document.createElement("input");
    subjectCellInput.setAttribute("placeholder", "Click to enter Subject");
    subjectCellInput.setAttribute("required","");
    subjectCell.appendChild(subjectCellInput);

    var marksCell = row.insertCell(4);
    var marksCellInput = document.createElement("input");
    marksCellInput.setAttribute("placeholder", "Click to enter Marks");
    marksCellInput.setAttribute("type", "number");
    marksCellInput.setAttribute("required","");
    marksCell.appendChild(marksCellInput);

    var markedyByCell = row.insertCell(5);
    var markedyByCellInput = document.createElement("input");
    markedyByCellInput.setAttribute("placeholder", "Click to enter Email");
    markedyByCellInput.setAttribute("type", "email");
    markedyByCellInput.setAttribute("required","");
    markedyByCell.appendChild(markedyByCellInput);

    var saveCell = row.insertCell(6);
    var saveCellBtn  = document.createElement("button");
    saveCellBtn.getAttribute("type","submit");
    saveCellBtn.id = "details-save";
    saveCellBtn.innerHTML = "Save";
    saveCell.appendChild(saveCellBtn);

    idCell.textContent = tableData.length+1;

    StudentTable.appendChild(row);

    var saveBtn = document.getElementById("details-save");



saveBtn.addEventListener("click", function saveDataInTable(){
    if(studentNameInput.value=="" || studentRollInput.value=="" || subjectCellInput.value=="" || marksCellInput.value=="" || markedyByCellInput.value=="")
    {
        alert('Please fill out all the fields');
    }
    else if(markedyByCellInput.value.includes('@')==false){
        alert("Invalid email address");
    }
    else{
        var nameInputValue = studentNameInput.value;
    studentNameCell.innerHTML = nameInputValue;

    var studentRollValue = studentRollInput.value;
    studentRollCell.innerHTML = studentRollValue;

    var subjectValue = subjectCellInput.value;
    subjectCell.innerHTML = subjectValue;

    var marksValue = marksCellInput.value;
    marksCell.innerHTML = marksValue;

    var markedByValue = markedyByCellInput.value;
    markedyByCell.innerHTML = markedByValue;

    saveCell.removeChild(saveBtn);
    var savedSpan = document.createElement("span");
    savedSpan.innerHTML = "Saved";
    savedSpan.style.color = "green";
    saveCell.appendChild(savedSpan);
    var objStudent = {id: tableData.length+1, student_name:nameInputValue, student_roll:studentRollValue, subject:subjectValue, marks:marksValue, markedBy:markedByValue};
    tableData.push(objStudent);
    console.log(objStudent);
    console.log(tableData);

    }
    
});
}
addButton.addEventListener("click", addRow);

