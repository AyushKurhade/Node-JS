const http = require("http");

const server = http.createServer((req, res) => {

    // Send response and end request
    res.end("welcome to the node js server");

});

// Start server on port 5000
server.listen(5000, () => {
    console.log("server is running at http://localhost:5000");
});