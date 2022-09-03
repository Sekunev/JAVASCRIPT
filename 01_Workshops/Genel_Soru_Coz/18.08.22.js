// 1- Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'. and print it

// function greetWorld() {
//     alert('Hello, World!');
// }
// greetWorld()

// 2- Oy vermek için en yaygın minimum yaş 18'dir. Kişinin yaşını temsil eden bir sayı alan ve 18 yaşında veya daha büyükse boole değerini true, değilse boolean false değerini döndüren bir canIVote() işlevi yazın.

// function canIVote() {
//     let yas = +prompt("yaş gir")
//     if (yas > 18) {console.log(true);}
//     else {console.log(false);}
// }
// canIVote()

// 3- Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

// let str1 = prompt("1. stringi giriniz")
// let str2 = prompt("2. stringi giriniz")

// console.log(str1 == str2 ? 'You agree!' : 'You disagree!')

// 4 - Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.
// Here are the classifications:
// 0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'
// If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

// let age = +prompt("yaşınız?")

// switch(true) {
//   case(age <= 3) : sonuc3 = 'baby'; break;
//   case(age <= 12) : sonuc3 = 'child'; break;
//   case(age <= 19) : sonuc3 = 'teen'; break;
//   case(age <= 64) : sonuc3 = 'adult'; break;
//   case(age <= 140) : sonuc3 = 'senior citizen'; break;
//   default : sonuc3 = 'This is not a valid age'; break;
// }
// console.log(sonuc3);

// 5- Write a function, finalGrade(). It should:
// take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
// 0-59 should return: 'F'
// 60-69 should return: 'D'
// 70-79 should return: 'C'
// 80-89 should return: 'B'
// 90-100 should return: 'A'

// let numara1 = +prompt("1. numara?")
// let numara2 = +prompt("2. numara?")
// let numara3 = +prompt("3. numara?")
// let ort = (numara1 + numara2 + numara3) / 3

// switch(true) {
//   case(ort <= 59) : sonuc = 'E'; break;
//   case(ort <= 69) : sonuc = 'D'; break;
//   case(ort <= 79) : sonuc = 'C'; break;
//   case(ort <= 89) : sonuc = 'B'; break;
//   case(ort <= 100) : sonuc = 'A'; break;
//   default : sonuc = 'You have entered an invalid grade.'; break;
// }
// console.log(sonuc);

// 6-Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

// let rank = prompt("rank")
// let lastName = prompt("lastName")
// console.log(`${rank}  ${lastName} reporting for duty!`);

// 7-We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?

const rollTheDice = () => {
  //   Math.random()
  //   gives us a random number from 0 up to, but not including, 1
  //   We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  //   But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let die1 = Math.random() * 6 + 1;
  let die2 = Math.random() * 6 + 1;
  let toplam = die1 + die2;
  return toplam;
};

// 8- Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?
// Write a function, calculateWeight(). It should:

// have two parameters: earthWeight and planet
// expect earthWeight to be a number
// expect planet to be a string
// return a number representing what that Earth-weight would equate to on the planet passed in.
// Handle the following cases:
// 'Mercury' weight = earthWeight * 0.378
// 'Venus' weight = earthWeight * 0.907
// 'Mars' weight = earthWeight * 0.377
// 'Jupiter' weight = earthWeight * 2.36
// 'Saturn' weight = earthWeight * 0.916
// For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

// let earthWeight = +prompt("ağırlık giriniz: ")
// let planet = prompt("gezegen giriniz: ");

// if (planet === "Mercury") {console.log(`Bu cismin Mercury gezegenindeki ağırlığı ${(earthWeight * 0.378).toFixed(2)} 'dır`);}
// if (planet === "Venus") {console.log(`Bu cismin Venus gezegenindeki ağırlığı ${(earthWeight * 0.907).toFixed(2)} 'dır`);}
// if (planet === "Mars") {console.log(`Bu cismin Mars gezegenindeki ağırlığı ${(earthWeight * 0.377).toFixed(2)} 'dır`);}
// if (planet === "Jupiter") {console.log(`Bu cismin Jupiter gezegenindeki ağırlığı ${(earthWeight * 2.36).toFixed(2)} 'dır`);}
// if (planet === "Saturn") {console.log(`Bu cismin Saturn gezegenindeki ağırlığı ${(earthWeight * 0.916).toFixed(2)} 'dır`);}
// else {console.log('Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.')}

/* 9-
It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
// Uncomment the line below when you're ready to try out your function
// console.log(truthyOrFalsy(0)) // Should print false
*/

// number-string ayrımını nasıl yapacağız?

// let value = prompt("true yada false olduğunu sorgulamak istediğiniz değer girişini yapınız : ");

// if (parseInt(value) === Number) {Boolean(value) ? console.log('true') : console.log('false')}

// 10- A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

// Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

// Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.

// The JavaScript Math.ceil() function will come in handy. Check out the documentation here to figure out how it works.

// let total = prompt("toplam arkadaş sayınız : ");
// console.log(`imaginary friend sayınız ${Math.ceil(total*1/4)}`)

function myFunc() {
  if (arguments.length > 0) {
    for (var i = 0; i < arguments.length; i++) console.log(arguments[i]);
  }
}
myFunc(2, 3, 4, 6, 1, 7, 3);
