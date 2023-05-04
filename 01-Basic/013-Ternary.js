//servide military: Must be male over 17 years old

ana = {gender: "F", age: 16}
jeny = {gender: "F", age: 20}
jhon = {gender: "M", age: 19}
paul = {gender: "M", age: 16}
theNull = {gender: "", age: ""}

// person = theNull
// person = jhon
// person = ana
// person = paul
person = jeny
/*
console.log(person.gender == "M" ? "You're man" : "You're a male")

console.log(person.age < 18 ? "you are under 18 years" : `Your age is ${person.age} and it is ok to service military`)

console.log(person.gender == "M" && person.age > 17 ? "despite being over 18 years of age you are a woman" : person.gender == "M" && person.age < 18 ?  "In addition to being under the age of 18, you are a woman" : "")
*/

//best answer
console.log(person.age < 18 || person.gender =="F" ? "you are not fit" : "You are fit")