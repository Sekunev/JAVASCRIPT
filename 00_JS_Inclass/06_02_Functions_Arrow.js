// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 3.YONTEM  : FUNCTION Arrow
//!--------------------------------------------------

console.log("******** 2- Arrow *******");

// Syntax'ı aşağıdaki gibidir.
//! let fonkAdı = (arg1, arg2, .., argN) => expression
//? Dikkat görüldüğü gibi return keyword'u arrow'da yok
// örnek:

// const yashesapla = (dogumtarihi) => 2022 - dogumtarihi;
// console.log(yashesapla(1982));

// const selamver = () => console.log("merhaba");
// selamver();
// const usal = (a, b) => console.log(a ** b);
// usal(5, 5);
// const tekmi = (a) => console.log(a % 2 ? "Tektir" : "çifttir");
// tekmi(-6);

// ***** ÇOK SATIRLI ARROW *****

// Fonksiyon satır sayısı birden fazla ise süslü parantez kullanmalıyız.
// Eğer süslü parantez kullanıldı ise return de kullanmalıyız.
// NOT: Eğer tek satırlık bir fonksiyon yazılacaksa arrow fonksiyonu yazmak çok daha avantajlı. Ama satır sayısı fazla ise o zaman diğer yöntemler ile çok benzer oluyor.

// SORU: Bir dairenin alanını hesaplayan fonksiyonu arrow fonksiyon olarak
// yazınız. Yarıçap prompt ile girilmeli ve sonuç ana programda yazdırılmalıdır.

const daireninAlanı = () => {
  let yariçap = prompt("yarıçapını giriniz");
  return 3.14 * yariçap ** 2;
};

// console.log(daireninAlanı());

// //* ORNEK: Silindir Hacmi
// //************************************************/

// const r = Number(prompt("yaricap giriniz:"));
// const h = Number(prompt("yukseklik giriniz:"));

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// // console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);

// SORU: Doğum tarihini parametre olarak alan ve ana programa yaşı hesaplayıp döndüren fonksiyonu yazınız.

// const tarih = Number(prompt("Dogum Tarihini giriniz:"));

// //! Arrow Func yontemi ile tanimlama
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// //* alternatif
// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

// // console.log("YASINIZ:" + yasHesapla(tarih));
// console.log("YASINIZ:" + yasHesaplaKisa(tarih));

// //?-----------------------------------------

// // console.log("YASINIZ:" + yasHesapla2(tarih));
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alrsiniz.

// //! Func Expression yontemi ile tanimlama
// const yasHesapla2 = function (tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };
// //?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla3(tarih));

// //! Func Declaration yontemi ile tanimlama
// function yasHesapla3(tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// }
// //?-----------------------------------------

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

let stringResult = "1,1";
const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;

  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    stringResult += "," + fib2;
  }
  return fib2;
};

const n = +prompt("n terimini giriniz");
if (n < 0) {
  console.log("Lütfen 0'dan büyük bir sayı giriniz.");
} else {
  console.log(`FIBO(${n})= ${fibo(n)}`);
  console.log(stringResult);
}

//? **** FONKSİYONUN BAŞKA FONKSİYONU ÇAĞIRMASI ****
// • Değişkenler tanımlandığı konuma (scope) göre geçerliliği değişebilmektedir.
// 1. Bir değişken fonksiyon içerisinde tanımlanmış ise sadece o fonksiyon içerisinde geçerlidir. (function-scope).
// 2. Değişken ana programda tanımlanmış ise tüm kod içerisinde geçerlidir
// (global-scope)
// 3. Sadece tanımlandığı alt alanda (blokta) geçerli olan değişkenlere block-scope değişkenler denilir. • ES6 ile gelen bir özelliktir.

//? SCOPE ÖZET
// • Değişken tanımlaması yaparken mümkünse en küçük scope kullanmayı tercih etmek hata ihtimalini azaltacaktır.
// • Bir değişken isim verirken aynı ismi defalarca farklı scope’larda güvenli bir şekilde kullanmanıza imkan tanıyacaktır.
// • Bu sebeplerden dolayı önce block, sonra  function en son olarak global scope kullanmayı tercih etmekte fayda vardır.
// • Ama bu bir zorunluluk değildir. Kodlama tercihidir.
// • Fonksiyonlar ile ilgili bazı İleri seviye konuları daha sonra ele alacağız.

// Function-scoped

// const fonk1 = function () {
//   let sayı1 = 22;
//   console.log(sayı1);
// };
// fonk1();
// console.log(++sayı1);

// Global scope

// let sayı2 = 5;
// const fonk2 = function () {
//   sayı2 = 10;
//   console.log(`Fonk. İçi: ${sayı2}`);
// };
// fonk2();
// console.log(`Fonk. Dışı: ${++sayı2}`);

// Global ve function scope değişkenler aynı anda kullanılır ise:

let sayı3 = 3;
const fonk3 = function () {
  let sayı3 = 7;
  console.log(`Fonk. İçi: ${sayı3}`);
};
fonk3();
console.log(`Fonk. Dışı: ${++sayı3}`);

// BLOCK-SCOPE

// NOT: • Block scope’da değişkene sadece tanımlandığı blok içerisinde (if bloğu, for bloğu v.b) içerisinden erişilebilir.
// • Bu özellik ES6 ile gelmiştir .
// • Daha güvenilir ve okunabilir kod yazmaya olanak sağlamaktadır.

// const fonk4 = function (sayı4) {
//   if (sayı4 < 0) {
//     let negatif = true;
//   }
//   console.log(negatif);
// };
// fonk4(-4);
