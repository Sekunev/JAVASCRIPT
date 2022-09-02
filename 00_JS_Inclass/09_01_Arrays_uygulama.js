// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.

let dizi = ["Elma", "Armut", "Muz", "Çilek"];
console.log(dizi);

// 2- Dizi kaç elemanlıdır?
console.log(dizi.length);

// 3- Dizinin ilk ve son elemanı nedir?
console.log(dizi[0], dizi[dizi.length - 1]);

// 4- Elma dizinin bir elemanımıdır?
console.log(dizi.includes("Elma"));
console.log(dizi.indexOf("Elma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

dizi.push("kiraz");
console.log(dizi);

// 6- Dizinin son 2 elemanını siliniz.

let n = dizi.pop();
let m = dizi.pop();

dizi.splice(dizi.length - 2, 2);

console.log(dizi);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet  2009 (60,60,70)
    */

let ogr_1 = ["Yiğit", "Bilgi", 2010, [70, 60, 80]];
let ogr_2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
let ogr_3 = ["Ahmet", 2009, [60, 60, 70]];

let ogrenciler = [ogr_1, ogr_2, ogr_3];

let ogr1Yas = new Date().getFullYear() - ogrenciler[0][2];
let ogr2Yas = new Date().getFullYear() - ogrenciler[1][2];
let ogr3Yas = new Date().getFullYear() - ogrenciler[2][1];

console.log(ogr1Yas, ogr2Yas, ogr3Yas);

let ogr1Not =
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) /
  ogrenciler[0][3].length;
let ogr2Not =
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) /
  ogrenciler[1][3].length;
let ogr3Not =
  (ogrenciler[2][2][0] + ogrenciler[2][2][1] + ogrenciler[2][2][2]) /
  ogrenciler[2][2].length;

console.log(ogr1Not.toFixed(1), ogr2Not.toFixed(1), ogr3Not.toFixed(1));

dizi = ["Elma", "Armut", "Muz", "Çilek"];

dizi.splice(-2, 2, "nar");

console.log(dizi);

//Q1 -  Verilen arrayı elemanların baş harflerini içeren bir stringe dönüştürün.

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

input.map((n, i, arr) => {
  arr[i] = n[0].toUpperCase();
});

console.log(input.toString());

// 6- Dizinin son 2 elemanını siliniz.

let dizi = ["Elma", "Armut", "Muz", "Çilek"];

let n = dizi.pop();
let m = dizi.pop();

dizi.splice(dizi.length - 2, 2);

console.log(dizi);

dizi = ["Elma", "Armut", "Muz", "Çilek"];

dizi.splice(-2, 2, "nar");

console.log(dizi);
