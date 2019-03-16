import Person, {BusinessUnit as BU} from "./BusinessUnit";
export class Manager extends Person {
    constructor(name, bu) {
        super(name,bu);
    }
    delegateWork() {
        console.log(`I am a manager and I delegate work`);
    }
}