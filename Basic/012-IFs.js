//Service military: Must be male over 17 years old

ana = {name: "Ana", gender: "F", age: 16} 
paul = {name: "Paul", gender: "M", age: 16}
jhon = {name: "Paul", gender: "M", age: 18}
theNull = {name: "", gender: "", age: ""}

// person = theNull
// person = jhon
person = ana
// person = paul

if (person.gender == "M" && person.age <18){
    console.log("despite being male you are under 18 years old")
} else if (person.gender == "F" && person.age > 18){
    console.log("despite being over 18 years of age you are a woman")
} else if (person.gender == "F" && person.age < 18) {
    console.log("You're a minor, anyway, you're a woman")
} else if (person.gender == "M" && person.age > 17) {
    console.log("you are fit")
} else {
    console.log("nothing to say")
} 