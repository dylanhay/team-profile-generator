//packages for this application
const inquirer = require("inquirer");
// const fs = require('fs');

//link to generateReadMe function contained in file in source folder
// const generatePage = require('./src/webpage-template.js');




const promptManager = (managerData) => {
  console.log(`
    ==================================================================
    Follow the instructions to generate a webpage of employee info
    ==================================================================
    `);
  return inquirer.prompt([
    {
      type: "input",
      name: "manager-name",
      message: "What is the team manager's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "manager-id",
      message: "What is the team manager's employee id? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's employee id");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "manager-email",
      message: "What is the team manager's email? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "What is the team manager's office number? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's office number!");
          return false;
        }
      },
    },
]);
};


const promptEmployee = (employeeData) =>  {

  
    return inquirer.prompt([
    {
      type: "list",
      name: "employeeTitle",
      message: "Would you like to add info for an Engineer or Intern?",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "engineer-name",
      message: "What is the engineer's name? (Required)",
      when: (answers) => {
        if (answers.employeeTitle === "Engineer") {
          return true;
        }
      },
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's id? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's id");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's github username?",
      when: (answers) => {
        if (answers.employeeTitle === "Engineer") {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
      when: (answers) => {
        if (answers.employeeTitle === "Intern") {
          return true;
        }
      },
    },
]);

};


promptManager();
promptEmployee();




//prompt function call => page is generated and written

// .then(pageData => {
//   const pageREADME = generateReadMe(readmeData);
//   fs.writeFile('./README-new.md', pageREADME, err => {
//     if (err) throw new Error(err);

//     console.log('Page created! Check out README-new.md in this directory to see it!');

//   });
// });
