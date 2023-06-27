"use strict";
class Employee {
    //if i write id like this _id or #id then this variable is treated as private and should not be accessed directly from outside the class. The use of private keyword is not mandatory, but it helps in understanding the intent of the variables. ('only for knowledge purpose')
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name} and my employee ID is ${this.id}.`);
    }
}
class Manager extends Employee {
    constructor(name, id, department) {
        super(name, id);
        this.department = department;
    }
    introduce() {
        console.log(`Hello, I'm ${this.name}, a manager in the ${this.department} .`);
    }
    delegateTask() {
        console.log(`As a manager, I delegate tasks and ensure smooth operations.`);
    }
}
// Create instances and invoke methods
const employee = new Employee("PC", 30);
employee.introduce(); // Output: Hello, my name is PC and my employee ID is 30.
const manager = new Manager("ajinkya", 456, "Development");
manager.introduce(); // Output: Hello, I'm ajinkya, a manager in the Development .
manager.delegateTask(); // Output: As a manager, I delegate tasks and ensure smooth operations.
