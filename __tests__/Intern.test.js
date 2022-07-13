const Intern = require("../lib/Intern.js");
const intern = new Intern(
  "Bob Vance",
  101,
  "bob@vancerefrigeration.com",
  "Scranton High"
);

test("creates an intern object with expected parameters", () => {
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.name.length).toBeGreaterThan(0);
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.email.length).toBeGreaterThan(0);
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.school.length).toBeGreaterThan(0);
});

test("checks intern's role", () => {
  const intern = new Intern();

  expect(intern.getRole()).toHaveProperty("role");
  expect(intern.getRole().role).toEqual("Intern");
});
