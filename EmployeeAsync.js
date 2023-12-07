// Asynchronous Operation with this in a Callback
class EmployeeAsync {
    constructor(name, position, department) {
      this.name = name;
      this.position = position;
      this.department = department;
    }
  
    getDetailsAsync(callback) {
      setTimeout(() => {
        callback(`${this.name} works as a ${this.position} in the ${this.department} department.`);
      }, 1000);
    }
  }
  
  module.exports = EmployeeAsync;
  