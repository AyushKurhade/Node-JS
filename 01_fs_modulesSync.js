// ##readfilesync and readfile are methods of the fs module

// ## readfilesync is a synchronous blocking method that reads the entire contents of a file

// ## readfile is an asynchronous method that reads the contents of a file 
// without blocking the execution of other code.


const fs = require("fs");
// ## require() is used to import modules packages or files into another JavaScript file

console.log("Start");
const data = fs.readFileSync("student.txt", "utf8");
// syntax  :  fs.readFileSync(path, encoding);
// path : file which is used for reading the data 
// encoading : in which format the data is read from the file
console.log(data);
console.log("End");




