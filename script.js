//File: script.js
//Gui Assignment: Creating A Multiplication Table
//Description: This file will take the input of the horizontal and vertical input values and create the table.  
//The file will also error guard the code and will prevent the user from inputting a value that is not a number and also
//limits the numbers the user is able to input to -50 to 50.  

//Zuriel Pagan, UMass Lowell Computer Science, zuriel_pagan@student.uml.edu
//Copywright (c) 2024 by Zuriel.  All rights reserved.  May be freely copied or excerpted for educational purposes with credit to the author.
//updated by ZP on May 31, 2024 at 4:26pm
//updated by ZP on June 2, 2024 at 9:30pm
//updated by ZP on june 3, 2024 at 5:06pm

document.getElementById('tableForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    generateTable();
});

function generateTable() 
{
    // This will clear the error message 
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '';

    // This will read the values that were inputted by the form
    const startH = document.getElementById('startH').value;
    const endH = document.getElementById('endH').value;
    const startV = document.getElementById('startV').value;
    const endV = document.getElementById('endV').value;

    // This will validate the text field
    if (isNaN(startH) || isNaN(endH) || isNaN(startV) || isNaN(endV)) 
    {
        errorDiv.textContent = 'Please Enter A Valid Number In The Text Field';
        return;
    }

    const startHNum = parseInt(startH);
    const endHNum = parseInt(endH);
    const startVNum = parseInt(startV);
    const endVNum = parseInt(endV);
//This will make sure the value of the numbers are between -50 and 50
    if (startHNum < -50 || startHNum > 50 || endHNum < -50 || endHNum > 50 ||
        startVNum < -50 || startVNum > 50 || endVNum < -50 || endVNum > 50) 
    {
        errorDiv.textContent = 'Please Enter A Values Between -50 And 50.';
        return;
    }
//This will make sure that the starting value is less than or equal to the ending number
    if (startHNum > endHNum || startVNum > endVNum) 
    {
        errorDiv.textContent = 'Start values must be less than or equal to end values.';
        return;
    }

    // This will clear the previous table that was made when a new one is made
    const table = document.getElementById('multiplicationTable');
    table.innerHTML = '';

    // This will generate the table header
    let headerRow = '<tr><th></th>';
    for (let h = startHNum; h <= endHNum; h++) 
    {
        headerRow += `<th>${h}</th>`;
    }
    headerRow += '</tr>';
    table.innerHTML += headerRow;

    // This will generate the table rows
    for (let v = startVNum; v <= endVNum; v++) 
    {
        let row = `<tr><th>${v}</th>`;
        for (let h = startHNum; h <= endHNum; h++) 
        {
            row += `<td>${v * h}</td>`;
        }
        row += '</tr>';
        table.innerHTML += row;
    }
}
