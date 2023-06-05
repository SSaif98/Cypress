let day ='tuesday '

let dayLength=day.length
console.log(dayLength)

let subDay=day.slice(0,3)
console.log(subDay)

console.log(day[2])


let subDay1=day.split('s')
console.log(subDay1[0])
console.log(subDay1[1].length)
console.log(subDay1[1].trim().length)

//trim => it trims white spaces

let date='21'
let nextDate = '27'
let diff= parseInt(nextDate-date)
console.log(diff)

console.log(diff.toString())

var newDay=day+"is funday."
console.log(newDay)
var count=0
var val=newDay.indexOf('day')

while(val!==-1){
    count++
   val= newDay.indexOf('day', val+1)
}
console.log(count)

