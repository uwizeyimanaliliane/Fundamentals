//The concat() method in JavaScript is used to merge arrays or strings. It returns a new value without modifying the original one.
//Syntax : For Array : newArray = array1.concat(array2, array3, ...);
//         For String : newString = string1.concat(string2, string3, ...);

// Example of using concat() with arrays

// Define two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Concatenating array1 and array2
const combinedArray = array1.concat(array2);

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Concatenating multiple arrays
const moreNumbers = [7, 8, 9];
const fullArray = array1.concat(array2, moreNumbers);

console.log(fullArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Concatenating an array with a single element
const newArray = array1.concat(10);
console.log(newArray); // Output: [1, 2, 3, 10]

