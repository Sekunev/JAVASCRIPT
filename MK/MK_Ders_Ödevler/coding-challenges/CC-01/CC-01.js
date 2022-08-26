//! ## Problem Statement

//! - Write a function that takes an array of characters and reverses the letters in place.

// - Examples:

//   - reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC

//   - reverse("Happy") ➞ yppaH

//!SOLUTION:

let words = "Merhaba Yeni Dünya";
let newen = (words) => {
  let sonHali = "";
  for (let i = words.length - 1; i >= 0; --i) {
    sonHali += words[i];
  }
  return sonHali;
};
console.log(newen("Merhaba Yeni Dünya"));
