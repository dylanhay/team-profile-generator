const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer();
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email.length).toBeGreaterThan(0);
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.github.length).toBeGreaterThan(0);
  });