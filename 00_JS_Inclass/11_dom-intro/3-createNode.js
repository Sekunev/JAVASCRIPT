console.log("**** CREATE NODE ****");

//?Yeni bir P elementi olusturalim
const newP = document.createElement("p");
newP.id = "new-par";
newP.setAttribute("class", "new-class");
const text = document.createTextNode("This is a new p element");
newP.appendChild(text);
console.log(newP);

const h2 = document.querySelector(".item-list h2");
h2.after(newP);

//? getAttribute()
console.log(newP.getAttribute("class")); // newP elementinin class'ı nedir getir..
console.log(newP.getAttribute("id")); // newP elementinin id'sı nedir getir..
console.log(newP.getAttribute("name")); // newP elementinin name'ı nedir getir..

//? classList
console.log(newP.classList.contains("par")); //? true-false () --> newP elementinde "par" isimli class varmı
newP.classList.add("new-class"); // newP elementine "new-class" isimili class ekle.
console.log(newP);
newP.classList.remove("new-class"); // newP elementinden "new-class" isimili classı sil.
console.log(newP);
newP.classList.toggle("new-class"); // newP elementinden "new-class" isimili clas varsa sil. yoksa ekle.
console.log(newP);
newP.classList.toggle("new-class"); // newP elementinden "new-class" isimili clas varsa sil. yoksa ekle.
console.log(newP);

//? INNER HTML (Ciddi Guvenlik aciklari var)
const ul = document.querySelector("ul");
ul.innerHTML += `<li id="list-id" class="list">Boostrap</li>`;
