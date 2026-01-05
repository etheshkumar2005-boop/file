let editRow = null;

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let year = document.getElementById("year").value;
    let department = document.getElementById("department").value;
    let section = document.getElementById("section").value;
    let grade = document.getElementById("grade").value;

    if (name === "" || roll === "" || year === "" || department === "" || section === "" || grade === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentTable");

    if (editRow === null) {
        let row = table.insertRow();

        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = roll;
        row.insertCell(2).innerText = year;
        row.insertCell(3).innerText = department;
        row.insertCell(4).innerText = section;
        row.insertCell(5).innerText = grade;

        let actions = row.insertCell(6);
        actions.innerHTML = `
            <button class="action-btn edit-btn" onclick="editStudent(this)">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteStudent(this)">Delete</button>
        `;
    } else {
        editRow.cells[0].innerText = name;
        editRow.cells[1].innerText = roll;
        editRow.cells[2].innerText = year;
        editRow.cells[3].innerText = department;
        editRow.cells[4].innerText = section;
        editRow.cells[5].innerText = grade;
        editRow = null;
    }

    clearForm();
}

function editStudent(btn) {
    editRow = btn.parentElement.parentElement;

    document.getElementById("name").value = editRow.cells[0].innerText;
    document.getElementById("roll").value = editRow.cells[1].innerText;
    document.getElementById("year").value = editRow.cells[2].innerText;
    document.getElementById("department").value = editRow.cells[3].innerText;
    document.getElementById("section").value = editRow.cells[4].innerText;
    document.getElementById("grade").value = editRow.cells[5].innerText;
}

function deleteStudent(btn) {
    if (confirm("Are you sure you want to delete this student?")) {
        let row = btn.parentElement.parentElement;
        row.remove();
    }
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("year").value = "";
    document.getElementById("department").value = "";
    document.getElementById("section").value = "";
    document.getElementById("grade").value = "";
}
