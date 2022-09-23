// console.log("Hello.");
// setTimeout(function () {
//   console.log("Goodbye!");
// }, 2000);
// console.log("Hello again!");

//Say "Hello."
//Say "Hello again!"
//Do nothing for two seconds.
//Say "Goodbye!"

//! Async callbacks
// Bir zaman uyumsuz geri çağırma örneği, addEventListener()yöntemin ikinci parametresidir.

// document.addEventListener("click", function (event) {
//   console.log("Clicked!");
// });

// setTimeout

// belirtilen süreden sonra bir kod bloğu yürütür. Yöntem, kodu yalnızca bir kez yürütür.

// program to display a text using setTimeout method
// function hello() {
//   console.log("Hello world");
// }
// let intervalId = setTimeout(hello, 3000);
// console.log("This message is shown first");

// Yukarıdaki programda, yöntem 3000 milisaniye ( 3 saniye) sonra işlevi setTimeout()çağırır .

// Bu nedenle program, Hello world metnini 3 saniye sonra yalnızca bir kez görüntüler .nsole.log("Id: " + intervalId);

// Verilen zamanda aramadan önce zaman aşımını iptal et
// program to stop the setTimeout() method
// let count = 0;

// function creation
// function increaseCount() {
//   count += 1;
//   console.log(count);
// }

// let id = setTimeout(increaseCount, 3000);
// clearTimeout(id);
// console.log("setTimeout is stopped.");
// expected output: setTimeout is st

// Her 3 Saniyede Bir Gösterim Süresi

// program to display time every 3 seconds
// function showTime() {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
//   setTimeout(showTime, 3000);
// }
// showTime();

// setInterval

// Yöntem setInterval(), verilen her zamanlama olayında bir kod bloğunu tekrarlar.

// // program to display a text using setInterval method
// function hello() {
//   console.log("Hello world");
// }
// setInterval(hello, 2000);

// program to display time every 5 seconds
// function showTime() {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// }
// let display = setInterval(showTime, 5000);

// Clearinterval
// Bu işlev çağrısını durdurmak istiyorsanız, clearInterval()yöntemi kullanabilirsiniz.

// program to stop the setInterval() method after five times
// let count = 0;
// let interval = setInterval(function () {
//   count += 1;
//   if (count === 5) {
//     clearInterval(interval);
//   }
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// }, 2000);

// Callback Hell

// Birbirine bağlı zaman uyumsuz kodlar yazmak istiyorsanız, iç içe geri arama kullanabilirsiniz. Ancak bu iyi bir programlama yaklaşımı değildir. Geri arama cehennemini anlamak ve sürdürmek zordur.

// setTimeout(() => {
//   console.log("john:Hi");
//   setTimeout(() => {
//     console.log("Sarah: Hello");
//     setTimeout(() => {
//       console.log("John: How Are you?");
//       setTimeout(() => {
//         console.log("Fine and you?");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise Oluşturucu

// let myPromise = new Promise(function (resolve, reject) {
//   // producing code
//   // ... takes some time
//   // eventually, the producing code will call either the resolve() or reject() function
//   // but for now, it is pending
//   // only one of the two functions will be called, the other one will be ignored
//   resolve("Success!"); // fulfilled
//   // resolve receives a value that will be passed to the consuming code
//   reject("Failure!"); // rejected
//   // reject receives a value that will be passed to the error handling consumer code
// });
// // consuming code
// myPromise.then(
//   function (value) {
//     // consuming code
//     console.log(value); // "Success!"
//   },
//   function (error) {
//     // error handling consumer code
//     console.log(error); // "Failure!"
//   }
// );

// fetch("products.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (json) {
//     products = json;
//     initialize();
//   })
//   .catch(function (err) {
//     console.log("Fetch problem: " + err.message);
//   });

//   Then ( ) bloğu, önceki işlem başarılı olursa çalışacak bir geri arama işlevi içerir ve her geri arama, önceki başarılı işlemin sonucunu girdi olarak alır, böylece ileri gidebilir ve ona başka bir şey yapabilirsiniz.
// ➤ Sondaki catch () bloğu, .then() bloklarından herhangi biri başarısız olursa çalışır - eşzamanlı try...catch bloklarına benzer şekilde, catch() içinde kullanılabilecek bir hata nesnesi bulunur. meydana gelen hatanın türünü bildirmek için

// finally() method

// let myPromise = new Promise(function (resolve, reject) {
//   // producing code
//   // ... takes some time
//   resolve("Success!"); // fulfilled
//   // or
//   reject("Failure!"); // rejected
// });

// myPromise
//   .then(function (value) {
//     // consuming code
//     console.log(value); // "Success!"
//   })
//   .catch(function (error) {
//     // error handling consumer code
//     console.log(error); // "Failure!"
//   })
//   .finally(function () {
//     // cleanup code
//     console.log("Cleanup!");
//   });

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { username: "john", email: "john@test.com" },
//         { username: "jane", email: "jane@test.com" },
//       ]);
//     }, 3000);
//   });
// }
// function onFulfilled(users) {
//   console.log(users);
// }
// const promise = getUsers();
// console.log(promise);
// promise.then(onFulfilled);

// Async/await

// async function getUser(userId) {
//   await Promise.reject(new Error("Invalid User Id"));
//   // or
//   throw new Error("Invalid User Id");
// }
// // handling errors with try... catch
// async function showServiceCost() {
//   try {
//     let user = await getUser(100);
//     let services = await getServices(user);
//     let cost = await getServiceCost(services);
//     console.log(`The service cost is ${cost}`);
//   } catch (error) {
//     console.log(error);
//     // we can also throw the error
//     throw error;
//     // or like below
//     throw new Error("some specific error message");
//   }
// }

// fetch("/readme.txt")
//   .then((response) => response.text())
//   .then((data) => console.log(data));

// async function fetchText() {
//   let response = await fetch("/readme.txt");
//   let data = await response.text();
//   console.log(data);
// }

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function fetchText() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/8");
  console.log(response.status); // 200
  console.log(response.statusText); // OK
  if (response.status === 200) {
    let data = await response.text();
    // handle data
  }
}
fetchText();
