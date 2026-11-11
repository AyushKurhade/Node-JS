const fs = require("fs");
console.log("Start");


fs.readFile("student.txt", "utf8", (err, data) => {
  if (err)  
{ console.log(err); 
    return; }
  console.log(data);
});
console.log("End");

// ## require() is used to import modules packages or files into another JavaScript file
// syntax :- fs.readFile(path, encoding, callback);

// path – File path.
// encoding – Usually 'utf8'.
// callback – Function executed after reading completes.
// - err – Contains an error if reading fails.
// - data – Contains the file content if successful.