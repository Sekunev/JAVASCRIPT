//! ## Problem Statement

// - Write a function that takes an array of characters and reverses the words order.

// - Please note that, *single word should not be reversed!*
// ## Examples

// Input : 'Clarusway' => Output :  **'Clarusway'**

// Input : 'days. big make things Little' => Output :  **'Little things make big days.'**

//!SOLUTION:

let words = "Little things make big days.";
let newWords = words.split(" ");
let reverseWords = "";
for (let i = newWords.length - 1; i >= 0; --i) {
  reverseWords += newWords[i] + " ";
  // console.log(reverseWords); // buraya yazarsak her seferınde ekrana bır kelımeyı yazr
}
console.log(reverseWords);
