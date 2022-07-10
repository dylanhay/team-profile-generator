const inquirer = require("inquirer");

const choicesArr = [
  "Add an Engineer Profile",
  "Add an Intern Profile",
  "Finish",
];

class Employee {
  constructor(name = '', id = '', email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.isEngInt = false;
  }
}

Employee.protoype.getName = function () {
  if (!this.isEngInt) {
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
        this.isEngInt = true;
        this.getId();
        
      });
  }
  if (this.isEngInt) {
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "Please enter the employee name:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
                Please enter the employee name`);
              return false;
            }
          },
        },
      ])
      // destructure name from the prompt object
      .then(({ name }) => {
        this.name = name;
        this.getId();
      });
  }
};

Employee.prototype.getId = function () {
  
    inquirer
      .prompt([
        {
          type: "text",
          name: "id",
          message: "Please enter the employee's id:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
              Please enter the employee's id`);
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
  
};

Employee.prototype.getEmail = function () {
  return (
    inquirer
      .prompt([
        {
          type: "text",
          name: "email",
          message: "Please enter the employee's email address:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
              Please enter the employee's email address`);
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
