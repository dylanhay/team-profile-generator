const inquirer = require("inquirer");

function Manager(name, id, email, officeNumber) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
}

Manager.prototype.getRole = function () {
  return {
    role: "Manager",
  };
};

Manager.prototype.getManager = function () {
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
      {
        type: "text",
        name: "id",
        message: "Please enter the team manager employee id:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the team manager employee id`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: "Please enter the team manager email address:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the team manager email address`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "officeNumber",
        message: "Please enter the team manager office number:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the team manager office number`);
            return false;
          }
        },
      },
    ])
    // destructure name from the prompt object
    .then(({ name, id, email, officeNumber }) => {
      this.manager = new Manager(name, id, email, officeNumber);

      // test the object creation
      console.log(this.manager);
    });
};

module.exports = Manager;
