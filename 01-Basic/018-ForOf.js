var people = [
    {name: "Paul", gender: "boy", age: 16}, 
    {name: "Ana", gender: "girl", age: 16},
    {name: "Jeny", gender: "girl", age: 18}
]
var final = ""
var cont = 0
for (const person of people) {
    final = final+"<b>Position "+cont+":</b> <br>Name: "+person.name+"<br>Gender: "+person.gender+"<br>Age: "+person.age+"<br>--------------<br>"
    cont++
}
document.getElementById("message").innerHTML = final
console.log(final)