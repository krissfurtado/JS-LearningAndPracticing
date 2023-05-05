//Function standard structure
function mult(n){
    n *= n
    return n
}
console.log(mult(10))

//-------------------------------
//in a variable

const mult2 = function (n){
    n *= n
    return n
}
console.log(mult2(20))

//-------------------------------
//with arrow function

const multArrow = (n) => n *= n
console.log(multArrow(30))

//Ps.: If you use braces, the word "return" is mandatory
//using {}
const multArrowWithBraces = (n) => { return n*=n}
console.log(multArrowWithBraces(40))