const Employee = require("../lib/Employee.js");
const employee = new Employee("Bob Vance", 101, "bob@vancerefrigeration.com");

test("creates a new employee object", () => {
  expect(employee).toEqual(expect.any(Object));
});

test("checks employee's name", () => {
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name.length).toBeGreaterThan(0);
});

test("checks employee's id", () => {
  expect(employee.id).toEqual(expect.any(Number));
});

test("checks employee's email", () => {
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.email.length).toBeGreaterThan(0);
});

test("checks employee's role", () => {
  expect(employee.getRole()).toHaveProperty("role");
  expect(employee.getRole().role).toEqual("Employee");
});
