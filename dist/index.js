"use strict";
// basic types
let id;
let company = "Ronny's comp";
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5, 6];
let arr = [1, true, 'string'];
// Tuple
let person = [1, 'Ronny', true];
// Tuple array 
let employee;
employee = [
    [1, 'ronny'],
    [2, 'jhon'],
    [3, 'brad'],
];
// Union 
let pid;
pid = 33;
pid = '33';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 23,
    name: 'ronny'
};
// Type Assertion 
let cid = 1;
// let customerID = <number>cid
let customerID = cid;
// Function 
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 23,
    name: 'ronny'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const ronny = new Person(1, 'Ronny');
const lia = new Person(2, 'lia');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Rosy', 'dog');
console.log(emp.name);
console.log(emp.register());
