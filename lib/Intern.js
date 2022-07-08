function Intern(name, id, email, school) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
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
