//* EXAMPLE-1
// Todo App başlığını getElementById yöntemi ile stil Verin.

const button = document.getElementById("title");

button.style.background = "black";
button.style.color = "white";

console.log(button.id);
console.log(button.className);
console.log(button.classList);

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
list.innerText = "aa";
list.innerHTML = "<p>bb</p>";

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

// ***** EVENTS *****
//* EXAMPLE-1 (Mouse Over, Mouse Out )
// PART 1 mouse üzerine geldiğinde mavi ayrıldığında kırmızı yapınız.

let part1 = document.querySelector("#task-list h2");
console.log(part1);
part1.onmouseover = function () {
  part1.style.color = "blue";
  part1.style.background = "white";
};
part1.onmouseout = function () {
  part1.style.color = "red";
  part1.style.background = "green";
};

// addEventListener yöntemi
part1.addEventListener("click", () => {
  alert("part1 tıklandı.");
});

// butona tıklandığında boşsa değer girilmedi uyarısı versin. doluysa ne yazdıysak o değeri versin.

document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("input");
  !input.value ? alert("boş") : alert(`${input.value} girdiniz`);
  input.value = "";
});

// görev-1,2,3 üzerine gelindiğinde büyüsün.

let büyütec = document.querySelectorAll(".task");
büyütec.forEach((element) => {
  element.style.transition = "all .5s";
  element.onmouseover = () => {
    element.style.fontSize = "2rem";
    element.style.transform = "translateX(20px)";
  };
  element.onmouseout = () => {
    element.style.fontSize = "1rem";
    element.style.transform = "translateX(-20px)";
  };
});

// sayfa yüklendiğinde input ta otomatik kursor olsun. (focus)
// window.onload = function () {
//   document.querySelector("#input").focus();
// };
// **alternatif çözüm
window.addEventListener("load", () => {
  document.querySelector("#input").focus();
});

// Proğramla Dilleri
const langinput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langlist = document.querySelector("#lang-list");

const newUl = document.createElement("ul");
langlist.appendChild(newUl);
addBtn.addEventListener("click", () => {
  if (!langinput.value) {
    alert("Bir dil giriniz.");
  }
  if (langinput.value.toLowerCase() === "javascript") {
    newUl.innerHTML += `<li class = "text-danger">${langinput.value}</li>`;
    langinput.value = "";
  } else {
    newUl.innerHTML += `<li>${langinput.value}</li>`;
    langinput.value = "";
    console.log(newUl);
  }
  langinput.focus();
});

// newUl.classList.add(class="text-danger");
// deleteBy
deleteBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("silinecek öge yok.");
});

// key event

langinput.addEventListener("keydown", (event) => {
  // console.log(event);
  // console.log(event.target);
  // console.log(event.keyCode);
  // console.log(event.code);

  if (event.keyCode === 13) {
    addBtn.click();
  }
  if (event.code === "Delete") {
    deleteBtn.click();
  }
});
// kırmızı yap

langinput.addEventListener("keydown", (event) => {
  // console.log(event);
  // console.log(event.target);
  // console.log(event.keyCode);
  // console.log(event.code);

  if (event.keyCode === "javascript") {
    addBtn.click();
  }
  if (event.code === "Delete") {
    deleteBtn.click();
  }
});

window.addEventListener("load", () => {
  langinput.focus();
});
