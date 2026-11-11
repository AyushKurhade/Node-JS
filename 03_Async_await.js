const fs = require("fs");


//  CALLBACK

// A callback is a function passed as an argument
// to another function, which executes after
// an asynchronous operation is completed.


fs.readFile("student.txt", "utf8", (err, data) => {

    if (err) {
        console.log("Error:", err.message);
        return;
    }

    console.log("Callback:", data);
});



//  PROMISE

// A Promise is an object that represents the
// eventual success or failure of an asynchronous
// operation.
// .then()  -> Handles successful results.
// .catch() -> Handles errors.


const fsPromises = require("fs/promises");

fsPromises.readFile("student.txt", "utf8")
    .then((data) => {
        console.log("Promise:", data);
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });



//  ASYNC / AWAIT

// Async/await is a modern way to handle Promises.
// It makes asynchronous code easier to read
// and write like synchronous code.

// async -> Makes a function return a Promise.
// await -> Pauses the current async function
//          until the Promise settles.
// try   -> Contains code that may cause errors.
// catch -> Handles errors.


async function readStudentFile() {

    try {
        const data = await fsPromises.readFile(
            "student.txt", "utf8"
        );

        console.log("Async/Await:", data);

    } catch (err) {
        console.log("Error:", err.message);
    }
}

readStudentFile();


// ASYNC / AWAIT EXAMPLE



async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");
test();
console.log("D");