//module export from Employee.js
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return {
      role: "Manager",
    };
  }

};

module.exports = Manager;
