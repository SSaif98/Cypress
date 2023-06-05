let array0 =Array(6)
let array1 = new Array(2,3,4,5,6,7)


var array2 = [1,2,3,4]

console.log(array2) //[1, 2, 3, 4]

for(var i =0 ; i<array2.length ; i++){
    console.log(array2[i])
}
console.log('Changed Array Value on index 2')
array2[2]= 70

console.log(array2)
console.log("Length: " +array1.length)


console.log('Add index and value in Array')
array2[4] = 100
console.log(array2)


console.log('Add index and value in Array using PUSH it will add at the end')
array2.push(101)
console.log(array2)

console.log('Add index and value in Array using PUSH it will add at the start')
array2.unshift(9)
console.log(array2)

console.log('POP value from array it will delete value from last')
array2.pop()
console.log(array2)

console.log('Find index of any element')
console.log(array2.indexOf(100))

console.log('Find if specific element present in array')
console.log(array2.includes(70))
console.log(array2.includes(90))

console.log('Create subarray#1 from main array')
subArray= array2.slice(2, 4)   // in this case we do not have to give 
console.log(subArray)

console.log('Create subarray#2 from main array')
var subArray2= array2.slice(2)
console.log(subArray2)

console.log('Create subarray#3 from main array')
var subArray3= array2.slice()
console.log(subArray3)


var array2 = [1,2,3,4]

console.log(array2) //[1, 2, 3, 4]

console.log("FOR Loop")

for(var i =0 ; i<array2.length ; i++){
    console.log(array2[i])

}
console.log("FOR Loop [Sum of array]")
var sum =0
for(var i =0 ; i<array2.length ; i++){
    console.log(array2[i])
    sum+= array2[i]
}
console.log(sum)
//reduce filter map
console.log("Reduce Method")

let total = array2.reduce((sum, totalSum)=> sum+totalSum, 0)
console.log(total)

//Even number
console.log("Even# Normal")
var score = [1,2,3,4,5,6,19]
var evenArray=[]
for(var i =0 ; i<score.length ; i++){
    if(score[i]%2 == 0){
        evenArray.push(score[i])
    }
}

console.log(evenArray)

console.log("Filter Method")
//in filter it will match condition  
let newScore= score.filter(score=>score%2 == 0)
console.log(newScore)


console.log("MAP Method")
//In map it will map a new code and sends
let mapArray = newScore.map(s=> s*3)
console.log(mapArray)

let sumMap= mapArray.reduce((sum,val)=>sum+val,0)
console.log(sumMap)

var score1 = [1,2,3,4,5,6,19]
console.log("Filter, Map, Reduce")
let all=score1.filter(score=> score%2==0).map(s=>s*3).reduce((actual,expect)=>actual+expect,0)
console.log(all)

//SORTING
// num and string sorting
var fruits= ["mango", "banana","apple"]
fruits.sort() //this sort method is used for string sorting
console.log(fruits)
fruits.reverse()
console.log(fruits)


let num= [99,28,98,78,09,89]
//console.log(num.sort()) //[ 28, 78, 89, 9, 98, 99 ] [incorrect]
//num.sort((a,b)=>a-b)  Bubble sort
console.log(num.sort((a,b)=>a-b)) //asc
console.log(num.sort((a,b)=>b-a)) //dec