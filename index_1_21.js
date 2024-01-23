// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given an array of numbers and a given target. return the target if it's in the array or undefined if it's not

function ifItsInTheArray(arr, target) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return target;      //target return the element from the array
        } else {
            
        }
    }
return undefined; // other solution return.arr.find((num)) => num === target);
}

//const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // this is my array (arr)
//const targetVal = 5;

//console.log(ifItsInTheArray(numbers, 2));
// console.log(ifItsInTheArray(numbers, 5));
// console.log(ifItsInTheArray(numbers, 4));
// console.log(ifItsInTheArray(numbers, 3));

// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14

function firstNumThatsBigger(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];  // for (let num of arr)
        if (num > 14) {
            return num;
        } else {

        }
    }
    return undefined;
}

// console.log(firstNumThatsBigger([14, 98, 0]));  // Code didn't run at first because of syntax error here //output 98
// console.log(firstNumThatsBigger([11, 5, 19]));  //Code didn't run at first because of syntax error here //output 19
// console.log(firstNumThatsBigger([58, 23, 3]));   //Code didn't run at first because of syntax error here  // output 58
// console.log(firstNumThatsBigger([6, 3, 7]));    //Code didn't run at first because of syntax error here  // output undefined

/*
Second solution:
return.arr.find((num) => num > 14;
*/

// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found

    //Param arr - strings ["one", "dog", "cat", "robert" ]
    //return first string w/ length greater than 4
    // return undefined if no such string is found

    function returnString(arr) {
       
        for (let i = 0; i < arr.length; i++) {
            let firstString = arr[i];
            if (firstString.length > 4) {
                return firstString;
            } else {

            }
        }
        return undefined;``
    }

    // console.log(returnString(["dog", "hairbrush", "bottle"]));
    // console.log(returnString(["id", "ego", "super ego"]));
    // console.log(returnString(["tea", "coffee", "expresso"]));


// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/   

//param: array of objects: arr
//param: string: target id
//return first object that matches id
//return undefined if no object is found

function matchID(arr, targetId) {
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i].id === targetId) {
            return arr[i];
        }  
    }
    return undefined;
}

const arrayOfObjects = [
    { id: "Y42C_a", name: "Robert", occupation: "Chef", eyeColor: "green" },
    { id: "Z17B_b", name: "Alice", occupation: "Engineer", eyeColor: "brown" },
    { id: "X91D_c", name: "David", occupation: "Artist", eyeColor: "blue" },
    { id: "W28E_d", name: "Sophia", occupation: "Doctor", eyeColor: "hazel" },
    { id: "V53F_e", name: "Michael", occupation: "Teacher", eyeColor: "gray" },
    { id: "U79G_f", name: "Emily", occupation: "Scientist", eyeColor: "amber" },
    { id: "T64H_g", name: "Daniel", occupation: "Pilot", eyeColor: "green" },
    { id: "S46I_h", name: "Olivia", occupation: "Writer", eyeColor: "blue" },
    { id: "R82J_i", name: "Ethan", occupation: "Athlete", eyeColor: "brown" },
    { id: "Q29K_j", name: "Ava", occupation: "Musician", eyeColor: "green" },
];

const targetId = "T64H_g";

console.log(matchID(arrayOfObjects, targetId));

















// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/

function findObjectName(arr, targetId) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === targetId) {
            const objectName = {name: arr[i].name}
            return objectName;
        }
    }
    return undefined;
}


// Sample array of objects
const arrayOfObjects = [
    {
        id: "Y42C_a",
        name: "Robert",
        occupation: "Chef",
        eyeColor: "green"
    },
    {
        id: "X31B_b",
        name: "Alice",
        occupation: "Engineer",
        eyeColor: "blue"
    },
    // Add more objects as needed
];

// Test cases 
const result1 = findObjectName(arrayOfObjects, "Y42C_a");
console.log(result1); // Should print: { name: "Robert" }

const result2 = findObjectName(arrayOfObjects, "X31B_b");
console.log(result2); // Should print: { name: "Alice" }

const result3 = findObjectName(arrayOfObjects, "Z99D_c");
console.log(result3); // Should print: undefined

/*
Function - Independent Study

// Define/declaring function -param is passed to argument
// function expression:
//  const count = 100; function expression example (const printMe)
    const printMe = function() {  // function is a value, printMe is a variable with the assigned value of function
        console.log('print');
    }

    function printMeAgain() {  // another way to define and declare a function
        console.log('printing..');
    }
    

    const printMe = function(a, b) {  // function is a value, printMe is a variable with the assigned value of function
        console.log(a, b);
    }


// another example
function x() {

}
let p = x();  //the output value of function x can be used outside the function.  `p` can be used by other functions
p; 


function y() {

}
////////////////////////
//The expression below has variable `p` which is the value we get from executing/calling/invoking a function x();
let p = x();  // this is not a function. 
//But if the function x() returns any value, that value will be assigned to variable `p`
// x()  a function name with paranthesis means executing/calling/invoking a function. 
// a function name without paranthesis means it's just the string definition of the function itself.
// if a function doesn't return any value, it will be undefined (something that is not defined yet)

//summation
function sum(a, b) {
    return a + b;
}

sum(2, 3) // output 5


function sum (a, b) {
    let ret = a + b;   // declare a variable in the function
    return ret;
}

//returning from a function means everything you're doing inside a function can be returned from a function
//including task, logic, operations
//the function can return a value so that it can be utilized elsewhere

//Default parameter

function calc(a, b) {
    return (2 * (a + b));
}

calc(2, 3) // 10
calc(3, 3) // 12
calc(3) // NaN  if you forget to pass the second argument, `b` - 2nd arg or empty arg will return undefined, you will get Not a Number

//to safeguard from the calc(3) situation create a default

function calc(a, b=0) {   // if someone forgets to pass the second arg, it will return a value of `0`
    return (2 * (a + b));
}

undefined 
calc(3) // 6


Rest Parameter   
//rest as in rest of it, whatever is left over
// allows a function to accept, infinite, any number of arguments

// `...y` this is a rest parameter. A function cannot have more than one rest param and
function collectThings(x, ... y) {  //  and the rest param must be the last param in the function
    console.log(x);
    console.log(y);
}

collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9,) // the first argument is `1`.  `2, 3, 4, 5, 6, 7, 8, 9 is second arg

//when this prints:
// (8) is the first arg, the second arg is [2, 3, 4, 5, 6, 7, 8, 9]; // an array! 

(8) [2, 3, 4, 5, 6, 7, 8, 9];  // y = to the array


Arrow Function 
//fat allow syntax // a combination of = key and greater than >

const add = function(x, y) {
    return x + y;
}

//to convert to the arrow function/fat arrow syntax (less code, more modern)

//remove function keyword
//add fat arrow after parameter
// get rid of curly bracket
// remove return

const add = (x, y) => {  // get rid of curly bracket and return
    return x + y;
}

add(2,3) // 5

const add = (x, y) => x + y; //much simpler  

const add = x => x; // it can be made smaller (don't use)


Nested Function
//function within a function
//js allows you to define another function within a function
// concept of closure - the understanding of nested function and function scope

function outer() {
    console.log('outer');
        function inner() {
            console.log('inner');
        }
    inner();
}

outer(); //calling the function / output outer. Output Inner


Function Scope 

//Global - function is defined inside the js file globally.
// this means the function is not inside any other function

//Closure
// Rule 1: variable that are defined inside a function cannot be accessed anywhere outside of the function
// Rule 2: a function can access all the variables inside the scope it is defined

//The Global Scope cannot access any variables inside the function, reverse not true
//inner function can access any variable in the global scope

// The Outer function cannot access any variables inside the inner function, reverse not true
// inner function can access all variable in the Outer function scope

function doSomething() {
    let x = 10;
    const y = 20;
    var z = 30;

    console.log(x, y, z); // inside the function
}

doSomething ();
//output 10 20 30
undefined

// a variable defined from inside a function cannot be accessed from outside.
//console.log(x, y, z) // this is outside the function
//output "Oncaught ReferenceError"" x is not defined"
//output "Oncaught ReferenceError""  is not defined"

var x = 10; // accessing inner function from global scope
const y = 20;
let z = 30;

function doSomething() {
    console.log(x, y, z);
}
doSomething();
//output 10, 20, 30
//undefined

// Closure: the nested function is a closer. The inner function is a closure. 
//MDN = a closure is a function that can have 3 variables together with an environment that can run that variable.
//which means the environment IS the inner function and every variable that is defined inside 
//The inner function can only be accessed ONLY from the statements in the outer function
//The inner function from a closure means the inner function can use the variables, argument,
//arguments, everything from the outer function
// The outer function cannot use the arguments, variables and other things from the inner function
//Closure is nothing but the nested function because it provides an environment to the outer world 
// nested function can live longer for execution and it can actually perform all the required operations

function outer(x) {
    function inner(y) {  
        return x + y;   // inner function can access all the outer function argument/ variable (ex `x`)
    }   //inner function's closure
    return inner;
}
undefined


//call the outer function, specify the argument and then leverage both outer and inner together - advantage

//Example : argument to pass to inner
function outer(x) {
    function inner(y) {  
        return x + y;   // inner function can access all the outer function argument/ variable (ex `x`)
    }   //inner function's closure
    return inner;
}
undefined
const outerReturn = outer(10); // argument passed to outer function.  10 is the value. this value still lives in inner function
undefined

// the argument passed to the outer function still lives in the inner function. 
// outer returns the inner

//printing outerReturn.  Outer returns inner with variable inner used from outer.  The varis
f inner(y) {
    return x + y;
}

outerReturn(2) // outer return is nothing but this inner function. 
//inner function expects a parameter here without a parameter.
// it used this too with a variable passed back 

```javascript
// A function closure is created when a function is defined within another function
// The inner function has access to the variables of the outer function even after it finishes executing
// This allows the inner function to retain and manipulate the state of the outer function
// Closures are commonly used to create private variables and maintain encapsulation in programming
```
// Closure is the variables in an environment that you can actually execute freely.
//usually in functions, whenever the function execution is completely over, this is done. 
// Any variable that is created inside that function are all gone
// In this case, though the outer function has executed long back, 
//the argument we passed through outer still lives in inner. inner is a closure.

// Use cases - perserving variables. passed 10 but it's preserved even though function execution is complete.
// variable can still be utilized with another value to compute something and return.  
//variable can still be used by inner function.

//Closure understanding depends on knowledge of nested functions and function scope. We know by nested 
//function that a function can define one more function within in. we know why the function scope is like
//the outer function cannot access any variable inside the inner function. however, inner function can access any variable 
// in the outer function.  This gives us a feature called closure through which even if teh outer function execution
// is over but we can still persist certain values which is passed to the outer function to 
// within inner function and computer it at a later point in time.


Callback Functions
//We can pass function to another function as a parameter/argument. 

function foo(bar) {
    if(itsNight) {
        bar();`1`
    }
    if (isDrinksOverCheckOnline) {

    }
}
