const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOffice() {
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
        return this.officeNumber;
      });
  }

  getRole() {
    return {
      role: "Manager",
    };
  }
}

module.exports = Manager;
