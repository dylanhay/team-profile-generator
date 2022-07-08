const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function Employee() {
  this.info = [new Engineer(), new Intern(), new Manager()];
}

Employee.prototype.getName = function() {
  if (this.info[0].name.length) {
    return this.info[0].name;
  }
  if (this.info[1].name.length) {
    return this.info[1].name;
  }
  return false;
};

Employee.prototype.getId = function() {
  if (this.info[0].id) {
    return this.info[0].id;
  }
  if (this.info[1].id) {
    return this.info[1].id;
  }
  return false;
};

Employee.prototype.getEmail = function() {
  if (this.info[0].email.length) {
    return this.info[0].email;
  }
  if (this.info[1].email.length) {
    return this.info[1].email;
  }
  return false;
};


Employee.prototype.getRole = function() {
  return {
    role: "Employee",
  };
};

module.exports = Employee;
