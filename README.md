# is-positive-int

> Validate if a value is a positive integer between 0 & [maximum safe integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) in JavaScript

[![Build Status](https://travis-ci.org/palashmon/is-positive-int.svg?branch=master)](https://travis-ci.org/palashmon/is-positive-int)
[![npm version](https://img.shields.io/npm/v/is-positive-int.svg)](http://npm.im/is-positive-int)

[![npm downloads](https://img.shields.io/npm/dm/is-positive-int.svg)](http://npm.im/is-positive-int)
[![Dependency Status](https://david-dm.org/palashmon/is-positive-int.svg)](https://david-dm.org/palashmon/is-positive-int)

&nbsp;

## Install

```
npm install --save is-positive-int
```


## Usage

```js
var isPositiveInt = require('is-positive-int');

// Test cases
// Valid positive values
isPositiveInt(0);                           // true
isPositiveInt(1);                           // true
isPositiveInt(5034);                        // true
isPositiveInt(Math.pow(2, 53) - 1);         // true
isPositiveInt(Number.MAX_SAFE_INTEGER);     // true
isPositiveInt(1.0);                         // true
isPositiveInt(5e2);                         // true, 500 in exponential notation
isPositiveInt(9.007199254740991e15);        // true, Number.MAX_SAFE_INTEGER.toExponential()

// Invalid values
isPositiveInt(-5034);                       // false
isPositiveInt(-Math.pow(2, 53) - 1);        // false
isPositiveInt(-Number.MAX_SAFE_INTEGER);    // false
isPositiveInt(Number.MIN_SAFE_INTEGER);     // false
isPositiveInt(1.1);                         // false
isPositiveInt(-5e2);                        // false
isPositiveInt(NaN);                         // false
isPositiveInt(Infinity);                    // false
isPositiveInt(-Infinity);                   // false
isPositiveInt(null);                        // false
isPositiveInt(undefined);                   // false
isPositiveInt(Math.pow(2, 53));             // false
isPositiveInt(-Math.pow(2, 53));            // false
isPositiveInt(Number.MAX_SAFE_INTEGER + 1); // false
isPositiveInt(-Number.MAX_SAFE_INTEGER - 1);// false
isPositiveInt(Number.MIN_SAFE_INTEGER - 1); // false
isPositiveInt(Math.PI);                     // false
isPositiveInt(-9.007199254740991e15);       // false
isPositiveInt(9.007199254740991e15 + 1);    // false
isPositiveInt('10');                        // false
isPositiveInt(true);                        // false
isPositiveInt(false);                       // false
isPositiveInt([1]);                         // false
isPositiveInt({});                          // false
```

## License

MIT © [Palash Mondal](https://github.com/palashmon)
