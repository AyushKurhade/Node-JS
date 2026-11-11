console.log("Hello, World!");

function calculateGrade(marks) {
  if (marks >= 90) { return "A+"; }
  else if (marks >= 80)
     { return "A"; }
  else if (marks >= 70)
     { return "B"; }
  else if (marks >= 60)
     { return "C"; }
  else if (marks >= 40)
     { return "D"; }
  else
         { return "Fail"; }
}
let studentMarks = 85;
let grade = calculateGrade(studentMarks);
console.log("Marks:", studentMarks);
console.log("Grade:", grade);
