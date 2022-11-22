// console.log("Hello")

//To create a folder
// let fs = require("fs")
// fs.mkdirSync("myFolder") 


// To create a file in a folder, and the Hello will be written
// And if the data is already in the file, and you write something else, then the previous data will be override with the newer data
// fs.writeFileSync("myFolder/abc.txt", "Hello")

//using append will do not overide the previous data, and will continue from the previous
//fs.appendFileSync("myFolder", "how are you")

// let fileData = fs.readFileSync("FileName")
// console.log(fileData.toString())

// let fileData = fs.readFileSync("FileName", "UTF-8")
// console.log(fileData)

// fs.writeFile()


// *** in async function, even if the code running successfully or having an error the function will pass to the callback function. ***


//PATH MODULE

// let path = require("path")
// console.log(path.parse("A:/1_BML/KETAN THAKUR.Docx"))

// let path_ob = path.parse("A:/1_BML/KETAN THAKUR.Docx")

// console.log(path_ob.dir)
// console.log(path_ob.ext)

// console.log(path.extname("A:/1_BML/KETAN THAKUR.Docx"))

//OS MODULE

let os = require ("os")

console.log(os.arch())
console.log(os.platform())
console.log(os.homedir())
console.log(os.type())
console.log(os.version())
console.log(os.tmpdir())
console.log(os.freemem()/1024/1024/1024+ "GB")
console.log(os.totalmem()/1024/1024/1024+ "GB")
console.log(os.endianness())
