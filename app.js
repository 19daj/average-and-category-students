var tableStudents;
var tableStudentsCategory;
var numberStudents = document.getElementById("quantity");
var numberStudentsValue;
var bttnOk = document.getElementById("ok");
var bttnAddingRow = document.getElementById("addingRow");
var bttnRestart = document.getElementById("clean");
var firstContentTable = document.getElementById("first-content");
var secondContentTable = document.getElementById("second-content");
var thirdContent = document.getElementById("third-content");
var bttnCalculate = document.getElementById("estimate");
var lengthTable;
var nameStudents = document.getElementsByName("nameStudents");
var arrNames = [];
var bornStudents = document.getElementsByName("bornStudents");
var arrBorn = [];
var note1 = document.getElementsByName("noteOne");
var arrNote1 = [];
var note2 = document.getElementsByName("noteTwo");
var arrNote2 = [];
var note3 = document.getElementsByName("noteThree");
var arrNote3 = [];
var additionNotes = [];
var add = 0;
var add2 = 0;
var average = [];
var averageNumber = [];
var categoryStudents = [];
var date = new Date();
//console.log(date);
var yearActual = date.getFullYear();
//console.log(yearActual);
var monthActual = date.getMonth() + 1;;
//console.log(monthActual);
var dayActual = date.getDate();
//console.log(dayActual);
var arrDateActual = [yearActual, monthActual, dayActual];
//console.log(arrDateActual);
var arrBorn2 = [];
var arrBorn3 = [];
var age = [];
var averageGeneral;
var content;

//EVENTS
numberStudents.addEventListener("change", function () {
    numberStudentsValue = numberStudents.value;
    //console.log(numberStudentsValue);
    for (var e = 0; e < numberStudentsValue.length; e++) {
        if (numberStudentsValue.charCodeAt(e) > 48 && numberStudentsValue.charCodeAt(e) < 58) {
            if (numberStudentsValue % 1 == 0) {
                bttnOk.disabled = false;
            }
        }
    }
});

bttnOk.addEventListener("click", function () {
    if (numberStudentsValue % 1 == 0) {
        creatingFirstTable(numberStudentsValue);
        numberStudents.setAttribute("disabled", "disabled");
        bttnOk.disabled = true;
        bttnCalculate.disabled = false;
        bttnAddingRow.disabled = false;
    }
});

bttnAddingRow.addEventListener("click", function () {
    addingRows();
});

bttnCalculate.addEventListener("click", function () {
    lengthTable = tableStudents.rows.length;
    bttnCalculate.disabled = true;
    bttnOk.disabled = true;
    bttnAddingRow.disabled = true;
    for (var l = 0; l < nameStudents.length; l++) {
        arrNames.push(nameStudents[l].value);
        nameStudents[l].disabled = true;
    }
    //console.log(nameStudents);
    //console.log(arrNames);
    for (var m = 0; m < bornStudents.length; m++) {
        arrBorn.push([bornStudents[m].value.split("-")]);
        bornStudents[m].disabled = true;
    }
    for (var g = 0; g < arrBorn.length; g++) {
        for (var f = 0; f < arrBorn[g][0].length; f++) {
            arrBorn2.push(parseFloat(arrBorn[g][0][f]));
        }
    }
    //console.log(arrBorn);
    //console.log(arrBorn2);
    born(arrBorn2);
    //console.log(arrBorn3);
    for (var b = 0; b < arrBorn3.length; b++) {
        age.push(Math.trunc((((yearActual * 365) + (30 * monthActual) + dayActual) - ((arrBorn3[b][0] * 365) + (30 * arrBorn3[b][1]) + arrBorn3[b][2])) / 365));
    }
    //console.log(age);
    for (var n = 0; n < note1.length; n++) {
        if (note1[n].value === "") {
            note1[n].value = 0;
        }
        arrNote1.push(parseFloat(note1[n].value));
        note1[n].disabled = true;
    }
    //console.log(arrNote1);
    for (var o = 0; o < note2.length; o++) {
        if (note2[o].value === "") {
            note2[o].value = 0;
        }
        arrNote2.push(parseFloat(note2[o].value));
        note2[o].disabled = true;
    }
    //console.log(arrNote2);
    for (var p = 0; p < note3.length; p++) {
        if (note3[p].value === "") {
            note3[p].value = 0;
        }
        arrNote3.push(parseFloat(note3[p].value));
        note3[p].disabled = true;
    }
    //console.log(arrNote3);
    addingNotes(arrNote1, arrNote2, arrNote3);
    averageStudent(additionNotes, average);
    averageStudentsGeneral(averageNumber);
    for (var q = 0; q < average.length; q++) {
        categoryStudents.push(category(average[q]));
    }
    //console.log(categoryStudents);
    if (!arrNames.includes("") && !age.includes(NaN) && !arrNote1.includes(NaN) && !arrNote2.includes(NaN) && !arrNote3.includes(NaN)) {
        creatingSecondTable(lengthTable - 1);
        averageCategoryGeneral();
    }
});

bttnRestart.addEventListener("click", function (e) {
    numberStudents.value = "";
    arrNames = [];
    arrBorn = [];
    arrBorn2 = [];
    arrBorn3 = [];
    age = [];
    arrNote1 = [];
    arrNote2 = [];
    arrNote3 = [];
    additionNotes = [];
    average = [];
    averageNumber = [];
    averageGeneral = 0;
    categoryStudents = [];
    numberStudents.disabled = false;
    bttnOk.disabled = true;
    bttnCalculate.disabled = true;
    firstContentTable.removeChild(tableStudents);
    secondContentTable.removeChild(tableStudentsCategory);
    thirdContent.removeChild(content);
});

//FUNCTIONS
function creatingFirstTable(num) {
    tableStudents = document.createElement("table");
    var tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "colorRow");
    var tableCell0 = document.createElement("td");
    var tableCell1 = document.createElement("td");
    var tableCell2 = document.createElement("td");
    var tableCell3 = document.createElement("td");
    var tableCell4 = document.createElement("td");
    var tableCell5 = document.createElement("td");
    tableCell0.innerHTML = "Número";
    tableCell0.setAttribute("class", "bold");
    tableCell1.innerHTML = "Nombre";
    tableCell1.setAttribute("class", "bold");
    tableCell2.innerHTML = "Fecha de nacimiento";
    tableCell2.setAttribute("class", "bold");
    tableCell3.innerHTML = "Nota 1";
    tableCell3.setAttribute("class", "bold");
    tableCell4.innerHTML = "Nota 2";
    tableCell4.setAttribute("class", "bold");
    tableCell5.innerHTML = "Nota 3";
    tableCell5.setAttribute("class", "bold");
    tableStudents.appendChild(tableRow);
    tableRow.appendChild(tableCell0);
    tableRow.appendChild(tableCell1);
    tableRow.appendChild(tableCell2);
    tableRow.appendChild(tableCell3);
    tableRow.appendChild(tableCell4);
    tableRow.appendChild(tableCell5);
    //console.log(tableStudents);
    firstContentTable.appendChild(tableStudents);
    var i = 0;
    while (i < num) {
        var row = tableStudents.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        cell0.innerHTML = i + 1;
        cell1.innerHTML = "<input type='text' name='nameStudents' size= '35'>";
        cell2.innerHTML = "<input type='date' name='bornStudents'>";
        cell3.innerHTML = "<input type='text' name='noteOne' size='5'>";
        cell4.innerHTML = "<input type='text' name='noteTwo' size='5'>";
        cell5.innerHTML = "<input type='text' name='noteThree' size='5'>";
        i++;
    }
}

function addingRows() {
    lengthTable = tableStudents.rows.length;
    row = tableStudents.insertRow();
    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);
    cell4 = row.insertCell(4);
    cell5 = row.insertCell(5);
    cell0.innerHTML = lengthTable;
    cell1.innerHTML = "<input type='text' name='nameStudents' size= '35'>";
    cell2.innerHTML = "<input type='date' name='bornStudents'>";
    cell3.innerHTML = "<input type='text' name='noteOne' size='5'>";
    cell4.innerHTML = "<input type='text' name='noteTwo' size='5'>";
    cell5.innerHTML = "<input type='text' name='noteThree' size='5'>";
    lengthTable++;
}

function creatingSecondTable(num) {
    tableStudentsCategory = document.createElement("table");
    tableStudentsCategory.setAttribute("id", "secondTable");
    tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "colorRow");
    tableCell0 = document.createElement("td");
    tableCell1 = document.createElement("td");
    tableCell2 = document.createElement("td");
    tableCell3 = document.createElement("td");
    tableCell4 = document.createElement("td");
    tableCell0.innerHTML = "Número";
    tableCell0.setAttribute("class", "bold");
    tableCell1.innerHTML = "Nombre";
    tableCell1.setAttribute("class", "bold");
    tableCell2.innerHTML = "Edad";
    tableCell2.setAttribute("class", "bold");
    tableCell3.innerHTML = "Nota Final";
    tableCell3.setAttribute("class", "bold");
    tableCell4.innerHTML = "Categoría";
    tableCell4.setAttribute("class", "bold");
    tableStudentsCategory.appendChild(tableRow);
    tableRow.appendChild(tableCell0);
    tableRow.appendChild(tableCell1);
    tableRow.appendChild(tableCell2);
    tableRow.appendChild(tableCell3);
    tableRow.appendChild(tableCell4);
    //console.log(tableStudentsCategory);
    secondContentTable.appendChild(tableStudentsCategory);
    var j = 0;
    while (j < num) {
        row = tableStudentsCategory.insertRow();
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell0.innerHTML = j + 1;
        cell1.innerHTML = arrNames[j];
        cell2.innerHTML = age[j];
        cell3.innerHTML = average[j];
        cell4.innerHTML = categoryStudents[j];
        if (cell4.innerHTML === "Pésimo") {
            cell4.style.backgroundColor = "#FE646E";
        } else if (cell4.innerHTML === "Malo") {
            cell4.style.backgroundColor = "#FE9564";
        } else if (cell4.innerHTML === "Mediocre") {
            cell4.style.backgroundColor = "#FECD64";
        } else if (cell4.innerHTML === "Bueno") {
            cell4.style.backgroundColor = "#9CFE64";
        } else if (cell4.innerHTML === "Excelente") {
            cell4.style.backgroundColor = "#64BFFE";
        } else if (cell4.innerHTML === "Ese promedio no se encuentra dentro de los rangos establecidos") {
            cell4.style.backgroundColor = "pink";
        }
        j++;
    }
}

function averageCategoryGeneral() {
    var categoryGeneral = category(averageGeneral);
    content = document.createElement("div");
    var highlight = document.createElement("p");
    highlight.setAttribute("class", "bold");
    highlight.innerHTML = "Promedio y categoría general";
    highlight.style.backgroundColor = "rgba(253, 247, 196, 0.863)";
    var paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "<strong>Número de alumnos:</strong> " + (lengthTable - 1);
    var paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "<strong>Nota promedio:</strong> " + averageGeneral;
    var paragraph3 = document.createElement("p");
    paragraph3.innerHTML = "<strong>Categoría del grupo:</strong> " + categoryGeneral;
    if (categoryGeneral === "Pésimo") {
        paragraph3.style.backgroundColor = "#FE646E";
    } else if (categoryGeneral === "Malo") {
        paragraph3.style.backgroundColor = "#FE9564";
    } else if (categoryGeneral === "Mediocre") {
        paragraph3.style.backgroundColor = "#FECD64";
    } else if (categoryGeneral === "Bueno") {
        paragraph3.style.backgroundColor = "#9CFE64";
    } else if (categoryGeneral === "Excelente") {
        paragraph3.style.backgroundColor = "#64BFFE";
    } else if (categoryGeneral === "Ese promedio no se encuentra dentro de los rangos establecidos") {
        paragraph3.style.backgroundColor = "pink";
    }
    content.appendChild(highlight);
    content.appendChild(paragraph1);
    content.appendChild(paragraph2);
    content.appendChild(paragraph3);
    thirdContent.appendChild(content);
    content.style.border = "1px solid black";
    content.style.width = "250px";
}

function category(averageStudent) {
    var categoryStudent;
    if (averageStudent >= 1 && averageStudent <= 25.9) {
        categoryStudent = "Pésimo";
    } else if (averageStudent >= 26 && averageStudent <= 50.9) {
        categoryStudent = "Malo";
    } else if (averageStudent >= 51 && averageStudent <= 70.9) {
        categoryStudent = "Mediocre";
    } else if (averageStudent >= 71 && averageStudent <= 90.9) {
        categoryStudent = "Bueno";
    } else if (averageStudent >= 91 && averageStudent <= 100) {
        categoryStudent = "Excelente";
    } else {
        categoryStudent = "Ese promedio no se encuentra dentro de los rangos establecidos";
    }
    return categoryStudent;
}

function born(arr) {
    var count = 1;
    var count2 = 2;
    for (var e = 0; e < arr.length; e += 3) {
        arrBorn3.push([arr[e], arr[count], arr[count2]]);
        count += 3;
        count2 += 3;
    }
    //console.log(arrBorn3);
}

function addingNotes(note1, note2, note3) {
    for (var q = 0; q < arrNote1.length; q++) {
        additionNotes.push([note1[q], note2[q], note3[q]]);
        //console.log(additionNotes);
    }
}

function averageStudent(arr, nameVariable) {
    for (var r = 0; r < arr.length; r++) {
        for (var s = 0; s < arr[r].length; s++) {
            add += arr[r][s];
        }
        nameVariable.push(((add * 100) / 300).toFixed(1));
        add = 0;
    }
    //console.log(nameVariable);
    for (var a = 0; a < nameVariable.length; a++) {
        averageNumber.push(parseFloat(nameVariable[a]));
    }
    //console.log(averageNumber);
}

function averageStudentsGeneral(arr) {
    for (var b = 0; b < arr.length; b++) {
        add2 += arr[b];
    }
    averageGeneral = ((add2 / (lengthTable - 1))).toFixed(1);
    add2 = 0;
    //console.log(averageGeneral);
}
