
// willl show the error as the module is not the function 
// let module1 = require("./module1")
// console.log(module1.add(3,4))

// we need to dd thee function instead of the whole file
let add = require("./module1")
console.log(add(3,4))
console.log(sub(3,4))
