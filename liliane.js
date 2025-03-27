//The .at() method in JavaScript allows you to access elements
//  from an array using both positive and negative indices.
function getElement(arr, index) {
    return arr.at(index);
}

let numbers = [10, 20, 30, 40, 50];

console.log(getElement(numbers, 2));   // Output: 30 (3rd element)
console.log(getElement(numbers, -1));  // Output: 50 (Last element)
// instead of using arr[arr.length - 1], we can use arr.at(-1).


//also use .at() to access characters in a string
const text = "Hello";

console.log(text.at(1));   // Output: e
console.log(text.at(-1));  // Output: o (last character)



function reverseString(str) {
    //initializes an empty string reversed
    let reversed = "";
    //last character of the string when using .at(i) and it will  loop until i reaches the beginning of index 0
    for (let i = -1; Math.abs(i) <= str.length; i--) {
        //is used to get the character at index i  and the character is then added to the reversed string
        reversed += str.at(i);
    }
    return reversed;
}

console.log(reverseString("Hi"));  // Output: iH
console.log(reverseString("JS"));  // Output: SJ
