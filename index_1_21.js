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

// console.log(firstNumThatsBigger([14, 98, 0]));  // Code didn't run because of syntax error here //output 98
// console.log(firstNumThatsBigger([11, 5, 19]));  //Code didn't run because of syntax error here //output 19
// console.log(firstNumThatsBigger([58, 23, 3]));   //Code didn't run because of syntax error here  // output 58
// console.log(firstNumThatsBigger([6, 3, 7]));    //Code didn't run because of syntax error here  // output undefined

/*
Second solution:
return.arr.find((num) => num > 14;
*/

// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found

    //Param arr - strings ["one", "dog", "cat", "robert" ]
    //return first string w/ length greater than 4
    // return undefined if no such string isfound

    function returnString(arr) {
       
        for (let i = 0; i < arr.length; i++) {
            let firstString = arr[i];
            if (firstString.length > 4) {
                return firstString;
            } else {

            }
        }
        return undefined;
    }

    console.log(returnString(["dog", "hairbrush", "bottle"]));
    console.log(returnString(["id", "ego", "super ego"]));
    console.log(returnString(["tea", "coffee", "expresso"]));


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


// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/


