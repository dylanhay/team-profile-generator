const inquirer = require("inquirer");
function Engineer(name, id, email, github) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;
}

Engineer.prototype.getRole = function () {
  return {
    role: "Engineer",
  };
};

Engineer.prototype.getGithub = function () {
  return {
    github: this.github,
  };
};


Engineer.prototype.getEngineer = function () {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Please enter the engineer's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the engineer's name`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: "Please enter the engineer's employee id:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the engineer's employee id`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: "Please enter the engineer's email address:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the engineer's email address`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "github",
        message: "Please enter the engineer's github username:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the engineer's github username`);
            return false;
          }
        },
      },
    ])
    // destructure name from the prompt object
    .then(({ name, id, email, github }) => {
      this.engineer = new Engineer(name, id, email, github);

      // test the object creation
      console.log(this.engineer);
    });
};

module.exports = Engineer;
