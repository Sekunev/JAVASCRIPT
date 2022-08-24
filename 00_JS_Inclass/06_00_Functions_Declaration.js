// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("**** FUNC DECLARATION ******");

// Javascript’te fonksiyonlar bir kaç farklı şekilde tanımlanabilmektedir. Bu yöntem klasik tanımlamadır.
// Bir fonksiyon bir kere tanımlanır ve program içerisinde istenildiği kadar çağrılabilir.
// Fonksiyonun tanımlanması çağrılmadan önce de yapılabilir sonra da yapılabilir.
// Bir Fonksiyon, argüman (parametre) almak zorunda değildir.
// Bir fonksiyon bir sayı döndürmek zorunda değildir. İhtiyaca göre fonksiyon düzenlenebilir.

//* ORNEK:
//************************************************/
yazdir();
//* Bu yöntemde fonksiyon declare edilmeden invoke edilebir.

//! Fonksiyonun tanimlanmasi (declaration)
function yazdir() {
  console.log("merhaba");
}

// yazdir(); //! invoke, call, cagirma
// yazdir();

//* ORNEK:
//************************************************/

function selamla(ad, soyad = "") {
  console.log(`Merhaba ${ad} ${soyad}`);
}

selamla("can", "yilmaz");
selamla("Ali", "Başaran");
selamla("Ayşe");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//************************************************/

function yashesapla(ad, dogumt) {
  // 1. yöntem
  // const sonuc = `${ad} in yasi ${2022 - dogumt}`;
  // 2. yöntem
  // const sonuc = `${ad} in yasi ${new Date().getFullYear() - dogumt}`;
  // return sonuc;
  // 3. yöntem
  return `${ad} in yasi ${new Date().getFullYear() - dogumt}`;
}

const mesaj = yashesapla("can", "1982");
console.log(mesaj);
console.log(yashesapla("mustafa", "1980"));

//* ORNEK4:
//************************************************/

function tekcift(sayi) {
  return sayi % 2 ? "tektir" : "çifttir";
}
console.log(tekcift(5));
console.log(tekcift(2));

// let sayi = +prompt("Bir sayı giriniz.");
// console.log(tekcift(sayi));
