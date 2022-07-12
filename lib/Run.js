const inquirer = require("inquirer");
// const Employee = require("./Employee");
const Manager = require("./Manager");
// const Employee = require("./Employee");


class Run {
    constructor() {
  this.manager;
  this.engineer;
  this.intern;
  }

  initializeManager() {
    this.manager = new Manager();
    this.manager.getName();
}


// officeGrab() {
//     this.manager.getOffice();
// }

}

module.exports = Run;