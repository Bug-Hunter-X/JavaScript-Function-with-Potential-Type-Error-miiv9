function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  } else if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; 
}
//Example usage showing robust error handling
console.log(foo(5, 10)); // Output: 15
console.log(foo(5, 'hello')); // Output: NaN
console.log(foo(null, 10)); // Output: null
console.log(foo(5, null)); // Output: null