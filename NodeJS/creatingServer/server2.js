let httpp = require("http")

let server = http.createServer((req,res)=>{
    if(req.url == "/")
    {
        res.end("<h1>This is HomePage")
    }
    else if(req.url == "/school")
    {
        res.end("<h1>School of Engineering</h1>")
    }
    else
    {
        res.writeHead("400")
        res.write("<h1>404:Page not found</h1>")
        res.end()
    }

})

server.listen("3000", () =>{
    console.log("Server is listening to the localHost 3000")
})