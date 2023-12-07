// Using this in Object Methods
// use case 1: Creating modular and reusable code for managing employee data.
const Employee = require('./Employee');
const john = new Employee('John Doe', 'Software Engineer', 'Engineering');
console.log(john.getDetails());


// Using this in Event Handling
// use case 2: Managing events in an employee management system using the 'this' keyword.
const EmployeeEvents = require('./EmployeeEvents');
const employeeEvents = new EmployeeEvents();
employeeEvents.addEmployee(john);


// Using this in Asynchronous Operations
// use case 3: Handling asynchronous operations with the 'this' keyword.
const EmployeeAsync = require('./EmployeeAsync');
const alice = new EmployeeAsync('Alice Wonderland', 'Data Analyst', 'Analytics');
alice.getDetailsAsync(function (details) {
  console.log(details);
});


