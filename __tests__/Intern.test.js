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


  // 'wilfred', 501, 'fredmail', 'harvard'