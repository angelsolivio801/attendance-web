// Array to hold the attendance records (temporarily)
let attendanceRecords = [];

function logAttendance(action) {
    const nameInput = document.getElementById('employeeName');
    const employeeName = nameInput.value.trim();

    if (employeeName === "") {
        alert("Please enter your name to log attendance.");
        return;
    }

    const timestamp = new Date();
    const formattedTime = timestamp.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    
    // Create the new record object
    const newRecord = {
        time: formattedTime,
        name: employeeName,
        action: action
    };

    // 1. Add record to the local array
    attendanceRecords.push(newRecord);
    
    // 2. Log to the browser console (mimics sending to a server/database)
    console.log(`ATTENDANCE LOG: ${employeeName} - ${action} at ${formattedTime}`);
    
    // 3. Update the displayed table on the website
    updateAttendanceTable(newRecord);
    
    // Optional: Clear the input after logging
    // nameInput.value = '';
    alert(`${employeeName} - ${action} successfully logged!`);
}


function updateAttendanceTable(record) {
    const tableBody = document.querySelector('#attendanceTable tbody');
    
    // Create a new row
    const newRow = tableBody.insertRow(0); // Insert at the top
    
    // Create cells for Time, Name, and Action
    const timeCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);
    
    // Populate the cells
    timeCell.textContent = record.time;
    nameCell.textContent = record.name;
    actionCell.textContent = record.action;

    // Optional: Add color coding to the action cell
    if (record.action === 'Clock In') {
        actionCell.style.color = 'var(--success-color)';
        actionCell.style.fontWeight = '700';
    } else if (record.action === 'Clock Out') {
        actionCell.style.color = 'var(--danger-color)';
        actionCell.style.fontWeight = '700';
    }
}