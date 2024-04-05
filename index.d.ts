/**
Validate if a value is a positive integer between 0 & Number.MAX_SAFE_INTEGER

@returns true if the number is a positive integer, false otherwise.

@example
```
import isPositiveInt from 'is-positive-int';

console.log(isPositiveInt(5));  // Output: true
console.log(isPositiveInt(-5)); // Output: false
console.log(isPositiveInt(0));  // Output: true
```
*/
export default function isPositiveInt(n: number): boolean;