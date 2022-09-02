//! Q1 -  Verilen arrayı elemanların baş harflerini içeren bir stringe dönüştürün.

const input = [
  "Dan",
  "Özge",
  "ihsan",
  "Erhan",
  "burhan",
  "Cooper",
  "Adil",
  "Nurullah",
  "semih",
];

let str1 = input
  .map((n, i, arr) => (arr[i] = n[0].toUpperCase()))
  .toString()
  .replaceAll(",", "");
// console.log(input);
// console.log(str1);

//! Q2- Dizinin son 2 elemanını siliniz.

let dizi = ["Elma", "Armut", "Muz", "Çilek"];

// let x = dizi.pop();
// let y = dizi.pop();

// console.log(x, y);

console.log(dizi.splice(dizi.length - 2)); // silinenler.

console.log(dizi); // dizinin silinmiş hali.

console.log(dizi.at(-2));
console.log(dizi);
//! Q3 Armut ile Muz arasına "Nar" elemanı ekleyin.
dizi = ["Elma", "Armut", "Muz", "Çilek"];

dizi.splice(2, 2, "Nar");
// ikinci eleman kaç adet silmek istiyorsak onu ifade ediyor.

console.log(dizi);

//! Q4 yukardaki dizinin son elemanını çilek ise consola 'Son eleman çilektir' yazdıran fonksiyonu Short-circuit yöntemi'ni kullanarak yazınız.
dizi = ["Elma", "Armut", "Muz", "Çilek"];

let cilekmi = (arr) => arr[arr.length - 1] === "Çilek" && "Son eleman çilektir";

console.log(cilekmi(dizi));

//! Q5 İki sıralı sayı dizisini alan ve sonuç olarak bunları tek bir dizide birleştiren bir işlev yazın.
A = [];
B = [11, 13, 17];
expectedOutput = [11, 13, 17];

let a = [12, 14, 16];
let b = [11, 13, 17];
expectedOutput = [11, 12, 13, 14, 16, 17];

console.log(a.concat(b).sort((a, b) => a - b));

// 2. yöntem

let h = [];

for (let i in a) {
  h.push(b[i]);
  h.push(a[i]);
}
console.log(h.sort((a, b) => a - b));
