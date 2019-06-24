// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
Math.max(...numbers); // 101


// Find longest string in strings
let arr = strings.map(item => item.length); // Converts every string to number

let max = Math.max(...arr); // Returns longest number from the array

let convertToBool = strings.map(item => item.length == max); // Converts array's data to boolean and returns a array

let index = convertToBool.indexOf(true); // Returns character's index

let maxLengthValue = strings[index]; // Add word that has same index 

// Find all the even numbers
let even = numbers.filter(item => item % 2 == 0);

// Find all the odd numbers
let odd = numbers.filter(item => item % 2 !== 0)

// Find all the words that contain 'is' use string method 'includes'
let contains = strings.filter(item => item.includes("is"));

// Find all the words that contain 'is' use string method 'indexOf'
let indexOfWord = strings.filter(item => item.indexOf("is") != -1);

// Check if all the numbers in numbers array are divisible by three use array method (every)
let divisible = numbers.filter(item => item % 3 == 0);

//  Sort Array from smallest to largest
let smallestToLargest = numbers.sort((a, b) => a - b );

// Remove the last word in strings
let removeLast = strings.pop();

// Add a new word in the array
let addToLast = strings.push("Hi there");

// Remove the first word in the array
let removeFirst = strings.shift();

// Place a new word at the start of the array use (upshift)
let addToFirst = strings.unshift("Gum");

// Make a subset of numbers array [18,9,7,11]
let numSubArr = numbers.slice(3, 7);

// Make a subset of strings array ['a','collection']
let strSubArr = strings.slice(2, 4);

// Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 1, 1221);
numbers.splice(3, 1, 1881);

// Replace words with string in strings array
strings.splice(1, 1, "call");
strings.splice(2, 1, "dhera");

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
for (let customer of customers) {
  if (customer.firstname.includes("J")) {
    console.log(customer.firstname);
  }
}

// Create new array with firstname and lastname
let newArray = [];
for (let customer of customers) {
  newArray.push(customer.firstname, customer.lastname);
}

// Sort the array created above alphabetically
let sortArray = strings.sort();