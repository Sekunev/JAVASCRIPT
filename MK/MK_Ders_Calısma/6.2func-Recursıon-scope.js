// ? =================================================
// ?           FONKSİYONLAR - RECURSIVE
// ? ================================================

/*
 * Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.(tanımı)
 * Özellikle karmasik matematiksel hesaplamalarin kodlamasini
 * kolaylaştirmak icin kullanilir.(neden kullanmalıyımın cevabı)
 * Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alınabilir. (dezavantajı) */

//? ORNEK: Girilen n. terime kadar Fibonacci sayılarının toplamini hesaplayarak yazdiran fonksiyonu recursive olarak kodlayiniz.

console.log("****** 2 - RECURSION ********");

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
//! f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  //dıkkat edınız... burada arrow yontemıyle fıbo fonksıyonu olusturuyoruz. daha sonra en asagıda bu fonk.cagırarak ıslem yaptırtıyoruz...
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

const n = +prompt("n terimini giriniz:");
console.log(`FIBO(${n})= ${fibo(n)}`);

/********************************************************************************************************************************************/

// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================
//bır degısken bır fonksıyon ıcerısınde tanımlanmıssa sadece o fonksıyon ıcerısınde gecerlı olması----> //? functıon-scope
//bır degısken ana program ıcerısınde tanımlanmıssa tum kod ıcerısınde gecerlı olması----> //? global-scope
// sadece tanımlandıgı alt alanda(blokta) gecerlı olan degıskankere de ----->//? block-scope                    degıskenler denır.
console.log("******* 3 - SCOPE ********");

let sayi1 = 5; //! Global Scope
console.log(sayi1); //! 5

const fonks1 = function () {
  sayi1 = 22;
  console.log(sayi1); //! 22
};
fonks1();

console.log(sayi1++); //! 22 // ılk basta degerı yazdır daha sonra arttır dedıgı ıcın bureda deger 22 olur
console.log(sayi1); //!23 //yukarıda deger yazıdırlıp daha sonra degerı arrtrıldıgı ıcın suan degerı yazdırırsak arttırılmıs olarak yazdırır = 23
/************************************************************************************************************************************************/
console.log(++sayi1); //! 24  //ılk basta degerı arttır daha sonra yazdır dedıgı ıcın burada deger 24 olur
console.log(sayi1); //! 24 yukarıda deger yazıdırlıp daha sonra degerı arrtrıldıgı ıcın suan degerı yazdırırsak arttırılmıs olarak yazdırır = 24
//? global degerı kodun herhangı bır yerınde(fonk.ıcınde-dısında...) degıstırebılırız. kendısıne atanan yenı deger (yukarıdakı ornekte let sayı1=5 ıken daha sonra ---> sayı1=22 olarak yenıden deger ataması yapıldı) onun guncel degerı olur. yanı degısır. daha sonra kullanıldıgında en guncel degerıyle sahneye cıkar.
//? --------------------------------------

const sayi2 = 7; //! Global scope
console.log(sayi2); //! 7

const fonks2 = () => {
  const sayi2 = 11; //! Function-scope ---> burada yukarıda global scope da tanımlanmıs bır  const sayı2 degıskenı yenıden tanımlanıyor (const sayı2=11 olarak).ama dıkkat edın burası bır fonksıyonun ıcı ve bu sebele func.scope alanınada bır tanımlama yapmıs oluyorsunuz. burada tanımlanan sadece burada gecerlıdır sadece fonks2 ıcınde gecerlıdır. dısarıya cıktınız mı bu deger gecerlı olmaz yıne global scope da yapılmıs daha oncekı tanımlama degerı gecerlıdır. yanı dısarıda(en asagıda gorulecektır) const sayı2=11 degıl tekrar const sayı2=7 olacaktır.
  console.log(sayi2); //! 11
  //console.log(sayi2++); //! HATA VERECEKTIR...CONST SADECE BIR KEZ TANIMLANIR UZERINE EKLEME YAPILAMAZ...
};

fonks2();
console.log(sayi2); //!7

if (sayi2 === 8) {
  let sonuc = "Merhaba";
} else {
  sonuc = "Nasilsin"; //! Hoisting oluyor, yani degisken global hale geliyor.
  // console.log(sonuc);
}

console.log(sonuc);
