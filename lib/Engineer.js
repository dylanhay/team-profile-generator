const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }


getGithub() {

    inquirer
      .prompt([
        {
          type: "text",
          name: "github",
          message: "Please enter the engineer's Github username:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
            Please enter the engineer's Github username`);
              return false;
            }
          },
        },
      ])

      // destructure github from the prompt object
      .then(({ github }) => {
        this.github = github;
        return this.github;
      })
  
};

getRole() {
  return {
    role: "Engineer",
  };
};

}


module.exports = Engineer;
