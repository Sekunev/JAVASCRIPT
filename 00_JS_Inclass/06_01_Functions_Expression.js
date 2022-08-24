// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");

// Javascript’te fonksiyonlar ifade (expression) olarak da
// tanımlanabilmektedir.
// Bu yöntemde, fonksiyonlar isimsizdir (anonymous) ve bir değişkene atanırlar. Dolayısıyla fonksiyonun bir dönüş değeri olmalıdır. Bu değişken, fonksiyon olarak kullanılır.

// Bu yöntemde aşağıda görüldüğü gibi fonksiyon tanımlanmadan önce çağrılırsa JS hata verecektir.
// Dolayısıyla expression yöntemini kullanmak için önce fonksiyonu tanımlamak sonra çağırmak gerekir.

//todo FUNCTION EXPRESSION AVANTAJI
// • Fonksiyonları expression yöntemi ile kullanmanın klasik yöntem (declaration) ile kullanmaya nazaran 2 avantajı bulunmaktadır.
// 1. Programcıyı, önce fonksiyonların tanımlanması, sonra kullanılmasına zorladığı için aslında daha düzenli ve daha anlaşılır kod yazmaya olanak sağlamaktadır.
// 2. Fonksiyonların ve değerlerin değişkenlerde saklanmasını gerektirmektedir. Bu da daha sade bir kodlama demektir.

// console.log(tekcift1(5)); //? hata

const tekcift1 = function (sayi) {
  return sayi % 2 ? "tektir" : "çifttir";
};

// console.log(tekcift1(5));

//! Funct Expression yontemi ile tanimlama (declaration)
const tekCift1 = function (sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
};

// console.log(tekCift1(5));

//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log(Number.MIN_VALUE);
// console.log("Girilen sayilarin en buyugu:", buyukBul(n1, n2, n3));
// console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9, -1));
// console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9));
// 3 arguman girilmesi gereken bir fonksiyona 2 arguman direrseniz fonksiyon "undefined" sonucunu döndürür. bunun önüne geçmek için parametreye default değere eşitlemek gerekir. Bu örnekte en büyük sayı istendiği için 3. parametre enküçük sayıya yani "-Number.MAX_VALUE" eşitlenmiştir.

// console.log("Girilen sayilarin en buyugu:", buyukBul(9, 10));

//* ORNEK: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//**************************************************/
const topla = function (s1, s2) {
  return s1 + s2;
};

const cikar = function (s1, s2) {
  return s1 - s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
    default:
      break;
  }
  console.log("SONUC:", sonuc.toFixed(2));
  return sonuc;
};

// console.log(hesapla(4, 3, "/"));
// console.log("*****");
// hesapla(3, 5, "+");
// console.log(hesapla(5, 6, "*"));

// örnekler:
// Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yazalım

const yazdir = function (kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
};

// yazdir("merhaba", 100);

// Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazalım.

function Dhesapla(a, b) {
  let alanı = a * b;
  let cevresi = 2 * (a + b);
  return `Dikdörtgenin alanı ${alanı}, çevresi: ${cevresi}`;
}

console.log(Dhesapla(2, 3));

// Yazı tura uygulamasını fonksiyon kullanarak yapınız?

let yazıturaat = function () {
  let random = Math.random(); //0-1
  if (random > 0.5) {
    console.log("Tura");
  } else {
    console.log("Yazı");
  }
};
// yazıturaat();

// kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız?

function tamBolenler(sayi) {
  let sayilar = [];
  for (let i = 2; i < sayi; ++i) {
    if (sayi % i === 0) {
      sayilar.push(i);
    }
  }
  return sayilar;
}

// console.log(tamBolenler(35));

// Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayalım.

function toplam() {
  //console.log(arguments); // fonksiyona istediğimiz kadar argünam girmanin yolu.
  let sonuc = 0;
  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }
  return sonuc;
}
console.log(toplam(2, 3, 5));
