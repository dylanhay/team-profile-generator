const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

jest.mock("../lib/Engineer");
jest.mock("../lib/Intern");
jest.mock("../lib/Manager");

console.log(new Engineer());
console.log(new Intern());
console.log(new Manager());

const Employee = require("../lib/Employee.js");

test("creates a new employee object", () => {
  const employee = new Employee();

  expect(employee.info).toEqual(expect.arrayContaining([expect.any(Object)]));
});


test("gets employee's name", () => {
  const employee = new Employee();

  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getName().length).toBeGreaterThan(0);
});

test("gets employee's id", () => {
  const employee = new Employee();

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
  const employee = new Employee();

  expect(employee.getEmail()).toEqual(expect.any(String));
  expect(employee.getEmail().length).toBeGreaterThan(0);
});


test("gets employee's role as an object", () => {
  const employee = new Employee();

  expect(employee.getRole()).toHaveProperty("role");
  expect(employee.getRole().role).toEqual("Employee");
});
