let sonuc;

// !aritmetik operatörler 
// *sayısal değerleri  alır ve tek bir sayısal değer döndürür.
let a = 10, b = 20, c =30;

sonuc = a + b; 
sonuc = a - b; 
sonuc = a * b; 
sonuc = a ** b; 
sonuc = a / b; 
sonuc = a % b; //bolum sonucunda kalan.
//? Postfix increment operator.
sonuc = a++;  // a'yı yazdır sonra 1 artırarak sonuca ata.
//? Prefix increment operator.
sonuc = ++a;  // a'yı 1 artır sonra sonuca ata.
//? Postfix decrement operator.
sonuc = a--;  // a yı yazdır sonra 1 eksilterek sonuca ata.
//? Prefix decrement operator.
sonuc = --a;  // a'yı 1 eksilt sonra sonuca ata.

// console.log(sonuc)
// console.log(a)
// console.log(b)
// console.log(c)


// !atama (Assignment) operatörleri
sonuc = a
sonuc += a // sonuc = sonuc + a; //*(Addition assignment)
sonuc -= a // sonuc = sonuc - a  //*(Substraction assignment)
sonuc *= a // sonuc = sonuc * a  //*(Multiplication assignment)
sonuc += a + b; // sonuc = sonuc + a + b
sonuc /= a // sonuc = sonuc / a  //*(Division  assignment)
sonuc %= a  // sonuç = sonuç %a; //*(Remainder assignment)

// console.log(sonuc)
// console.log(a)
// console.log(b)
// console.log(c)


// !Karşılaştırma (Comparison) operatörleri
// ?All comparison operators return Boolean (true or false).

sonuc = (a==b) // ( Equality operator) a,  b ye esıt mıdır dıye sorar ve cevap olarak (true-false) olarak doner.
sonuc = (a!=b) // (Inequality operator) a,  b ye esıt degıl mıdır dıye sorar ve cevap olarak (true-false) olarak doner.
sonuc = a === b; // ( Strict equality operator) a,  b ye esıt mıdır ve "typeof"(verı turu) u aynı mıdır. dıye sorar ve cevap olarak (true-false) olarak doner.
sonuc = (a!==b)  // ( Strict inequality operator) "a b'ye'esıt ve türü de aynı degıl mı? dıye soru soruyor.
sonuc = (a > b) // ( Greater than operator.)
sonuc = (a <= b) // (Less than or equal operator.)
sonuc = (3 === '3')  // 3 eşit işareti değer ve tip kontrolü yapar. bu örnekte aynı tür olmadığı için False döner.

// console.log(sonuc)
// console.log(a)
// console.log(b)
// console.log(c)

// !Mantıksal (Logical) Operatörler
//? Boolean Operatörleri olarak da bilinen mantıksal operatörler, true veya false döndürmek için kullanılır.

// && (And)
sonuc = (a > b) && (a>c)
// *Tum kosulların true olması grekır kı sonuc true olsun
// * (&&) operatörü tüm ifadeleri değerlendirir ve tüm ifadeler true olarak değerlendirilirse son ifadeyi döndürür . Aksi takdirde, false olarak değerlendirilen ilk değeri döndürür.

// || (Or)
sonuc = (b > a) || (a > c)
// tum kosullarda false cıkmalı kı sonuc false olsun yoksa bır tane bıle true gorurse sonuc true olacaktır.
// * (||) operatörü ifadeleri soldan sağa değerlendirir ve değerlendirilen ilk true değeri veya hiçbiri değilse son değeri döndürür.

//  !(Not) boolean değeri tersine çevirir.

// sonuç = !(a > b)  // a b'den büyük değilmidir ?


// console.log(sonuc)
// console.log(a)
// console.log(b)
// console.log(c)

// !The following values are always falsy:
// false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN

// !Everything else is truthy:
// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)




// ! Boş birleştirme operatörü (??) (Nullish Coalescing Operator):
// ?Boş birleştirme operatörü (??), sol taraftaki işleneni null veya undefined olduğunda sağ taraftaki işleneni, aksi halde sol taraftaki işleneni döndüren mantıksal bir operatördür.
// , çift soru işareti (??) ile gösterilen boş birleştirme operatörün ES2020 ile tanıtıldı. Boş bir birleştirme operatörü, iki değeri kabul eden mantıksal bir operatördür:
// syntaxı: value1 ?? value2

// null ?? any => any
// undefined ?? any => any
// Diğer tüm durumlarda ikinci operandın durmuna bakılmaksızın birinci operatörü döndürür.

// let value = null ?? "Oops.. null or undefined";
// console.log(value) //Oops.. null or undefined

// value = undefined ?? "Oops.. null or undefined";
// console.log(value) //Oops.. null or undefined

// value = 25 ?? "Oops.. null or undefined";
// console.log(value) // 25

// value = "" ?? "Oops.. null or undefined";
// console.log(value) // ""

const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;
const valD = "default for D" ?? nullValue;

// console.log(valA); // "default for A" soldaki null olduğu için sağdaki döndü.
// console.log(valB); // "" (as the empty string is not null or undefined) null veya undefined olmadığı için soldaki döndü.
// console.log(valC); // 42 --> null veya undefined olmadığı için soldaki döndü.
// console.log(valD); // sağdakine bakmadı bile null-undefined olmayanı görür görmez döndürdü.

// console.log('Clarus' + 'way');
// let al = 'Full-Stack';
// al += ' Developer';  // a = a + ' Developer';
// console.log(al);


// !diğer Operatörler:

//? "+" dizi birleştirme operatörü iki veya daha fazla diziyi birleştirmek (birleştirmek) için kullanılır.

// console.log('Clarus' + 'way');
let ba = 'Full-Stack';
ba += ' Developer';  // a = a + ' Developer';
// console.log(ba);

//? "+" tür dönüştürme operatörü, dizeleri sayı veri türüne dönüştürmek için kullanılabilir.

// let ac = '55';
// console.log(a, typeof ac); // 55 string
// let bc = +ac;
// console.log(bc, typeof bc);// 55 number

//? instanceof: nesne türü sorgu operatörü, verilen nesnenin nesne türünü belirlemek için kullanılır.

// const arr = [1, 2, 3];
// console.log(arr instanceof Array);// true

//? delete: bir nesnenin özelliğini veya bir dizinin bir öğesini siler.
// const user = { fullName: "John Doe", age: 40}
// delete user.age; // user = { fullName: "John Doe"}
// console.log(user)

//? "," Virgül İşleci, birden çok işleneni değerlendirir ve son işlenenin değerini döndürür.
// let arry = (1, 3, 7); // 7
// console.log(arry)

//! --- UYGULAMA ---

// 1. Write a JavaScript code to calculate multiplication and division of two numbers (input from user). : 5min


// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
// console.log(`${num1} x ${num2} is ${num1 * num2}, \n${num1} / ${num2} is ${num1 / num2}`);

/*
 * 2. area calculation: 7min
 * area of any triangle (given only sides) ---

 * area of rectangle (given only sides)
 * area of circle (given only radius)
 * perimeter of circle (given only radius)
 *
 * pi sayisi olarak :  Math.PI / 3.141592653589793
 */

// let side1 = +prompt('Enter first side');
// let side2 = +prompt('Enter second side');
// let side3 = +prompt('Enter third side');

// const perimeter = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(
//   perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)),
// );

// console.log(`Area of triangle is ${area}, perimeter is ${perimeter}.`);
/*
* 3. temperature convertion : 8min
* celcius to fahrenheit
* fahrenheit to celcius

*/

// let cTemp = +prompt('Enter celcius temperature');
// const cToFahr = (cTemp * 9) / 5 + 32;
// console.log(`${cTemp}°C equals ${cToFahr.toFixed(2)}°F`);

// let fTemp = +prompt('Enter fahrenheit temperature');
// const fToCel = ((fTemp - 32) * 5) / 9;
// console.log(`${fTemp}°F equals  ${fToCel.toFixed(2)}°C`);

/*
 * 4. print today's date separately :8min
 * day of month is 11
 * month of year is 8
 * year is 2022
 */
// const today = new Date();
// console.log(today);

// console.log(today.getFullYear());
// // * use today (.) for needed functions

// console.log(`day of month is ${today.getDate()}`);
// console.log(`month of year is ${today.getMonth() + 1}`);
// console.log(`year is ${today.getFullYear()}`);

/*

* 5. check from three given numbers (non negative integers) that two or all of them have the same rightmost digit. : 10min

* 22 32 42 => true
* 15 24 45 => true
* 33 34 35 => false

*/

/*
stage is yours
There are at least 2 numbers having same first digit: true/false

*/

let p = +prompt('Enter first number');
let q = +prompt('Enter second number');
let r = +prompt('Enter third number');

const result = p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;

console.log(`There are at least 2 numbers having same first digit: ${result}`);