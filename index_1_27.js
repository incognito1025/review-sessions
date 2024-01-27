 // 1. Write a function that takes in an array and returns an object where each element in the array is a key, and the values are the number of times each element appears in the array -
 //input - array of elements
 //output - object each element in the array is a key
 //each element means to iterate through an 

 function returnAnObject(arr) {
    
    const obj = {};

    //iterate through the array
    for (const element of array) {
    obj [element] = (obj[element] || 0) + 1;
 }
 return obj;

}

// other solution
//create an object to count the elements
function countElements(arr) {
    const obj = {};
//create a for loop
    for (let key of arr) {
        if (obj[key]++) {
// check if the current element is in the object
        } else {
            obj[key] = 1;
    }
    return obj;
}

}
  
//pseudocode , iterate thought the array. If the element is not a key in the obj object, initialize with 1, otherwise increment through the existing count.
// YOUR CODE HERE

// Example:
// ["apple", "orange", "apple", "banana", "apple", "orange"]
// { apple: 3, orange: 2, banana: 1}

// ------------------------------------------------------------------------

// 2. Write a function that takes an object and a property name (key), and returns the value of the property. If the property doesn't exist in the object return an error message

// input - an object and a property name (key)
// output - return the value of the property
//  if property doesn't exist in the object, return an error message

function returnPropertyFromObject(obj, key) {
 //check mif the property exists in the object by passing in the key
    if (obj.hasKey(key)) {

    return obj[key]
    }

}


// Other solution
// input - an object and a property name (key)
// output - return the value of the property
//  if property doesn't exist in the object, return an error message

function returnPropertyFromObject(obj, key) {
    //check if the property exists in the object by passing in the key
       if (obj[key]) {
        //if the property exists we return the value
        return obj[key];
       } else {
        // if it doesn't exist we return an error message
        return "Errorrrr";
       return obj[key]
       }
   }

   // Or Solution 3

   //return obj[key] ? obj
   
   console.log(returnPropertyFromObject({}, "name"));
   console.log(returnPropertyFromObject({name: "Maayan"), "name"));
// ------------------------------------------------------------------------

// 3. Given a person object, update their street to the new given street. The person object will have these properties -

const updateStreet = "24 Maple Street";
person.address.street = updateStreet;

console.log(person);

/*

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};

*/

// YOUR CODE HERE

// ------------------------------------------------------------------------

// 4. Given the following object, preform the following tasks -
//   a. Log the desk of the second software engineer in the development department
//   b. Log the location of the head of the marketing department
//   c. Log the name of the CEO's executive assistant
//   d. Add yourself as a third software engineer to the development office
//   e. Update the name of the head of marketing to "Johann Marketer"

//a. Log the desk of the second software engineer in the development department
console.log(companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer2.name);

//b. Log the location of the head of the marketing department
console.log(companyOrganizationalStructure.departments.marketing.head.name)

//c. Log the name of the CEO's executive assistant
console.log(companyOrganizationalStructure.CEO.office.employees.executiveAssistant.name);

//d. Add yourself as a third software engineer to the development office (dot notation)
companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer3.name = "Niki K.";

//d. Add yourself as a third software engineer to the development office (bracket notation)
companyOrganizationalStructure["department"]["development"]["head"]["office"]["employees"]["softwareEngineer3"]["name"] = "Niki K.";

//e. Update the name of the head of marketing to "Johann Marketer" (dot notation)
companyOrganizationalStructure.departments.marketing.head.name = "Johann Marketer";

//e. Update the name of the head of marketing to "Johann Marketer" (bracket notation)
companyOrganizationalStructure["departments"]["marketing"]["head"]["name"] = ["Johann Marketer"];



const companyOrganizationalStructure = {
  companyName: "TechCorp",
  CEO: {
    name: "John CEO",
    office: {
      location: "Floor 10, Building A",
      employees: {
        executiveAssistant: {
          name: "Alice Executive",
          desk: "A101",
        },
      },
    },
  },
  departments: {
    development: {
      head: {
        name: "Bob Head",
        office: {
          location: "Floor 8, Building B",
          employees: {
            softwareEngineer1: {
              name: "Charlie Engineer",
              desk: "B801",
            },
            softwareEngineer2: {
              name: "David Coder",
              desk: "B802",
            },
          },
        },
      },
    },
    marketing: {
      head: {
        name: "Eva Marketer",
        office: {
          location: "Floor 6, Building C",
          employees: {
            marketingSpecialist1: {
              name: "Frank Specialist",
              desk: "C601",
            },
            marketingSpecialist2: {
              name: "Grace Promoter",
              desk: "C602",
            },
          },
        },
      },
    },
  },
};

// YOUR CODE HERE

// ------------------------------------------------------------------------

// 5. Given the following variables, create a new object. the key variable should be the key and the value variable should be it's corresponding value. You have to use the variables!

const key = "name";
const value = "Roberto Robertson"

newObj = {
    "name": "Roberto Robertson",
};

// const newObj = {
    [key]: value,
};

// 6. Write a function that takes an object as it's only parameter and logs each property to the console. The function ONLY LOGS

//input: obj
//output: logs each property

function logProperties(obj) {
for (const property in obj) {
    console.log(obj[property]);
}
};

//syntax:  
/*
for (variable in object) {
//code to be executed in each property
}

*/
// ------------------------------------------------------------------------

// 7. Write a function that takes two objects and checks if they have the same values. HINT: use the (for.. in..) loop

//input = two objects

function checkForSameValues(obj1, obj2) {
    for (const key of obj) {
        if (obj1[key] === obj2[key]) {
            return false;
        } else {
            return true;
        }
        console.log(obj[key]);
    }
}


// YOUR CODE HERE

// ------------------------------------------------------------------------






