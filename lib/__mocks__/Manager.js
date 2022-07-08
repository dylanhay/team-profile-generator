 function Manager() {
    this.name = 'bill';
    this.id = 101;
    this.email = 'billmail';
    this.officeNumber = 201;
  };

  Manager.prototype.getRole = function() {
    return {
      role: 'Manager',
    };
  };


module.exports = Manager;
