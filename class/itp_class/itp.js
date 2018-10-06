class ITPer {
    
    constructor(name, role, classYear, skill, dev) {
        // name string
        // role string
        // year number
        // skill string
        // dev boolean
        this.name = name;
        this.role = role;
        this.classYear = classYear;
        this.skill = skill;
        this.dev = dev;
    }

    tellMeRole() {
        console.log("Role", this.role);
    }

    tellMeYourSkill() {
        console.log(`${this.name} is good at ${this.skill}`);
    }

    tellMeYourName() {
        console.log(`My name is ${this.name}`);
    }
}