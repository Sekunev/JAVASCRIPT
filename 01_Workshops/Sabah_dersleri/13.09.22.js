//* EXAMPLE-1
// Todo App başlığını getElementById yöntemi ile stil Verin.

const button = document.getElementById("title");
button.style.background = "black";
button.style.color = "white";

//* EXAMPLE-2
// Görev 1'e getElementsByTagName metodu ile yeşil backgrand verin.

const list = document.getElementsByTagName("li");
console.log(list[0]); //? HTML Collection
list[0].style.background = "yellow";
// item ilede elemanlara erişiliyor

// 1. görevin karşısına (item ile) 'preclassları bitir' yazısı ekleyin.

const elementone = list.item(0);
elementone.textContent = "Görev 1: preclassları bitir";

// görev 2'yi innerText ile consola yazdırın.
console.log(list[1].innerText);

// innerText html kodlarına bakarak text veriyor.
// textContent bütün text'leri veriyor.
// (textContent) bu metodlar hem içerik göstermeye hemde değiştirmeye yarıyor.

//* EXAMPLE-3
// getElementsByClassName yöntemini kullanarak bütün görevleri consola yazdırın.

let liler = document.getElementsByClassName("task");
console.log(liler);

//?Array.from()
const arrliler = Array.from(liler);
console.log(arrliler);

arrliler.forEach((x) => console.log(x.innerText));

//?Spread
[...arrliler].forEach((x) => console.log(x.innerText));

// tüm görevlerin rengini mor'a çevirin.

[...arrliler].forEach((x) => (x.style.color = "purple"));

//* EXAMPLE-4

// queryselector() (etiket) yöntemi ile görev 1'in bg' ını beyaz yapınız.

const ilkli = document.querySelector("li");
ilkli.style.background = "white";

// queryselector() (class) yöntemi ile görev 4-5-6 ya'in sarı bg veriniz.

const buttomborder = document.querySelector(".task-class");

buttomborder.style.background = "yellow";

// queryselector() (id) yöntemi ile görev 3'e cursor pointer özelliği veriniz.

let pointer = document.querySelector("#g3");
pointer.style.cursor = "pointer";

// queryselector() yöntemi ile part-1'e bg özelliği veriniz.

let h2bg = document.querySelector("#task-list h2");

h2bg.style.background = "blue";

//* EXAMPLE-5

// QUERYSELECTORALL() yöntemi ile consola tüm görevleri yazdırın.

let consli = document.querySelectorAll("ul li");
console.log(consli); //NodeList

// spread veya array from kullanmadık.
consli.forEach((a) => {
  console.log(a.textContent);
});

//* EXAMPLE-6

// Görev 6 nın parentini consola yazdırınız.

let gor6 = document.querySelector(".task2");

console.log(gor6.parentElement);
console.log(gor6.parentNode);

// Görev 6 nın parentine border verniz.? (traverse)

const gor6Parent = gor6.parentNode;

gor6Parent.style.border = "2px solid red";

// Görev 6 nın parentlerinden ilk  ul ın  bg'sini blue yapın.  (closest)

const gor6ul = gor6.closest("ul");
gor6ul.style.background = "blue";

// task-list id sinin alt elemanlarını (children) consola yazdırın. 2. çocugun bg sini değiştirin.

let tasklist = document.querySelector("#task-list");

console.log(tasklist.children);

tasklist.children[2].style.background = "yellow";

// görev 5 in kardeşlerine ulaşın farklı bg'ler verin.

let gorev5 = document.querySelector(".task-class").children[2];

gorev5.previousElementSibling.style.background = "yellow";
gorev5.nextElementSibling.style.background = "red";

//* EXAMPLE-7

// Part 1 altına bir p elementi ekleyip içeriğine "Bugün yapılacaklar listesi" ekleyin.

let newP = document.createElement("p");
newP.id = "newpar";
newP.setAttribute("class", "newclass");
// 1. parametre ne vermek istediğimizi, 2. adını ifade eder.
const text = document.createTextNode("Bugün yapılacaklar listesi");
newP.appendChild(text);
console.log(newP);

let h2 = document.querySelector("#task-list h2");
h2.after(newP);
// h2.before(newP);

// console.log(newP.getAttribute("class"));

//? INNER HTML ile Görev 7 yazdır.

const ul = document.querySelector(".task-class");
ul.innerHTML += `<li id="list-id" class="list">Görev 7</li>`;
