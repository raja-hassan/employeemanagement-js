//  Event Handling in an Employee Management System
class EmployeeEvents {
    constructor() {
      this.employees = [];
    }
  
    addEmployee(employee) {
      this.employees.push(employee);
      this.emitEvent('employeeAdded', employee);
    }
  
    emitEvent(eventName, data) {
      console.log(`Event '${eventName}' emitted with data:`, data);
    }
  }
  
  module.exports = EmployeeEvents;
  