// Acc Pattern
/*
It accumulates in a for loop
It accumulates everything in an array to a single value
Native array methods use the accumulator pattern
Steps to use the acc pattern
    1. initialize a variable to accumulate into, with a default value
    2. create a for loop and in the for loop - Accumulate
    3. At the end of the function, return the variable
    */

//Find the max value in an array -

function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([1, 3, 2])); // 3

// Iterative Native Array Methods

//1. .filter - filters out what you specify to it in the return value of the callback function and returns a new array.
//2. .every - returns a boolean based on the specified condition if all the elements return true
//3. .some - returns a boolean based on the specified condition if at least one element returns true
//4. .find - returns the first element that returns true from a specified condition
//5. .map - returns a new array where each element is transformed based on the return value of the callback
//6. .reduce - Can do multiple functions. Can emulate all the other native array methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 

function replacedByLength(arr) {
    const arrOfLengths = []; 

    for (let i = 0; i < arr.length; i++) {
            const arrString = arr[i];
           const  lengthOfString = arrStringlength;
           arrOfLengths.push(lengthOfString);
    }

    return arrOfLength;
}

const result = replaceByLength(["Hi", "cat"]);
console.log(result);

// or 

//PLease keep in mind str is arr[i];

function getLength(arr) {
    const lengths = [];

    for (let str of a arr) {
        lengths.push(str.length);
    }

    return lengths;

    //or Native Array Methods solution

    // const stringLengths = arr.map((el) => el.length);
    // return stringLengths;
}

console.log(getLengths (["a", "bc", "def", ]));




// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)

function returnFiveChar(arr) {
    const arrFiveChar = [];
    
    for (let i = 0; i < arr.length; i++) {
        const arrString = arr[i];

        if (arrString.length > 5) {
            arrFiveChar.push(arrString);
        }
    }

    return arrFiveChar;
}

//const result = returnsFiveChar(["apple", "banana", "kiwi", "grape", "orange"]);
//console.log(result); // Output: ["banana", "orange"]

// solution 1
function returnFiveChar(arr) {
    const charArray = [];
  
    for (let str of arr) {
      if (str.length > 5) {
        charArray.push(str);
      }
    }
  
    return charArray;
  }
  
  // Example usage
  const result = returnFiveChar(["apple", "banana", "kiwi", "grape", "orange"]);
  console.log(result); // Output: ["banana", "orange"]
  

    //or Native Array Methods solution

    function returnFiveChar(arr) {
        return arr.filter(str => str.length > 5);
      }



// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

function newArrLength(arr) {
    
const strFiveLengths = [];

for (let i = 0;  i < arr.length; i++) {
    const arrStr = arr[i];
    if(arrStr.length > 5) {
        allFiveLengths.push(arrStr.length);
    }
}
return strFiveLengths;
}

const result = newArrLength(["apple", "banana", "kiwi", "grape", "orange"]);
console.log(result); // Output: [6, 6, 7]

//accumulator

function newArrLength(arr) {
    const strFiveLengths =[];

    for (let length of arr) {
        if (arrStr.length > 5) {
            allFiveLengths.push(str)
        }
    }
    return strFiveLengths;
}

// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)









