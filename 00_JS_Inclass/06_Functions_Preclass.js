// ********** FUNCTIONS *********

// function declaration
//? function function_name() {
// function body
// }

// function invocation (calling)
//? function_name();

// örnek:

// function greet() {
//   console.log("Hello");
// }
// greet();

//? Fonksiyonların Sınıflandırılması
// Named functions
// Function expressions
// Arrow functions
// Immediately Invoked Function Expressions (IIFE)

// Function() constructor
// Generator functions

// örnek:
// function sayHi() {
//   return "Hi!";
// }
// function sayHi2() {
//   console.log("Hello!");
// }
// sayHi(); // no output to the console
// console.log(typeof sayHi()); // string
// console.log(typeof sayHi); // function
// sayHi2(); // Hello!
// console.log(typeof sayHi2()); // undefined
// console.log(typeof sayHi2); // function

// function sayHi(userName) {
//   console.log(`Hello! ${userName}`);
// }
// sayHi("Mark");
// sayHi(); // what will be the output? Arguman verilmeyince "Hello! undefined" döndü.

//? JavaScript'te parametreler değere göre iletilir, bu, dış değişkenin işlev gövdesi içinde değiştirilemeyeceği anlamına gelir.

// function sayHi2(userName, company) {
//   console.log(`Hello! ${userName} of ${company}`);
//   company = "Apple";
//   console.log(`Hello! ${userName} of ${company}`);
// }
// let userName = "Mark";
// let company = "Clarusway";
// sayHi2(userName, company);
// console.log(company);
// sayHi2("Matthew"); // what will be the

//? Nesne tipi değişkenler referansla iletilir, yani nesnenin nitelikleri fonksiyon gövdesi içinde değiştirilebilir. Nesnenin bir bütün olarak olmadığını unutmayın.

// var anObj = { name: "Matthew" };
// console.log(anObj);
// // {name: "Matthew"}

// function changeObj(obj) {
//   obj.name = "Mark";
// }
// changeObj(anObj);
// console.log(anObj);
// // {name: "Mark"}

// function changeObj2(obj) {
//   obj = { name: "Mike" };
// }
// changeObj2(anObj);
// console.log(anObj);
// // {name: "Mark"}

// JavaScript'te hoisting., bir işlevi veya değişkeni bildirmeden önce kullanmanıza izin veren bir özelliktir. Bir işlev, bildirilmeden önce çağrılabilir. Örneğin,
// program to print the text
// greet();
// function greet() {
//   console.log("Hello");
// }

// Yukarıdaki programda bildirilmeden önce 'greet' işlevi çağrılır ve çıktı görüntülenir. Bu hoisting nedeniyledir.

// Yalnızca bir işlev ifade olarak kullanıldığında bildirimler kaldırılır, dolayısıyla bir hata oluşur. Örnek olarak;

// program to print the text
// greet();
// let greet = function () {
//   console.log("Hello");
// };

//! **** Function Expression ****

// fonksiyon tanımladığınızda, JavaScript çalışma zamanı fonksiyonunuzu hafızada saklar ve daha sonra atadığınız ismi kullanarak o fonksiyona bir referans oluşturur. Bu ada daha sonra geçerli kapsamda erişilebilir. Bu, bir işlev oluşturmak için çok uygun bir yol olabilir, ancak JavaScript, bir işleve bir ad atamanızı gerektirmez.

// // Named function
// function sayHi() {
//   return "Hello!";
// }
// sayHi();

// // Anonymous (anonim) function
// const sayHi2 = function () {
//   return "Hello!";
// };
// sayHi2();

// İşlev ifadeleri, işlev bildirimi yerine bir ifade içinde işlevler oluşturur. Anonim olabilirler ve/veya bir değişkene atanabilirler.

// anonymous function expression
// const sayHi = function () {
//   console.log("Hello!");
//   console.trace();
// };
// // named function expression
// const sayHi2 = function greet() {
//   console.log("Hello!");
//   console.trace();
// };
// sayHi();
// sayHi2();

// örnek:

// const num = function (a, b) {
//   return a * b;
// };
// console.log(num(5, 7));

//! *** Arrow Functions ***

//? argümansız fonksiyon

// Regular Function
// let d = 4;
// let f = 2;
// function f1() {
//   return d + f + 100;
// }

// Word işlevini kaldırın ve oku bağımsız değişken ile açılış gövdesi küme parantezinin arasına yerleştirin.

// let d = 4;
// let f = 2;
// () => {
//   return d + f + 100;
// };

// Gövde parantezlerini ve return'u kaldırın - ima edilir.

// let a = 4;
// let b = 2;
// () => a + b + 100;

//? tek argümanlı fonksiyon

// Regular Function
// function f2(a) {
//   return a + 100;
// }

// Word işlevini kaldırın ve oku bağımsız değişken ile açılış gövdesi küme parantezinin arasına yerleştirin.

// (a) => {
//   return a + 100;
// };

// Gövde parantezlerini ve kelime dönüşünü kaldırın - ima edilir.

// (a) => a + 100;

// Argüman parantezlerini kaldırın.

// a => a + 100;

//? birden fazla argümanla işlev

// Regular Function
// function f3(a, b) {
//   return a + b + 100;
// }

// Word işlevini kaldırın ve oku bağımsız değişken ile açılış gövdesi küme parantezinin arasına yerleştirin.

// (a, b) => {
//   return a + b + 100;
// }

// Gövde parantezlerini ve kelime dönüşünü kaldırın - ima edilir.

// (a, b) => a + b + 100;

// ok işlevini adlandırma

// // Regular Function
// function hundredify(a) {
//   return a + 100;
// }

// // Arrow Function
// let hundredify = (a) => a + 100;

//? Immediately Invoked Function Expressions (IIFE)

// named IIFE recursive
// (function trian(num) {
//   if (num === 1) return 1;
//   return num + trian(num - 1);
// })(3);
// // with anonymous function expression non recursive
// (function (num) {
//   return (num * (num + 1)) / 2;
// })(3);

// let num1 = 10;
// var num2 = 20;
// console.log("at the global scope");
// console.log({ num1, num2 });
// func1();
// console.log({ num1, num2 });
// console.log({ num3, num4 });

// function declaration
// function func1() {
//   let num1 = 101;
//   let num2 = 102;
//   var num3 = 103;
//   console.log("..inside func1");
//   if (num1 < num2) {
//     console.log("inside if block");
//     let num1 = 201;
//     // var num2 = 205;
//     console.log({ num1, num2 });
//     console.log({ num3, num4 });
//     // let num3 = 206;
//     var num4 = 204;
//     num1++;
//     num2++;
//     num3++;
//     num4++;
//     console.log({ num1, num2 });
//     console.log({ num3, num4 });
//   }
//   console.log("after if block");
//   num3++;
//   num4++;
//   console.log({ num1, num2 });
//   console.log({ num3, num4 });
// }
