//var can be used of global way
//let is used a restrict way

let usingLet = 1;
var usingVar = 7;

//when let and var is daclaretated a global way see below that both works well inside another scope
{
    console.log(`Using LET: ${usingLet}\nUsing VAR: ${usingVar}`)
}

//now see below when the variables are daclaretated inside a scope, only VAR works outside scope
{
    let usigLetInside = 77
    var usingVarinside = 9
}

console.log(usingVarinside)
console.log(usingLetInside) //open the page and check the error message that appears in the console

//*Regarding scope, const has a similar behavior to let
