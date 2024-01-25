// // 1.----------------------------------
// // Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.

// function everyWordCapitalized(string) {
//     const sentence = "Let's study now!";
//     const words = sentence.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         words[i].toUpperCase() + words[i].substr(1);
//     }
// words.join(" ");
// }

// const capitalizedSentence = everyWordCapitalized(string);
// console.log(capitalizedSentence("cap every word."));


// 2.----------------------------------
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 

// //parameter = object. let's call it `individual`
// //How do we key into an object? syntax object . dot notation (ex. (object.property) ex (john.firstName)) or bracket notation
// //Rebecca Cohen and Teacher are dynamic values. the rest of the string is static.

// function formatGreeting(person) {
    
//     return `Hello ${person.firstName} ${person.lastName}, have a great day at your job as a ${person.occupation}`;
// }

// const john = {
//     firstName: "John",
//     lastName: "Klaus",
//     occupation: "Carpenter"
//   }
  
//   const rebecca = {
//     firstName: "Rebecca",
//     lastName: "Cohen",
//     occupation: "Teacher"
//   }

// console.log(formatGreeting(john) === "Hello John Klaus, have a great day at your job as a Carpenter");
// console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher");
//  
  // 3.----------------------------------
//   // Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.

function returnFormattedArrayOfObjects(arr, targetId) {
    
    for (let i = 0; i < arr.length; i++) {
        const arrOfObjects = arr[i];
        const targetId = arr[i]
    }
}
  
//   /* Example Object
  {
    id: "Tfjso_4M"
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }