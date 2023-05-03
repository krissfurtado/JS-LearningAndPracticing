/*
https://developer.mozila.org/en-US/docs/Glossary/Falsy
https://developer.mozilla.org/en-US/docs/Glossary/Truthy
*/
//falsy
console.log(`
    0: ${0 ? true : false}
    "": ${"" ? true : false}
    null: ${ null ? true : false}
    undefined: ${undefined ? true : false}
`)


//truthy
console.log(`
    1: ${ 1 ? true : false}
    "0": ${"0" ? true : false}
    "ABC": ${ "ABC" ? true : false}
`)
