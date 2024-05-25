// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// arr1.sayHello = ()=>{
//     console.log("Hello!");
// };

// arr2.sayHello = ()=>{
//     console.log("Hello");
// };

function PersonMaker(name,age){
    const person = {
        name : name,
        age : age,
        talk(){
            console.log(`Hello i'm ${this.name}`);
        },
    };
    return person;
}

let p1 = PersonMaker("Chandani",18);
let p2 = PersonMaker("Chandan",18);