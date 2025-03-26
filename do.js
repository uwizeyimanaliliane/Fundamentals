//The includes() function in JavaScript is used to check whether an array or a string contains a specific value. It returns true if the value is found and false if it is not.
// Syntax : For Array: array.includes(valueToFind, startIndex)

let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false

//         For String:string.includes(substring, startIndex)

let text = "Hello, world!";
console.log(text.includes("o", 5)); // true (searches after index 5)
console.log(text.includes("H", 1)); // false (searches after index 1, missing "H")

//Why Use includes()?
//Readability: It makes code easier to understand than using loops or indexOf().

//Efficiency: It's a simple, direct way to check for values.