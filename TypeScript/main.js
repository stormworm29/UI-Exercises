"use strict";
exports.__esModule = true;
var BusinessUnit_1 = require("./BusinessUnit");
var BusinessUnit_2 = require("./BusinessUnit");
//Data Types
var name = "Hello";
var noOfEmployees = 200;
var isNicePlaceToWork = true;
var iCanBeAnything;
name = name.toUpperCase();
console.log(name);
//Pass the values
console.log("Hey there. I'm " + name + ".\n            We are a " + noOfEmployees + " employee organization");
//Object Declaration.
var myObj = {
    "name": "a"
};
//Array Declarations
var myArr = [1, 2, 3, 4];
var myArr1 = [12, 12, 12, 12];
var myHetroArray = [1, "12121"];
//Creates empty fields
var arr = new Array(4);
arr.push(4);
console.log(arr);
//Multiple Datatypes
var myBool;
myBool = "true";
myBool = true;
//Enum Declarations
// enum BusinessUnit {
//     Dev = "Dev",
//     QA = "QA",
//     MS = "MS",
//     IMS = "IMS"
// }
var myBU = BusinessUnit_1.BusinessUnit.QA;
console.log(myBU);
//Function Declarations
function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
function setAddress(Address) {
    return Address.line1 + " " + Address.line2 + " " + Address.zipCode;
}
var a = setAddress({
    "line1": "this is line 1",
    "line2": "this is line 2",
    "zipCode": 12121
});
console.log(a);
// class Person {
//     name: string;
//     bu: BU;
//     constructor(name, bu) {
//         this.name = name;
//         this.bu = bu;
//     }
//     greet() {
//         console.log(`Hello ${this.name}. You have been assigned to ${this.bu}.`);
//     }
// }
var person = new BusinessUnit_1["default"]("Person1", BusinessUnit_1.BusinessUnit.QA);
person.greet();
var manager = new BusinessUnit_2.Manager("Manager 1", BusinessUnit_1.BusinessUnit.QA);
manager.greet();
manager.delegateWork();
