// 1. Bölüm Loops

//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

// let sayi = +prompt("pozitif bir sayı giriniz");

// while (sayi < 0) {
//   console.log("negatif sayı girdiniz lütfen pozitif sayı giriniz");
//   sayi = +prompt("pozitif bir tamsayı giriniz");
// }
// console.log("girilen sayı :", sayi);

// alt çözüm

// const validNumber = () => {
//   let num = prompt("Enter a valid number");

//   if (Number(num)) {
//     console.log("It is a valid number");
//   } else {
//     return validNumber(); // recursion
//   }
// };

// console.log(validNumber());

//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.

const num1 = 8;
const num2 = 6;

let obeb;

for (let i = 1; i <= num1 && i <= num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    obeb = i;
  }
}
// console.log(obeb);

// farklı çözüm recursive.

// function OBEB(a, b) {
//   if (!b) {
//     return a;
//   }
//   return OBEB(b, a % b);
// }

// console.log(OBEB(60, 72));
// console.log(!5);

//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

// let sayi1 = 8;

// for (let i = 1; i < sayi1; i++) {
//   if (sayi1 % i == 0) {
//     console.log(i);
//   }
// }

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.

// let sayi2 = parseInt(prompt("Enter a positive integer: "));
// sayı 0'dan küçük ise;
// if (sayi2 <= 0) {
//   console.log("0dan küçük olmamalı.");

//   //sayı 0'a eşit ise;
// } else if (sayi2 == 0) {
//   console.log(`${sayi2} faktöryel: 1`);
//   // sayı pozitif ise;
// } else {
//   let fact = 1;
//   for (let i = 1; i <= sayi2; i++) {
//     fact *= i;
//   }
//   console.log(`${sayi2} faktöryel değeri: ${fact}`);
// }

//! alt recursive çözüm:

// const factorial = (num) => {
//   if (num < 0) return -1;

//   if (num === 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };

// console.log(factorial(5));

//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.

// let dizi = [];

// for (let i = 100; i < 1000; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     dizi.push(i);
//   }
// }
// console.log(dizi);

//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} x 1 =`, i * 1);
//   console.log(`${i} x 2 =`, i * 2);
//   console.log(`${i} x 3 =`, i * 3);
//   console.log(`${i} x 4 =`, i * 4);
//   console.log(`${i} x 5 =`, i * 5);
//   console.log(`${i} x 6 =`, i * 6);
//   console.log(`${i} x 7 =`, i * 7);
//   console.log(`${i} x 8 =`, i * 8);
//   console.log(`${i} x 9 =`, i * 9);
//   console.log(`${i} x 10 =`, i * 10);
// }

//? alt çözüm

// const multiplication = () => {
//   let arr = [];

//   for (let i = 1; i <= 10; i++) {
//     arr.push(`multiplication table of ${i}`);
//     for (let k = 0; k <= 10; k++) {
//       arr.push(`${i} * ${k} = ${i * k}`);
//     }
//   }

//   return arr;
// };

// console.log(multiplication());

//! Q-7
//? Write a code to draw Whiteball and Powerball numbers for the Powerball lottery game.
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.

const powerball = () => {
  let powerball = Math.floor(Math.random() * 26) + 1;
  let whiteball = [];

  for (let i = 1; i <= 5; i++) {
    let random = Math.floor(Math.random() * 69) + 1;
    whiteball.push(random);
  }

  return `${whiteball.join(", ")}, ${powerball}`;
};

console.log(powerball());

// 2. Bölüm Functions

//! Q-1
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.
// declerations
// function donustur(amount, rate) {
//   return amount * rate;
// }

// experions
// let donustur = function (amount, rate) {
//   return amount * rate;
// };

// arrow
// let donustur = (amount, rate) => amount * rate;

// console.log(donustur(1000, 20));

//! Q-2
//? Write a JavaScript function that accepts an argument and returns the type.

// let turdondur = (x) => console.log(`${x} 'in türü :`, typeof x);
// turdondur(false);

//! Q-3
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway

// let karaktersayisi = (str1, x) => {
//   let sonc = 0;
//   for (let i = 1; i < str1.length; i++) {
//     if (str1[i].includes(x)) {
//       sonc += 1;
//     }
//   }
//   return console.log(sonc);
// };

// karaktersayisi("clarusway", "a");

//! Q-4
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

// const perfectNums = () => {
//   let arr = [];

//   for (let i = 1; i <= 1000; i++) {
//     sum = 0;

//     for (let k = 1; k < i; k++) {
//       if (!(i % k)) {
//         sum += k;
//       }
//     }

//     if (sum === i) {
//       arr.push(i);
//     }
//   }

//   return arr;
// };

// console.log(perfectNums());

//! Q-5
//? Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
//? The user should have 5 chance to guess the number.
//? If the number entered by the user:
//? is greater than the random number then warn user to decrease,
//? is less than the random number then warn user to increase,
//? is equal to the random number then congratulate the user and tell in how many guesses did the user find the number
//? If user can't find the number in 5 guess then game is lost and display the random number.
//? Hint: you can use this code to generate random number 0-100
//? const winingNumber = Math.round(Math.random() * 100);
