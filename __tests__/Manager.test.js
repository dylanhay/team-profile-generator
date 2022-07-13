const Manager = require('../lib/Manager.js');
const manager = new Manager('Bob Vance', 101, 'bob@vancerefrigeration.com', 210);

test('creates a manager object with expected parameters', () => {
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email.length).toBeGreaterThan(0);
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  test("checks manager's role", () => {
    const manager = new Manager();
  
    expect(manager.getRole()).toHaveProperty('role');
    expect(manager.getRole().role).toEqual('Manager');
  });
