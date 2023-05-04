var people = [
    {name: "Paul", gender: "boy", age: 16}, 
    {name: "Ana", gender: "girl", age: 16},
    {name: "Jeny", gender: "girl", age: 18}
]
var final = ""
for (let i=0; i<people.length; i++){
    var nam = people[i].name
    var gend = people[i].gender
    var age = people[i].age
    final = final+"<b>Position "+i+":</b> <br>Name: "+nam+"<br>Gender: "+gend+"<br>Age: "+age+"<br>--------------<br>"
}

document.getElementById("message").innerHTML = final