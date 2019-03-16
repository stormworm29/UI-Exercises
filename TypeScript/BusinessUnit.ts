export enum BusinessUnit {
    Dev = "Dev",
    QA = "QA",
    MS = "MS",
    IMS = "IMS"
}
export default class Person {
    name: string;
    bu: BusinessUnit;
    constructor(name, bu) {
        this.name = name;
        this.bu = bu;
    }
    greet() {
        console.log(`Hello ${this.name}. You have been assigned to ${this.bu}.`);
    }
}
