const inquirer = require("inquirer");
function Intern(name, id, email, school) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
}

Intern.prototype.getRole = function () {
  return {
    role: "Intern",
  };
};

Intern.prototype.getSchool = function () {
  return {
    school: this.school,
  };
};

Intern.prototype.getIntern = function () {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Please enter the intern's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the intern's name`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: "Please enter the intern's employee id:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the engineer intern's id`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: "Please enter the intern's email address:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`
            Please enter the intern's email address`);
            return false;
          }
        },
      },
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
    // destructure name from the prompt object
    .then(({ name, id, email, school }) => {
      this.intern = new Intern(name, id, email, school);

      // test the object creation
      console.log(this.intern);
    });
};

module.exports = Intern;
