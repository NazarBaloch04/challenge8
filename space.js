"use strict";
// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing
// Error in Code
// let student= {
//     name: Nazar Baloch",
//     age: 19,
//     grade: "A1",
//     isPass: true,
//     marks: 500,
// }
// Correction 
let student = {
    name: "Nazar Baloch",
    age: 19,
    grade: "A1",
    isPass: true,
    marks: 500,
};
// Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let a = 3;
let b = 9;
console.log(a > b, "I predict it false");
console.log(a < b, "I redict it true");
console.log(b > a, "I predict it triue");
console.log(b < a, "I predict it false");
console.log(a <= b);
console.log(a == b);
console.log(a >= b);
console.log(b >= a);
console.log(b <= a);
console.log(b != a);
// Step 2: Tests using the lower case function
let friend1 = "NAZAR BALOCH";
let friend2 = "nazar baloch";
console.log(friend1 == friend2);
// Step 3 • Tests using "and" and "or" operators
let d = 2;
let e = 6;
let f = 1;
console.log(d < e && e < f);
console.log(d > f && f > e);
console.log(d < e || e > f);
console.log(d > f || f > e);
//  Step 4. Test whether an item is in a array
let vehicleNames = ["Cultus", "XLI", "GLI"];
let result = vehicleNames.includes("XLI");
console.log(result);
// step 5 . • Test whether an item is not in a array
let friends = ["Nabi", "Ali", "Khalil"];
result = friends.includes("Noman");
console.log(result);
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
// step 1 Create a variable called alien_color and assign it a value of 'green',
// 'yellow', or 'red'.
// 1st version
let alien_color = 'green';
if (alien_color == 'green') {
    console.log("congratulations you have earned 5 points");
}
// 2nd version
alien_color = 'yellow';
if (alien_color == 'yellow') {
    console.log("congratulations you have earned 5 points");
}
// 3rd version 
alien_color = 'yellow';
if (alien_color == 'yellow') {
    console.log("congratulations you have earned 5 points");
}
;
