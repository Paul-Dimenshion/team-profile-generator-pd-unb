//Identify and export the engineering class.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super("Engineer", name, id, email);
        this.github = github;
        this.title = "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;