
const http = require("http");

const server = http.createServer((req, res) => {

  
  if(req.url ==="/")
    {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>welcome to college");
  }
  else if(req.url === "/about")
    {
    res.writeHead(200,{ "Content-Type" : "text/html"});
    res.end("<h1>About our college </h1>");
  }
  else if (req.url === "/students") 
    {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Student Information</h1>");
  }
  else if (req.url === "/faculty")
     {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Faculty Information</h1>");

  } else if (req.url === "/contact")
     {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Contact Us</h1>");

  } else 
    {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});
server.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
