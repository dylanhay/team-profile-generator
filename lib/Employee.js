const inquirer = require("inquirer");

// const Run = require("./Run");
// const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");

const choicesArr = [
  "Add an Engineer Profile",
  "Add an Intern Profile",
  "Finish",
];

class Employee {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

getRole() {
  return {
    role: "Employee",
  };
};

};

module.exports = Employee;
