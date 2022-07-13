//module export from Engineer.js
const Engineer = require("../lib/Engineer.js");
const engineer = new Engineer(
  "Bob Vance",
  101,
  "bob@vancerefrigeration.com",
  "fridgeman"
);

test("creates an engineer object with expected parameters", () => {
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.name.length).toBeGreaterThan(0);
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.email.length).toBeGreaterThan(0);
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.github.length).toBeGreaterThan(0);
});

test("checks engineer's role", () => {
  expect(engineer.getRole()).toHaveProperty("role");
  expect(engineer.getRole().role).toEqual("Engineer");
});
