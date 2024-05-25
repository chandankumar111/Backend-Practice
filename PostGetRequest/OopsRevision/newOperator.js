function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hi i'm ${this.name}`);
};

let person1 = new Person("Chandan",18);
let person2 = new Person("Chandani", 18);