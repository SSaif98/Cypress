function add(a,b){
   return a+b
    
}
console.log(add(1,2))

//anonymous functions

let sub2=function(c,d){ return c-d}

console.log(sub2(4,5))

let sub=(c,d)=> c-d
console.log(sub2(10,8))


//var  => global/functional
//let  => global /block
//const => 


let greet ="Evening"

if(true){
    let greet ="Afternoon"
}

function da(){
    let greet="Morning"
}

console.log(greet)