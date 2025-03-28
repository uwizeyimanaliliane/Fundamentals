function removeDuplicates(arr) {
    return [...new Set(arr)]; // Removes duplicate values
}

function isPalindrome(word) {
    return word === word.split("").reverse().join(""); // Checks if a word is the same forward and backward
}

function findPalindromes(sentence) {
    let words = sentence.split(" "); // Split sentence into words
    let palindromes = words.filter(word => word.length > 1 && isPalindrome(word)); // Keep only palindromes

    if (palindromes.length === 0) return []; // If no palindromes, return empty array

    let maxLength = Math.max(...palindromes.map(word => word.length)); // Find the longest palindrome length
    return removeDuplicates(palindromes.filter(word => word.length === maxLength)); // Return longest unique palindromes
}

// Example Uses
console.log(removeDuplicates([1, 2, 2, 3, 2, 2, 2])); // [1, 2, 3]
console.log(findPalindromes("abacaba users are unknow")); // ["abacaba"]
console.log(findPalindromes("aba dad it’s meaning less")); // ["aba", "dad"]
console.log(findPalindromes("Hello word abacaba dad ")); // ["abacaba"]
console.log(findPalindromes("Hello word")); // []
