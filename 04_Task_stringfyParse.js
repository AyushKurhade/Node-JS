
const fs = require("fs");


let data = fs.readFileSync("students.json", "utf8");

let students = JSON.parse(data);   // object 
console.log(students);


let searchStudent = students.find(student => student.id === 102);

console.log("\nStudent Found:");
console.log(searchStudent);


let updatedStudents = students.filter(student => student.id !== 102);
// 102 id exclude remaining student is as it is 


let updatedData = JSON.stringify(updatedStudents, null, 4);

fs.writeFileSync("students.json", updatedData);

console.log("\nStudent deleted successfully!");
console.log("\nUpdated Student Records:");
console.log(updatedStudents);
