const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function Employee() {
    this.info = [new Engineer(), new Intern(), new Manager()];
  }
  
  module.exports = Employee;