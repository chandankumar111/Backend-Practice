class PersonClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hello I'm ${this.name}`);
    }
}

let per1 = new PersonClass("Chandan",18);
let per2 = new PersonClass("Chandani",18);