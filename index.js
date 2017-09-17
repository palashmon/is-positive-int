'use strict';

// Load the required ponyfills
var isInteger = require('number-is-integer');
var isSafeInteger = require('is-safe-integer');

module.exports = function(n) {
    return isInteger(n) && isSafeInteger(n) && parseFloat(n) > -1; // ignore -ve integers
};
