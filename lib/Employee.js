const inquirer = require("inquirer");

const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Option = require("../lib/Option");

const choicesArr = [
  "Add an Engineer Profile",
  "Add an Intern Profile",
  "Finish",
];

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

Employee.prototype.getName = function () {
  return (
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "Please enter the team manager name:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
              Please enter the team manager name`);
              return false;
            }
          },
        },
      ])

      // destructure name from the prompt object
      .then(({ name }) => {
        this.name = name;
        this.getId();
      })
  );
};

Employee.prototype.getId = function () {
  return (
    inquirer
      .prompt([
        {
          type: "text",
          name: "id",
          message: "Please enter the team manager id:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
              Please enter the team manager id`);
              return false;
            }
          },
        },
      ])

      // destructure id from the prompt object
      .then(({ id }) => {
        this.id = id;
        this.getEmail();
      })
  );
};

Employee.prototype.getEmail = function () {
  return (
    inquirer
      .prompt([
        {
          type: "text",
          name: "email",
          message: "Please enter the team manager email:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
              Please enter the team manager email`);
              return false;
            }
          },
        },
      ])

      // destructure email from the prompt object
      .then(({ email }) => {
        this.email = email;
      })
  );
};

Employee.prototype.getRole = function () {
  return {
    role: "Employee",
  };
};

module.exports = Employee;
