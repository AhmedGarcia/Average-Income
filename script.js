// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  
let addEmployees = true;
let employeesArray = [];
         
 while(addEmployees) {
    let firstName = window.prompt("Enter First Name:");
    let lastName = window.prompt("Enter Last Name:");
    let salary = parseFloat(window.prompt("Enter Salary:"));
  

  if (isNaN(salary)) {
      salary= 0;
      window.alert("Please enter a number.");
      continue;
    }
    
    let employee = {firstName: firstName, lastName: lastName, salary: salary };

  employeesArray.push(employee);

  addEmployees = window.confirm("Would you like to add another employee?");
   if (addEmployees) {
    continue;
   }
   else {
    return employeesArray;
   }
  };
};
  

  


// Display the average salary
const displayAverageSalary = function(employeesArray) {
   let totalSalary = 0;
   for (const employee of employeesArray) {
   totalSalary += employee.salary
  }

const averageSalary = totalSalary / employeesArray.length

console.log(`Out of ${employeesArray.length} employees the average salary is ${averageSalary}.`);
}


// Select a random employee
 const getRandomEmployee = function(employeesArray) {
  let randomEmployee = Math.floor((Math.random() * employeesArray.length));
  let currentEmployee = employeesArray [randomEmployee]
  
 console.log(`The random employee is ${currentEmployee.firstName}.`);
 }


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);