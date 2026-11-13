// 1. Import File System module
const fs = require("fs");

// 2. Create student object
let student = {
    id: 101,
    name: "Rahul",
    branch: "IT",
    marks: 85
}; 

// 3. Convert object into JSON string
// writeFileSync() saves data into student.json
fs.writeFileSync(
    "student.json",
    JSON.stringify(student, null, 4)
);

// 4. Read data from JSON file
// utf8 converts file content into readable text
let data = fs.readFileSync("student.json", "utf8");

// 5. Convert JSON string into JavaScript object
let studentData = JSON.parse(data);

// 6. Access and print student name

let msg = "i am iron man";
fs.appendFileSync(
    'student.txt' , msg
)

console.log(studentData);
console.log("Name:", studentData.name);
