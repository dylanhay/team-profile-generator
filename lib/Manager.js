const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }
}

Manager.prototype.getOffice = function () {
  return (
    inquirer
      .prompt([
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

      // destructure oficeNumber from the prompt object
      .then(({ officeNumber }) => {
        this.officeNumber = officeNumber;
      })
  );
};

Manager.prototype.getRole = function () {
  return {
    role: "Manager",
  };
};


module.exports = Manager;
