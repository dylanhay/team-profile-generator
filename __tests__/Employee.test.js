const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

jest.mock('../lib/Engineer');
jest.mock('../lib/Intern');
jest.mock('../lib/Manager');

console.log(new Engineer());
console.log(new Intern());
console.log(new Manager());

const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
    const employee = new Employee();
  
    expect(employee.info).toEqual(expect.arrayContaining([expect.any(Object)]));
  });



 