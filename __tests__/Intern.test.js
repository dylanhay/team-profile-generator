const Intern = require('../lib/Intern.js');

jest.mock('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern();
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email.length).toBeGreaterThan(0);
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.school.length).toBeGreaterThan(0);
  });



  test("gets interns's role as an object", () => {
    const intern = new Intern();
  
    expect(intern.getRole()).toHaveProperty("role");
    expect(intern.getRole().role).toEqual('Intern');
  });
  
  test("gets intern's school as an object", () => {
    const intern = new Intern();
  
    expect(intern.getSchool()).toHaveProperty("school");
  });