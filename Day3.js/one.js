let arr = [1,2,3,4,5,6]

let arr2 = arr.reduce((acc,curr)=>{
     acc.push(curr+2)

     return acc
},{})

console.log(arr2)
