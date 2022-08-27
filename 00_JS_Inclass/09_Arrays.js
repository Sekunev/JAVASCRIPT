// array oluşturma

let array1 = new Array("semra", "kubra");

let ogrenciler = ["semra", "kubra", "nevra"];

sonuc = ogrenciler.length;

//? Bir değişkenin bir diziyi tutup tutmadığını kontrol etmek içinArray.isArray()yöntemi veya instanceof operatörü kullanın:

const myArr = [1, 2, 3];
const myObj = { firstName: "John", lastName: "Doe", age: 24 };

// console.log(typeof myArr); // object
// console.log(Array.isArray(myArr)); // true
// console.log(myArr instanceof Array); // true
// console.log(typeof myObj); // object
// console.log(Array.isArray(myObj)); // false
// console.log(myObj instanceof Array); // false

//! Array metodları

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" - "); // parametrede ne belirtilmişse elemanları böler ve aralarına parametreyi yerleştirir.

//eleman silme
// sonuc = ogrenciler.pop(); // son eleman silinir ve silinen eleman geri döndürülür. Bu silinme orjinal diziyi de etkiler.
// sonuc = ogrenciler.shift(); // ilk eleman silinir

// eleman ekleme
// sonuc = ogrenciler.push("ceren"); //dizi sonuna eleman ekler.
// sonuc = ogrenciler.unshift("ayşe"); // dizi başına eleman ekler.

let markalar1 = ["mazda", "honda"];
let markalar2 = ["toyota", "huyundai"];

// sonuc = markalar1.concat(markalar2);
// sonuc = markalar1.splice(0, 0, markalar2); // 1. param: "index'den başla", 2. param: ".. eleman sil", 3. param: "bu elemanları ekle. "
sonuc = markalar1.splice(0, 1, "mercedes", "bmw");

// console.log(array1);
// console.log(sonuc, typeof sonuc);
// // console.log(ogrenciler);
// console.log(markalar1);

// *** reverse

// const cwPaths = [
//   "Full-Stack",
//   "AWS-Devops",
//   "Data Science",
//   "Cyber Security",
//   "Salesforce",
// ];
// console.log("Original Array: " + cwPaths);

// // reversing array order
// reversed_arr = cwPaths.reverse();

// // reverse() modifies the original array
// console.log("Array after reverse(): " + cwPaths);

// // reverse() also returns the reversed array
// console.log("Return Value of reverse(): " + reversed_arr);

const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];

console.log(colors.lastIndexOf("Green")); // 5

console.log(colors.lastIndexOf("Green", 3)); // 2

console.log(colors.lastIndexOf("green")); // -1
