let sonuc;

// !aritmetik operatörler 
let a = 10, b = 20, c =30;

sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = a % b; //bolum sonucunda kalan.
sonuc = a++;  // a'yı yazdır sonra 1 artırarak sonuca ata.
sonuc = ++a;  // a'yı 1 artır sonra sonuca ata.
sonuc = a--;  // a yı yazdır sonra 1 eksilterek sonuca ata.
sonuc = --a;  // a'yı 1 eksilt sonra sonuca ata.


// !atama operatörleri
sonuc = a
sonuc += a // sonuc = sonuc + a;
sonuc -= a // sonuc = sonuc - a 
sonuc *= a // sonuc = sonuc * a 
sonuc += a + b; // sonuc = sonuc + a + b
sonuc /= a // sonuc = sonuc / a 

sonuc %= a  // sonuç = sonuç %a;


// !Karşılaştırma operatörleri
sonuc = (a==b) // a,  b ye esıt mıdır dıye sorar ve cevap olarak (true-false) olarak doner.
sonuc = (a!=b) // a,  b ye esıt degıl mıdır dıye sorar ve cevap olarak (true-false) olarak doner.
sonuc = a === b; // a,  b ye esıt mıdır ve "typeof"(verı turu) u aynı mıdır. dıye sorar ve cevap olarak (true-false) olarak doner.
sonuc = (a!==b)  // "a b'ye'esıt ve türü de aynı degıl mı? dıye soru soruyor.
sonuc = (a > b)
sonuc = (a <= b)
sonuc = (3 === '3')  // 3 eşit işareti değer ve tip kontrolü yapar. bu örnekte aynı tür olmadığı için False döner.

// !Mantıksal Operatörler
// && (And)
sonuc = (a > b) && (a>c)
// ?Tum kosulların true olması grekır kı sonuc true olsun

// || (Or)
sonuc = (b > a) || (a > c)
// tum kosullarda false cıkmalı kı sonuc false olsun yoksa bır tane bıle true gorurse sonuc true olacaktır.

// ! (Not)

sonuç = !(a > b)  // a b'den büyük değilmidir ?


// console.log(sonuc)
// console.log(a)
// console.log(b)
// console.log(c)


// uygulama 

// 1- CAn ve Ada'nın Boy ve kilo bilgilerini alın.
// 2- Alınan bilgilere göre boy kilo indexini hesaplayınız.Ada
// formul: kilo / boy karesi

// 3-hesaplanan index bilgisine göre karşılaştırma yapınız.

// 0-18.4: zayıf
// 18.5 - 24.9 Normal
// 25.4 - 29.9 Fazla kilolu
// 30.0 - 34.9 şişman

let IndexAda;
let IndexCan;
const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.70;
const heigtada = 1.50;

IndexAda = (kgAda) / (heigtada*heigtada);
IndexCan = (kgCan) / (heigtada*heigtCan);

console.log(IndexAda.toFixed(2), IndexCan);

let adaindex_yüksekmi = IndexAda>IndexAda;

console.log( "adanın kilo index'i canın  kilo indexinden daha büyük mü? " + adaindex_yüksekmi);

let AdaZayıf = (IndexAda>=0) && (IndexAda<18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<24.9);
let AdaKilolu = (IndexAda>=25) && (IndexAda<29.9);
let AdaŞişman = (IndexAda>=30) && (IndexAda<34.9);

console.log('ada zayıf: ' + AdaZayıf);
console.log('ada Normal: ' + AdaNormal);
console.log('ada Kilolu: ' + AdaKilolu);
console.log('ada Şişman: ' + AdaŞişman);

// --->

// soru : 2 vize (%40) 1 final (%60) notuna göre hesaplanan ortalama için;

// a- Eğer ortalama 50 ve üzeri ise geçti değilse kaldı yazsın. 
// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin. 

let vize1 = 60;
let vize2 = 10;
let final = 70;

let ortalama = ((((vize1 + vize2) / 2) * 0.4) + (final *0.6))

console.log('ortalama:', ortalama )

// if (ortalama >= 50) {
//     console.log('geçtiniz')
// } else {
//     console.log('kaldınız')
// }

// if (ortalama >= 50 && final >= 50) {
//     console.log('geçtiniz')
// } else {
//     console.log('kaldınız')
// }

if (ortalama >= 50 || final >= 70) {
    console.log('geçtiniz')
} else {
    console.log('kaldınız')
}


const firstName = "asd"

if (firstName == "asd") {
    console.log("assffggg");
}






