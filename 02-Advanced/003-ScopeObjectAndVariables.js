function multiplyBy(n){
    n *= n
    return n
}

function multiplyObject(obj){
    obj.value *= obj.value
    return obj
}

console.log(`===========Test with  common variable===========`)

//before run function
let aNumber = 10
console.log(`aNumber: ${aNumber} (befor run function)`)

//running function
console.log(`The return of the function is: ${multiplyBy(aNumber)}`)

//see below that even after to use function multiply the value of the aNumber still the same at the beginning
console.log(`The currently (after run function) aNumber value is: ${aNumber}`)





console.log(`\n==============Test with  an object==============`)

//before run function
let anObject = {value: 10}
console.log(`anObject: ${JSON.stringify(anObject)} (befor run function)`)

//running function
console.log(`The return of the function is: ${JSON.stringify(multiplyObject(anObject))}`)

//see below that even after to use function multiply the value of the aNumber still the same at the beginning
console.log(`The currently (after run function) anObject value is: ${JSON.stringify(anObject)}`)
