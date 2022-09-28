const Employee = require ('Employee')

class Engineer extends Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, github) {
  // to do, super 
    }
  
    getRole() {
        return "Employee"
    }
  }

  module.export = Employee;