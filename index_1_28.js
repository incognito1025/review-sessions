// Acc Pattern

// Iterative Native Array Methods

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

// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)









