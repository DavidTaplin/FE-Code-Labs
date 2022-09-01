//  ** Scopes **
// Accessibility of variables

// Global Scopes
// these variables are visibility through the entire script/program
let x = 0;

// Local Scopes/ inner scope/ block scope
// a local scope has access to its on variables as well as its outer scope variables. It does not have access to its inner scope.

// examples
// functions, conditional statements, classes, loops, ect

function logToConsole() {
let y = 1;
console.log(x, y);
}

logToConsole();
// y is not defined
// console.log(y);