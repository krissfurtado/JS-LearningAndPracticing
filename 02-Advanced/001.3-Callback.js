//arrow functions to use 
const sumNumber = (n) => n+=n
const multNumber = (n) =>n*=n

//array to use
const arrayNumbers = [1,2,3,4,5]


function calc(values,func){
    for(let i=0; i<values.length; i++){
        values[i] = func(values[i])
    }
    return values
}

console.log("Using func mulNumber: ",calc(arrayNumbers, multNumber))
console.log("Using func sumNumber: ",calc(arrayNumbers, sumNumber))