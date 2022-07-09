const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }
}

Intern.prototype.getSchool = function () {
  return (
    inquirer
      .prompt([
        {
          type: "text",
          name: "school",
          message: "Please enter the intern's school:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
            Please enter the intern's school`);
              return false;
            }
          },
        },
      ])

      // destructure school from the prompt object
      .then(({ school }) => {
        this.school = school;
      })
  );
};


Intern.prototype.getRole = function () {
  return {
    role: "Intern",
  };
};


module.exports = Intern;
