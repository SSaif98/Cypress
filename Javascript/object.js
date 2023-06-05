const newPerson = require('./classes') 
const Student = require('./extraClass')


//object is a collection of properties

let person= {
    firstName : 'Saif',
    lastName : ' Ali',
    age: 25,
    fullName : function(){
       console.log(this.firstName + this.lastName)
    }
}

console.log(person.firstName + person.lastName)
console.log(person['lastName'])
person['firstName'] = 'Haider'
person.firstName='osama'
person['gender']='male'
person.height= 90

console.log(person.fullName())

delete person.gender

console.log(person)

//if property exist in object
console.log('gender' in person)
// print values in js object
for(let key in person){
    console.log(person[key])
}


let newPer= new newPerson('h', 'j')

console.log(newPer.fullName())

let newStud= new Student("Anwer", "Ali")

console.log(newStud.fullName())
