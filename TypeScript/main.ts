import PersonClass, {BusinessUnit as BU} from "./BusinessUnit";
import {Manager} from "./Manager";

export {}
//Data Types
let name : string = "Hello";
let noOfEmployees : number = 200;
let isNicePlaceToWork : boolean = true;
let iCanBeAnything : any;
name = name.toUpperCase();
console.log(name);

//Pass the values
console.log(`Hey there. I'm ${name}.
            We are a ${noOfEmployees} employee organization`);

//Object Declaration.
let myObj : object = {
    "name" : "a"
}

//Array Declarations
let myArr : number[] = [1,2,3,4];
let myArr1 : Array<number> = [12, 12, 12, 12];
let myHetroArray : [number, string] = [1, "12121"];

//Creates empty fields
let arr : number[] = new Array(4);
arr.push(4);
console.log(arr);

//Multiple Datatypes
let myBool : boolean | string;
myBool = "true";
myBool = true;

//Enum Declarations
// enum BusinessUnit {
//     Dev = "Dev",
//     QA = "QA",
//     MS = "MS",
//     IMS = "IMS"
// }
let myBU : BU = BU.QA;
console.log(myBU);

//Function Declarations
function add(a: number,b: number) : number {
    return a+b;
}
console.log(add(2,4));

//Function Declaration with Variable Arguements
// function setAddress (line1: string, line2: string, ...restOfLines: string[]) :string {
//     console.log(restOfLines.join(" "));
//     return line1;
// }
// setAddress("A", "B", "C", "D", "E");

interface Address {
    line1: string,
    line2: string,
    zipCode: number
}
function setAddress(Address: Address) :string {
    return Address.line1 + " " + Address.line2 + " " + Address.zipCode;
}

let a = setAddress({
    "line1" : "this is line 1",
    "line2" : "this is line 2",
    "zipCode" : 12121
})

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
let person = new PersonClass("Person1", BU.QA);
person.greet();



var manager = new Manager("Manager 1", BU.QA);
manager.greet();
manager.delegateWork();