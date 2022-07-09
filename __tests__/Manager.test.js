const Manager = require('../lib/Manager.js');

// jest.mock('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager();
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email.length).toBeGreaterThan(0);
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  test("gets manager's role as an object", () => {
    const manager = new Manager();
  
    expect(manager.getRole()).toHaveProperty('role');
    expect(manager.getRole().role).toEqual('Manager');
  });
