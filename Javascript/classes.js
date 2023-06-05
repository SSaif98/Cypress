//one way of exporting : 

module.exports = class newPerson{

    age=25
    fn='saif'
    ln='ali'

   constructor(firstName, lastName){
        //instance variable
        this.firstName=firstName
        this.lastName=lastName
   }

    //it is just a property
    //property getter
    get location(){
        return 'canada'
    }
    //method
    fullName(){
      return  this.firstName+this.lastName
    }
}

/*
let per= new newPerson('jon','sam')

console.log(per.age)
console.log(per.location)

console.log(per.firstName)

console.log(per.fullName())
*/