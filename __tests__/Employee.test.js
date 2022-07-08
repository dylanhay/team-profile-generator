const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
    const employee = new Employee('dylan', 1200, 'email');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toBeGreaterThan(1000);
    expect(employee.email).toEqual(expect.any(String));
  });



 