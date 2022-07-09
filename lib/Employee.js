const inquirer = require("inquirer");

const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Option = require("../lib/Option");

const choicesArr = ["Add an Engineer Profile", "Add an Intern Profile", "Finish"];

function Employee(details, manager) {
  this.card = [];
  this.details = details;
  this.manager = manager;
  this.info = [new Engineer(), new Intern(), new Manager()];
}

// function EmployeeCard() {
//   this.card = [];
// }

Employee.prototype.initializeApp = function () {
      this.getManager()
};

Employee.prototype.getManager = function () {
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
      // this.managerial.push(this.manager);
      // test the object creation
      // console.log(this.manager);
      // console.log(this.managerial);
      this.getOption();
    });
};


Employee.prototype.getOption = function () {
  inquirer
  .prompt([
    {
      type: "checkbox",
      name: "choice",
      message: "What would you like to do next?",
      choices: ["Add an Engineer Profile", "Add an Intern Profile", "Finish"],
    },
  ])
  // destructure name from the prompt object
  .then(({ choice }) => {
    this.option = new Option(choice);

    // test the object creation
    // console.log(this.option);
    this.choicePath();
  });
};

Employee.prototype.choicePath = function () {
  if (this.option.choice == choicesArr[0]) {
    // console.log('lessgooo');
    this.getEngineer();
    
  } 
  if (this.option.choice == choicesArr[1]) {
    this.getIntern();
    // console.log('lessgooo2');
  }
  // else {
  //   this.compileAll();
  // }

};

Employee.prototype.getEngineer = function () {
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
      // console.log(this.engineer);
      // console.log('lesgo3');
      this.compileEnginfo();

    });
};

Employee.prototype.getIntern = function () {
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
      // console.log(this.intern);
      // console.log('lesgo4');
    });
};

Employee.prototype.compileEnginfo = function () {
  
    this.employee = new Employee(this.engineer, this.manager);
    // this.managerial.push(this.manager);
    // test the object creation
    // console.log(this.employee);
    let picked = (({ details, manager }) => ({ details, manager }))(this.employee);
    this.card.push(picked);
    console.log(this.card);
    // this.getOption();

};
































Employee.prototype.getName = function() {
  if (this.info[0].name.length) {
    return this.info[0].name;
  }
  if (this.info[1].name.length) {
    return this.info[1].name;
  }
  return false;
};

Employee.prototype.getId = function() {
  if (this.info[0].id) {
    return this.info[0].id;
  }
  if (this.info[1].id) {
    return this.info[1].id;
  }
  return false;
};

Employee.prototype.getEmail = function() {
  if (this.info[0].email.length) {
    return this.info[0].email;
  }
  if (this.info[1].email.length) {
    return this.info[1].email;
  }
  return false;
};


Employee.prototype.getRole = function() {
  return {
    role: "Employee",
  };
};

module.exports = Employee;
