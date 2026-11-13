//html response from http server

const http = require("http");
const myServer = http.createServer((req, resp)=>{

    const student = {
        id:101,
        name:"Ayush",
        branch : "AI & DS",
        city:"Amravati"
    }

resp.writeHead(200, {'Content-Type' : 'application/json'})

resp.write(JSON.stringify(student))

resp.end()
})

myServer.listen(5000, ()=>{
    console.log("server started - http://localhost:5000");
})
