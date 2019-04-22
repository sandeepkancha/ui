// Submit Button
let count = 100;
$('#register').click(function() {

    let empName = $('#emp_name').val();
    let empAge = $('#emp_age').val();
    let designation = $('#emp_desg').val();
    let jobLocation = $('#job_location').val();

    // Create an Object with the form fields
    let employee = {
        empId : count,
        empName :empName,
        empAge : empAge,
        designation : designation,
        jobLocation : jobLocation
    };
    count++;
    //Display the object in a Table Row
    displayTableData(employee);

    // Clear the Form Fields
    clearFormFields();
});

// Display table Data
let displayTableData = (employee) => {
    let tableRow = `<tr>
                        <td>${employee.empId}</td>
                        <td>${employee.empName}</td>
                        <td>${employee.empAge}</td>
                        <td>${employee.designation}</td>
                        <td>${employee.jobLocation}</td>
                   </tr>`;
    $('#table_body').append(tableRow);
};

//clear the Form Data
let clearFormFields = () => {
    $('#emp_name').val('');
    $('#emp_age').val('');
    $('#emp_desg').val('');
    $('#job_location').val('');
};