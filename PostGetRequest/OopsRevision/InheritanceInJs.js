class Mammal{
    constructor(name){
        this.name = name;
        this.type = "Wooden-Mammel";
    }
eat(){
    console.log("I'm Eatting...");
}
}

class dog extends Mammal {
    constructor(name){
        super(name);
    }
    bark(){
        console.log("Dog is Barking at night..");
    }
}

class lion extends Mammal {
    constructor(name){
        super(name);
    }
    roar(){
        console.log("Lion roars...");
    }
}