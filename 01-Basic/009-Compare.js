console.log(`== - equal\n!= - different\n< - smaller\n<= - smaller equal\n> - bigger\n>= - bigger equal\nthe comparison will always return true or false`)

console.log(`1>2: ${1>2} \n1==1: ${1==1} \nA<B: ${"A"<"B"} (because A comes before B) \nA!=1: ${"A!"==1} \n"1"==1: ${"1"==1} (The value is the same) \n1==true: ${1==true} \nnull==undefined: ${null==undefined}`)

console.log(`------------------------------------------ \nto compare type and value at the same time we need to use strict comparison`)
console.log(`"1"===1: ${"1"===1} \n1===true: ${1===true} \nnull===undefined: ${null===undefined} \nThe type is different in all comparisons above`)