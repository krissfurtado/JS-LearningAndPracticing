function sumNnumbers(){
    let total = 0
    let numbers = ""
    for (const n of arguments){
        total += n
        numbers = numbers.substring(0,numbers.length)+`${n}, `
    }
    console.log(numbers)
    console.log(`The amount of the ${numbers}is ${total}`)
}

sumNnumbers(10,1,2,3,4,5)
