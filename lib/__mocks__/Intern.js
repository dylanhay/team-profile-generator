
function Intern() {
  this.name = "wilfred";
  this.id = 501;
  this.email = "fredmail";
  this.school = "harvard";
}

Intern.prototype.getRole = function () {
  return {
    role: "Intern",
  };
};

Intern.prototype.getSchool = function () {
  return {
    school: this.school,
  };
};

module.exports = Intern;
