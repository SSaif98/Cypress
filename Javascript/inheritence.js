// Main pillar of OOP
// one class can inherit/acquire the properties, methods of another class
// This clas which inherits the properties of other class is known as subclass/drived/child
// The class whose properties are inherited is super class.

const Student = require("./extraClass");


class Pet extends Student{

    // if the parent class has a constructor then the child class should have a contructor

    get gender(){
        return "Bluecross"
    }

    constructor(newFN, newLN){
        //call parent class constructor
        super(newFN, newLN)

    }

}

let newPet =  new Pet("Sandy ", "Zoe")

console.log(newPet.fullName())
console.log(newPet.gender)