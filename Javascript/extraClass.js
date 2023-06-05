

module.exports = class Student{

    constructor(newFN, newLN){
        this.newFN=newFN
        this.newLN=newLN
    }

    fname= "Saif"
    age= 25
    lname= "Ali"


    get gender(){
        return 'male'
    }

    fullName(){
        return this.newFN + this.newLN
    }
}


/*

let stud= new Student("Haider", " Ali")
let stud1= new Student("Osama", " Ali")

console.log(stud.age)
console.log(stud.gender)

console.log(stud.fullName())
console.log(stud1.fullName())

*/

