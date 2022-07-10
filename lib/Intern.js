const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }


getSchool() {
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
        return this.school;
      })
};


getRole() {
  return {
    role: "Intern",
  };
};

}

module.exports = Intern;
