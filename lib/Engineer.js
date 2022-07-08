function Engineer(name, id, email, github) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;
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
