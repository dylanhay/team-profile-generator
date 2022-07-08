
  function Engineer() {
    this.name = 'jim';
    this.id = 601;
    this.email = 'jimmail';
    this.github = 'hubby';
  }
  
  Engineer.prototype.getRole = function () {
    return {
      role: "Engineer",
    };
  };
  
  Engineer.prototype.getGithub = function () {
    return {
      github: this.github,
    };
  };
  
  module.exports = Engineer;
