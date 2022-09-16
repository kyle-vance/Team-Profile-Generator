const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNo) {
        super(name, id, email);
        this.officeNo = officeNo;
    }

    officeNumber() {
        return this.officeNo;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;