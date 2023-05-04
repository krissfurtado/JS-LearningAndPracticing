//USE for objects

var final = ""
var paul = {name: "Paul", gender: "boy", age: 16, address: "Street 7 house 4"}

for (const prop in paul) {
    final = final+prop+": "+paul[prop]+"<br>"
}
document.getElementById("message").innerHTML = final
console.log(final)