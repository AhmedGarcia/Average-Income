// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  
let addEmployees = true;
let employeesArray = [];
         
 while(addEmployees) {
  
  // if (prompt.!addEmployees) {
  // window.confirm("Thank You!")
  //  return;
  // }

    let firstName = window.prompt("Enter First Name:");
    // employeesArray.employee[0].firstNamedc
    let lastName = window.prompt("Enter Last Name:");
    let salary = parseInt(window.prompt("Enter Salary:"));

    if (isNaN(salary)) {
      window.alert("Please enter a number.");
      parseInt(window.prompt("Enter Salary:"));
    }
    // run.employeesArray.unshift(firstName, lastName, salary);
addEmployees = window.confirm("Would you like to add another employee?");
  //  if (addEmployees = true);
  }
  
  // let userInput = window.prompt("Enter first  name:")
  //  employeesArray.firstName++;
  //  userInput = window.prompt("Enter last name:")
  //  employeesArray.lastName++;
  //  userInput = window.prompt("Enter last salary:")
  //  employeesArray.salary++;


  // document.querySelector.#add-employees-btn++;
  // window.prompt("Enter secondemployee name:")
  // document.querySelector.#add-employees-btn++;
  // window.prompt("Enter third employee name:")
  // document.querySelector.#add-employees-btn++;

} 

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
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