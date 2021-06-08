"use strict";

// Solution 1
const sumStrings = (a, b) => { 
  if (a === "") {
    a = "0";
  } else if (b === "") {
    b = "0";
  }
  
  let sum = BigInt(a) + BigInt(b)
  
  return `${sum}`;
}

// BigInt is a built-in object whose constructor returns a bigint primitive — also called a BigInt value, or sometimes just a BigInt — to represent whole numbers larger than 2^53 - 1
