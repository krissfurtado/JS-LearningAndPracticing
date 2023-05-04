var i=1
var text1 = ""

while (i < 11){
 //   console.log(text1)
    text1 = text1.substring(0,text1.length)+`<p>Hi ${i}</p>`
    i++
    document.getElementById("message").innerHTML = text1
    console.log(`i= ${i} and text ${text1}`)
}