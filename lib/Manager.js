function Manager(name, id, email, officeNumber) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
};


Manager.prototype.getRole = function() {
  return {
    role: 'Manager',
  };
};

module.exports = Manager;
