const flag= true

if(!flag){ console.log("True")  }
else{ console.log("False") }

if(flag){ console.log("True") }
else{ console.log("False") }

/* infinite loop
while(flag){
    console.log("True") 
}
 */


//LOOPs 
/*
    while loop: if you have an assignment to evaluate to be TRUE or FAlSE then use while.
    for loop: if you want to run anything nth number of time use for loop
*/
let req=true
while(req){
    console.log(req)
    req=false
}

console.log("WHILE LOOP EXECUTION")
let i=0
while(i<10){
    i++
    console.log(i)
}

console.log("DO-WHILE LOOP EXECUTION")
let j =0
do{
    console.log(j)
    j++
}while(j<=10);

console.log("FOR LOOP EXECUTION")
for(let k =0 ; k<10 ; k++){
    console.log(k)
}

//from 1 to 10 give me common multiple values of 2 and 5
console.log('New Task# 1')

for(let m=1 ;m<=10 ; m++){
    if(m%2 == 0 && m%5 == 0){
        console.log(m)
    }
}

console.log('New Task# 2')

for(let m=1 ;m<=100 ; m++){
    if(m%2 == 0 || m%5 == 0){
        console.log(m)
    }
}

console.log('New Task# 3 - Give me 3 records only')
let c=0
for(let m=1 ;m<=100 ; m++){
    if(m%2 == 0 && m%5 == 0){
        console.log(m)
        c++
        if(c==3){
            break
        }
    }
    
}