const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }
}

Engineer.prototype.getGithub = function () {
  return (
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
      })
  );
};

Engineer.prototype.getRole = function () {
  return {
    role: "Engineer",
  };
};

module.exports = Engineer;
