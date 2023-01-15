//Identify and export the employee class.
class Employee {
    constructor(role, name, id, email) {
        this.role = role
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }

    getRole() {
        return this.role;
    }


    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;