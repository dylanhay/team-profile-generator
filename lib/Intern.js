//module export from Employee.js
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

getRole() {
  return {
    role: "Intern",
  };
};

};

module.exports = Intern;
