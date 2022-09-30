// const brackets1 = "{ [ ( ] ) }"; //* false
// const brackets2 = "[([({})})({})]"; //* false
// const brackets3 = "[({})]"; //* true

// const bracketValidator = (str) => {
//   while (str.includes("()") || str.includes("[]") || str.includes("{}")) {
//     str = str.replace("()", "").replace("[]", "").replace("{}", "");
//   }
//   return str === "";
// };
// console.log(bracketValidator(brackets1));
// console.log(bracketValidator(brackets3));

// ******************Hava Durumu****************

console.log("Hava Durumu");

const sehir = document.querySelector("#sehir");
const liste = document.querySelector("#liste");
const key = "6e1a3eda9fa53b82169bd49471c74f36";
let city = "";
// * const api =`https://api.openweathermap.org/data/2.5/weather?q=konya&appid=6e1a3eda9fa53b82169bd49471c74f36`;

const weather = () => {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data),
      //  console.log(data.name);
      //  console.log(Math.round(data.main.temp) + " °C");
      //  console.log(data.weather[0].description);
      let icon = data.weather[0].icon;
      // console.log(icon);
      let durum = data.weather[0].description;
      let derece = Math.round(data.main.temp) + " °C";
      return tahmin(data.name, derece, icon, durum);
    });
};

// weather(api);

function tahmin(isim, derece, icon, durum) {
  liste.innerHTML += `<li> ${isim} <br> ${derece} <br> <img src="http://openweathermap.org/img/w/${icon}.png" alt=""> <br> ${durum} </li>`;
}

sehir.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    city = sehir.value;
    console.log(city);
    weather();
  }
});
//  ******** Hava durumu ***********
// 1
// class Animal {
//   static belly = [];
//   eat() {
//     Animal.belly.push("food");
//   }
// }
// let x = new Animal();
// x.eat();
// console.log(Animal.belly[0]); //Prints food

// 4
// let x = 0;
// async function test() {
//   x += await 2;
//   console.log("async", x);
// }
// test();
// x += 1;
// console.log(x);

// 6
// const obj = { someProp: "someValue", anotherProp: "anotherValue" };
// console.log(Object.keys(obj));

// 8
// . Neden kodunuz için eşzamansız bir yapı seçesiniz?
// A. ES6 sözdizimini kullanmak için
// B. Ayrıştırıcıların kodunuzu işlerken tüm JavaScript sözdizimi kurallarını uyguladığından emin olmak için
// C. Kodunuzun daha aşağısındaki görevlerin, önceki görevler tamamlanana kadar başlatılmamasını sağlamak için
// D. Biraz zaman alabilecek görevleri, sonraki görevlerin hemen yürütülmesini engellemeden başlatmak için

// 10
// console.log("I");
// setTimeout(() => {
//   console.log("love");
// }, 0);
// console.log("Javascript!");

// 11

// Neden bir JavaScript dosyasına "kullanım katı" ifadesi eklersiniz?
// A. ayrıştırıcılara JavaScript sözdiziminizi gevşek bir şekilde yorumlamalarını söylemek
// B. ayrıştırıcılara kodunuzu işlerken tüm JavaScript sözdizimi kurallarını zorlamalarını söylemek
// C. tarayıcıya kodda bulduğu hataları otomatik olarak düzeltmesi talimatını vermek
// D. kodunuzda ES6 özelliklerini etkinleştirmek için

// 12

// Bir kayıt koleksiyonunu depolamak için Diziler yerine Nesneler ile çalışmak neden genellikle daha iyidir?
// A. Nesnelerle çalışmak kodu daha okunaklı hale getirir.
// B. Nesneler depolama açısından daha verimlidir.
// C. Çoğu işlem bir kaydı aramayı içerir ve nesneler bunu dizilerden daha iyi yapabilir.
// D. Bir nesneye kayıt eklemek, bir kaydı bir diziye göndermekten çok daha hızlıdır

// 14

// var v = 1;
// var f1 = function () {
//   console.log(v);
// };
// var f2 = function () {
//   var v = 2;
//   f1();
// };
// f2(); //1

// function greeting(name) {
//   alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);
