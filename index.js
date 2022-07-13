const {
  createManagerBlock,
  createEngineerBlocks,
  createInternBlocks,
} = require("./src/block-template");
const createPage = require("./src/webpage-template.js");

//packages for this application
const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require("fs");

//module exports from 'Manager.js', 'Engineer.js', 'Intern.js'
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//inquirer prompts to gather manager, engineer and intern info
const promptInfo = () => {
  console.log(`
    =====================================================================
    Follow the instructions to generate a webpage of employee information
    =====================================================================
    `);
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
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
      name: "id",
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
      name: "email",
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
      name: "officeNumber",
      message: "What is the team manager's office number? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's office number");
          return false;
        }
      },
    },
    {
      type: "loop",
      name: "employees",
      message: "Would you like to add another employee?",
      questions: [
        {
          type: "list",
          name: "employeeTitle",
          message: "Would you like to add info for an Engineer or Intern?",
          choices: ["Engineer", "Intern"],
        },
        {
          type: "input",
          name: "name",
          message: "What is the employee's name? (Required)",
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
              console.log("Please enter the engineer's employee id");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the employee's email? (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the employee's email");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the employee's github username? (Required)",
          when: (answers) => {
            if (answers.employeeTitle === "Engineer") {
              return true;
            }
          },
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the employee's github username");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What is the employee's school? (Required)",
          when: (answers) => {
            if (answers.employeeTitle === "Intern") {
              return true;
            }
          },
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the employee's school");
              return false;
            }
          },
        },
      ],
    },
  ]);
};

//prompt function call => page is generated and written
promptInfo().then((pageData) => {
  //inquirer prompt responses sent to Manager constructor
  const manager = new Manager(
    pageData.name,
    pageData.id,
    pageData.email,
    pageData.officeNumber
  );
  
  const employees = pageData.employees;
  
  //engineer and intern arrays initialized
  const engineerArr = [];
  const internArr = [];

  //inquirer prompt responses sent to engineer and intern arrays
  for (let i = 0; i < employees.length; i++) {
    const e = employees[i];
    if (e.employeeTitle === "Engineer") {
      const engineer = new Engineer(e.name, e.id, e.email, e.github);
      engineerArr.push(engineer);
    } else if (e.employeeTitle === "Intern") {
      const intern = new Intern(e.name, e.id, e.email, e.school);
      internArr.push(intern);
    }
  }

  //html blocks rendered
  const managerBlockBuild = createManagerBlock(manager);
  const engineerBlocksBuild = createEngineerBlocks(engineerArr);
  const internBlocksBuild = createInternBlocks(internArr);
  
  //webpage html template created with html blocks as arguments
  const webpage = createPage(managerBlockBuild, engineerBlocksBuild, internBlocksBuild);

  //webpage written to index.html in 'dist/' directory
  fs.writeFile("./dist/index.html", webpage, (err) => {
    if (err) throw new Error(err);

    console.log(
      "Page created! Check out index.html in the 'dist/' directory to see it!"
    );
  });
});
