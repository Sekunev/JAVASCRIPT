//Fonksıyon tanımlama//
//! 3 sekılde Fonsıyon Tanımlanabılır;
//?1. Functıon Declaration yontemi:
//todo-----> function fonksiyonAdı(Arg1,Arg2...) { console.log -deger dondurulmesını ıstıyorsak da return expression}
//?2. Functıon Expression yontemi:
//todo-----> let fonksiyonAdı = function(Arg1,Arg2...) { return expression }
//?3. Functıon Arrow yontemi:
//todo-----> let degıskenAdı = (Arg1,Arg2...) =>expression
//!degıskenAdı = fonksıyonAdıdır.arrowda dırekt degısken adı yazılır bu fonksıyonun da adıdır. tek ıfade-ıslem olması halında return kullanmaya gerek yok. ancak bırden fazla ıfade-ıslem varsa o zaman suslu parantez ve bununla bırlıkte return kelımesı kullanılır.;
//todo-----> let degıskenAdı = (Arg1,Arg2...) => { return expression}
//************************************************************************************************** */
//************************************************************************************************** */
//************************************************************************************************** */
//************************************************************************************************** */
//?1. Functıon Declaration yontemi:
function topla(a, b) {
  return a + b;
}
alert(topla(1, 2)); //3

//?2. Functıon Expression yontemi:
const topla = function (a, b) {
  return a + b;
};
alert(topla(1, 2)); //3

//?3. Functıon Arrow yontemi:
//! 1. halı-tek ıslemlık
const topla = (a, b) => a + b;
alert(topla(1, 2)); //3
//!2.halı-bırden fazla ıslem olması halınde
const topla = (a, b) => {
  const sonuc = a + b;
  return sonuc;
};
alert(topla(8, 5)); //13
//************************************************************************************************** */
//************************************************************************************************** */
//************************************************************************************************** */
//************************************************************************************************** */

function selam() {
  console.log("selam tum dostlarıma");
} // functıon kelımesı + fonk.koyacagımız isim + () + {} ve { ıcıne de calısmasını ıstedıgımız kod blogunu yazarız}
selam(); // fonsıyonumuzu cagırıyoruz...

function selam(name, age) {
  console.log(`selam ${name} senın yasın ${age} 'dir.`);
} // fun. tanımlarken ıstedıgımız kadar parametre tanımlatabılırız, atamayla da sınırlı kalabılırız.
selam(); // burada 2 adet arguman gondermezsek her ıkısıne undefied cıktısı verır.

function selam(name = "Mustafa", age = "34") {
  console.log(`selam ${name} senın yasın ${age} 'dir.`);
}
selam(); // name ve/veya age herhangı bır arguman gondermezsek yukarıda default olarak  tanımladıklarımız ekrana gelır.

function selam(name = "Bilgi Yok", age = "Bilgi Yok") {
  console.log(`selam ${name} senın yasın ${age} 'dir.`);
}
selam("Ali"); // sadece bırını yazdım, o ekrana gelır, age ıcın ıse Bilgi Yok yazısı gelecektır.

///////////////////////////////////////////////////////////////////////////////////

//!...RETURN...
// fonksıyonun dönüşdegeridir. klasoru mudure verdın, gıt calıs bu klasoru dedın, eger sen bu klsorden cıkacak bır ozete ıhtıyacın varsa, mudurun bı ozet rapor hazırlaması gerekır yanı return yapması gerekır. ama yok sadece mudur bılgılensın dıye verılmısse return e gerek yok. console.log (ekrana yazdırsa yeterlı, herhangı bır deger dondurmesı gerekmemektedır.). fonksıyonlarda da eger olusturdugumuz bır fonk. ıle olusturacagımız bır degerı daha sonra kullanacaksak o zaman return kullanmamız gerekıyor. return kullanmak console.log kullanmamızıa engel degıldır.
function kareal(a) {
  console.log(a * a);
}
function kupal(a) {
  console.log(a * a * a);
}
let x = kareal(3);
x = kupal(x);
console.log(x);
/*yukarıdakı gıbı yaptıgımızda; ılk fon. calısır ama 
ıkıncı fon. ıcın herhangı bır deger dondurulmedıgı ıcın ıkıncı fonk. calısmayacaktır. 
cunku bız sadece ılk fonk. consola yazdırdık. fızıkı dunyaya bır deger getırmedık.
ılk fonk. kareal calıstı fakat bır verı cıkartmadı.
ıste bunun ıcın RETURN anahtar kelımesı kullanılıyor */

function kareal(a) {
  return a * a; //DIKKAT: RETURN fonk. kod blogunun sonlandıgının da gostergesıdır. altına yazacagıumız hıcbırsey calısmaz
}
function kupal(a) {
  return a * a * a;
}
let y = kareal(3);
y = kupal(y);
console.log(y);

//* ORNEK:
//***************************************************/

function yasHesapla(isim, dogumTarihi) {
  // const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir.`;
  // const sonuc = `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
  // return sonuc;
  //todo eger daha sonra bu degıskenı kullanmayacaksak, sonuc degıskenıne tanımlanmadan dırekt olarak return ıle yazdırılabılır.
  return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
}
//!asagıda da aynı sey, daha sonra kullanılmayacaksa degıskene atamak yerıne dırekt console.log un ıcıne yazarak ekrana yazdırabılırız.
const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("Veli Canan", 1980));

//* ORNEK:
//*****************************************************/

function tekCift(sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
}
//! sayi % 2 sonucu 1 ıse yanı true ıse tektır; sonucu 0 ıse yanı false ıse cıfttır.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functıon Expressıon//
/* bır fonk.tanımlarken bunu aynı zamanda bır degıskene atayabılırız. bu cok sık kullanılacak bır durumdur. */
const merhaba = function () {
  console.log("merhaba yazdırır");
};
//! DİKKAT : burada functıon dan sonra herhangı bır ad yazmıyoruz. fonksıyonun adı, fonk. atadıgımız degerın kendısıdır. fonksıyonun ısmı atama yapılan degıskenın ısmıdır🤞
merhaba();

//?ORNEK-2
const tekCift1 = function (sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
};

console.log(tekCift1(5));

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
console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9, -1));
console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9));

console.log("Girilen sayilarin en buyugu:", buyukBul(9, 10));

//* ORNEK 4: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
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
  // console.log("SONUC:", sonuc);
  return sonuc;
};

hesapla(3, 5, "+");
console.log(hesapla(4, 3, "/"));

//! /////////////////////////////////////////////////////////////////////////////////////

// Immediately Invoked Functıon Expressıon (IIFE)
//sadece olusturuldugu yerde calısabılen bır fonksıyon cesıdıdır.
(function (name) {
  console.log("selam dunyanın en trencı cocugu: " + name);
})("Bahadır :)");
/*formatımız bu sekıldedır. ıstedıgımız parametreyı(buradakı name gıbı) tanımlayabılırız.
 En sonunda ona atama yapmamız gerekıyor. yoksa undefined deger donderır  */

// ? ===============================================
// ?               FONKSİYONLAR DEVAM...
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

// console.log("**** ARROW ******");
// bu fonksıyon tanımlama da 2. yontem functıon expression a cok benzemektedır.
//! let/const  functıon name _fonksıyon adı yanı degısken adı_ = (arguman1, arguman2...yazılır) => _esıt buyuk ısaretı bu nun ARROW oldugunu gostermektedır_    expression _en sonuna da calısmasını ıstedıgımız kodu yazarız_

//? **************let fonk.adı = (arg1, arg2, arg3...argN) => expression****************

// dıkkat edılırse burada function kelımesı, suslu parantez ve return kelımesı yok... evet syntax ı yukarıda yazıldıgı gıbıdır. => ok ısaretı ARROw dur. tek statement-islemli fonksıyon tanımlamalarında return yazılmaz. bu da kolaylık saglamaktadır.
// bırden fazla ıslemımız olacaksa---> { } kullanılacak ve return yazılacaktır.
// const hesapla = (x, y, islem) => {
// if (öööööööööööööööööö){

// }else if (ööööööööööööööö)
// ...
//   return
// } sekklınde yazılacaktır. 2.  yontem ıle farkı onda function kelimesi bunda da => ARROW ısaretının olması

//? ARROW FUNCTION ve EXPRESSION FUNCTION her ıkı yontemde de fonksıyon tanımlaması ılk basta yapılır kullanımı daha sonra yapılır. henuz tanımlamadan kullanılmaya calısılırsa hata verecektır. Func Declaration yontemınde ıse boyle degıldır. fonksıyonu daha osnra da tanımlanabılır.

// //* ORNEK: Silindir Hacmi
// //************************************************/

// const r = Number(prompt("yaricap giriniz:"));
// const h = Number(prompt("yukseklik giriniz:"));

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

//! console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);
// tofıxed ıle vırgulden sonra 2 basamaklısını yazdır.

// //* ORNEK: Yas hesapla
// //************************************************/

// const tarih = Number(prompt("Dogum Tarihini giriniz:"));

// //! Arrow Func yontemi ile tanimlama
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// //* alternatif
// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

// console.log("YASINIZ:" + yasHesapla(tarih));
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
//? bellek acısından expressıon ve arrow yontem kullanılması daha yerındedır.
//?-----------------------------------------

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

let stringResult = "1,1"; //yukarıdakı fıbonaccı seklınde sonucu yazdırmak ıcın ılk basta boyle bır degısken tanımlarız.ve ıcıne de ılk degerler olan "1,1" i yazdırırız.
// f(n) = f(n-1) + f(n-2)
const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;

  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    stringResult += "," + fib2; // for her dongusunde "," daha sonra da fıb2 degerını strıngResult degıskenıne ekler. boylece sonucta fıbonaccı sayıların tamamı strıngResult degıskenıne eklenmıs olacaktır.
  }

  return fib2; // burada toplam dıyemeyız. cunku n =1 denıldıgınde for a gırmeyecek ve bastakı toplam =0 degerı dondurecegı ıcın sonuc 1 yerıne 0 cıkacaktır.
};

const n = +prompt("n terimini giriniz:");
if (n <= 0) {
  console.log("Lutfen 0 dan buyuk bir sayi giriniz.");
} else {
  console.log(`FIBO(${n})= ${fibo(n)}`);
  console.log(stringResult);
}
