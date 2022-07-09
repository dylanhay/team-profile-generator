const inquirer = require("inquirer");

function Option(choice) {
  this.choice = choice;
}

// Option.prototype.getOption = function () {
//   inquirer
//     .prompt([
//       {
//         type: "checkbox",
//         name: "choice",
//         message: "What would you like to do next?",
//         choices: ["Add an Engineer Profile", "Add an Intern Profile", "Finish"],
//       },
//     ])
//     // destructure name from the prompt object
//     .then(({ choice }) => {
//       this.Option = new Option(choice);

//       // test the object creation
//       console.log(this.choice);
//     });
// };

module.exports = Option;
