const fs = require("fs");


fs.writeFileSync("students.txt", "Student ID: 101 , Name: Akshay , Branch: IT , Marks: 85",);

fs.appendFileSync("students.txt", " Phone no : 1234567890 ");

let data = fs.readFileSync("students.txt", "utf8");

console.log(data);

fs.renameSync("students.txt", "student_details.txt");

console.log("File renamed successfully");

