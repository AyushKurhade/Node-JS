const http = require("http");

const server = http.createServer((req,res) =>
{
    
// yaha se server tak bhejne ki liye hamne res i.e response ka use kiya ab tak 

    res.write("hello server is created");
    console.log("server created :)");
    res.end();
})

const port = 3000;
server.listen(port , ()=>{
    console.log("server running at http://localhost:3000")
})
