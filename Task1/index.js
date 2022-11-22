let express = require ('express')
let path = require ('path')

let app = express()
app.use(express.static(path.join(__dirname,"public")))

app.listen("3000", () => {
    console.log("connected to the server ...")
    console.log(path.join(__dirname,"public"))
})