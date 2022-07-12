const inquirer = require("inquirer");

// const Run = require("./Run");
const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");

const choicesArr = [
  "Add an Engineer Profile",
  "Add an Intern Profile",
  "Finish",
];

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.isEngInt = false;
    this.employeeArr = [];
    this.manager;
  }

getName() {
  if (!this.isEngInt) {
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
      ])
      // destructure name from the prompt object
      .then(({ name }) => {
        this.name = name;
        this.isEngInt = true;
        this.getId();
        
      });
  }
  if (this.isEngInt) {
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "Please enter the employee name:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
                Please enter the employee name`);
              return false;
            }
          },
        },
      ])
      // destructure name from the prompt object
      .then(({ name }) => {
        this.name = name;
        this.getId();
      });
  }
};

getId() {
  
    inquirer
      .prompt([
        {
          type: "text",
          name: "id",
          message: "Please enter the employee's id:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
              Please enter the employee's id`);
              return false;
            }
          },
        },
      ])

      // destructure id from the prompt object
      .then(({ id }) => {
        this.id = id;
        this.getEmail();
      })
  
};

getEmail() {
  return (
    inquirer
      .prompt([
        {
          type: "text",
          name: "email",
          message: "Please enter the employee's email address:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`
              Please enter the employee's email address`);
              return false;
            }
          },
        },
      ])

      // destructure email from the prompt object
      .then(({ email }) => {
        this.email = email;
        this.manager = new Manager();
        this.manager.officeGrab();
        
        // this.employee = new Employee (this.name, this.id, this.email);
        // this.pushTest();
        // this.employee = new Manager(this.name, this.id, this.email);
      })
  );
};

getRole() {
  return {
    role: "Employee",
  };
};


// pushTest() {
//   this.employeeArr.push(this.employee);
//   this.getMessenger();
// }

// getMessenger() {

//   console.log(this.employeeArr);
// }

}

module.exports = Employee;
