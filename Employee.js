// Object Initialization with Constructor Function
class Employee {
    constructor(name, position, department) {
      this.name = name;
      this.position = position;
      this.department = department;
    }
  
    getDetails() {
      return `${this.name} works as a ${this.position} in the ${this.department} department.`;
    }
  }
  
  module.exports = Employee;
  