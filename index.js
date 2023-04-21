'use strict';

function isPositiveSafeInteger(n) {
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
  return Number.isInteger(n) && n >= 0 && n <= MAX_SAFE_INTEGER;
}

export default isPositiveSafeInteger;
