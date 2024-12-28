/**
 * Remove all occurrences of a given char from a string.
 * String: "abac", ch = 'a'
 * Output: "bc"
 */
function f1(str, ch) {
    return str.split(ch).join('');
}

function f(str, ch) {
    if(str.length === 0) {
        return "";
    }
    if(str[0] === ch) {
        return f(str.slice(1), ch);
    }
    return str[0] + f(str.slice(1), ch);
}

console.log(f('abac', 'a'));

/**
 * split() method of string values takes a pattern and divides this string
 * into an ordered list of substrings by searching for the pattern, puts
 * these substrings into an array, and returns the array
 * 
 *
 * join() method of array instances creates and returns a new string by concatening
 * all of the elements in this array
 * 
 * 
let str = 'abac';
console.log(str.split()); // ['abc']
console.log(str.split('')); // [ 'a', 'b', 'a', 'c' ]
console.log(str.split('a')); // [ '', 'b', 'c' ]
let arr = str.split('a'); // [ '', 'b', 'c' ]
console.log(arr.join()); // ,b,c
console.log(arr.join('')); // bc
 */


// slice() method of array/string returns a shallow copy of a portion
// of an array/string into a new array object selected from start to end
// (end will not included)
// arr.slice()
// arr.slice(startIdx)
// arr.slice(startIdx, endIdx);