"use strict";
const prompt = require("prompt-sync")();
// bu komutu asagıda termınalı calıstırmak ıcın yuklemek zorundayız. aksı takdırde promt calısmayacak hata verecektır. bu arada node_modules folder ını da genel klasorumuzun ıcıne konumlandırdık.
//! /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//console.log(*****************While Dongusu********************);

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i = i + 1; // i +=1 veya i++ olarak yazılabılıyor. hepsı i yi 1 arttır yıne i ye esitle demektır.
// }

// let k = 10;
// while (k > 0) {
//   console.log(k);
//   k = k - 1; // k -=1 veya k-- olarak yazılabılıyor. hepsı k yi 1 azalt yıne k ya esitle demektır.
// }
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i += 2;
// }
//! kosulun degıskenı arttırma veya azaltmayı unutma..
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Break ve Continue.

// Break ----> (altına yazılan koddan sonra burada donguyu terk et. donguyu sonlandır demek. baska ıslem yapma demektır.)
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   if (i == 7) {
//     //! 7 dahıl 7 ye kadar tek tek yazdır 7den sonra donguyu terk et. artık calıstırma.
//     break;
//   }
//   i += 1;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Continue ---->(bunu gordugunde dongunun o kısmını calıstırmadan basa don ve bır sonrakı degerle bır daha dongu kodunu calıstırmaya gec)
// let i = 0;
// while (i < 10) {
//   if (i == 4 || i == 7) {
//     i++; /*DİKKAT*/
//     continue;
//   }
//   console.log(i);
//   i++;
// }
/* burada, dongu calısırken, 4 ve 7 ye esıt oldugunda alta gecmeyecek ve dongunun basına gececek
dıkkat edın, i++ yı contınuı den once yapmazsak, ı 4 olunca sonra contunıe gorecek sonra basa gıdecek
deger artmadıgı ıcın ı=4 olacak yıne tekrar gelecek tekrar basa gıdecek... sonsuz donguye gırmıs olacagız*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Do While Dongusu---> (bazı dıllerde olmasına ragmen pek kullanılmamktadır. en az bır kez calısmayı garantılıyor)
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

//! //////////////////////////////////////////////////////////////////////////
//...FOR DONGUSU...
// let meyve = ["elma", "muz", "ayva", "karpuz", "portakal"]; //bu bır arreydır...list (python)
// for (let i = 0; i < meyve.length; i++) {
//   console.log(meyve[i]);
// }
/*dongumuzu degıskenımızle baslatıyoruz, 
dongumuzun kosulunu yazıyoruz, 
degıskenımızı arttırmayı da unutmuyoruz 
burada bır ıterasyon yapıyoruz. elemanları tek tek gezme ıslemı yapıyoruz...*/
//! KOSUL -----> True oldugu surece bu dongu calısacaktır.
//? for ( baslangic ; kosul ; güncellemeMiktari) { Döngü icerigi, yani olmasını,yapılmasını istediğimiz islem}
//! DİKKAT : İ---> const ile yazamayız, zira her seferınde degerı degısecektır. bu yuzden var veya let ıle yazmak zorundayız...ama var ı da kullanmak ıstemıyoruz bu sebeple let kullanıyoruz.
// while ile yapmak ıstersek
// let meyve = ["elma", "muz", "ayva", "karpuz", "portakal"];
// let index = 0;
// while (index < meyve.length) {
//   console.log(meyve[index]);
//   index++;
// }
//!DİKKAT: Bunlar ----> 0 , null, " ", false, undefined, Nan ----- bunlar haricinde hersey truedur...
//? 1 den n e kadar olan sayiların toplamını gosteren donguyu yazınız
// const n = +prompt("lütfen bir sayi giriniz: ");
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   console.log(i); //bunu yazmaya da bılırız sadece en sonuu yazdırsak yeterlıdır
//   total += i;
// }
// console.log(`girilen sayıya kadar olan sayıların toplamı = ${total}`);
//? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi ureten kodu
//? for dongusu ile yaziniz..

// for (let i = 0; i <= 10; i++) {
//   const rasgele = Math.floor(Math.random() * 100);
//   console.log(rasgele);
// }

//* NOT:
//! yukarıda const-let kullanılabılır. rasgele nın degerı degısebılıyor bunda sıkıntı yok, yenıden tanımlama yapılamaz. yanı; rasgele = ... yapamayız.
//! Math.random() => 0-1 arasında rasgele ondalıklı sayı dondurur. bunu neyle carparsak 0 ıle o sayı arasında ondalıklı sayı dondurur.
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yakin ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.
const asalMi = Number(prompt("pozitif bir sayi giriniz: "));
let asal = true;
if (asalMi <= 1) {
  alert(`gırdıgınız sayı 1'den daha buyuk olmalı.`);
} else {
  for (let i = 2; i < asalMi; i++) {
    if (asalMi % i === 0) {
      asal = false;
      break;
    }
  }
  const asalsonuc = asal === true ? " Asaldır" : " Asal Degıldır";
  console.log(`${asalMi} sayısı ${asalsonuc}`);
}
//! /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DAHA KOLAY BIR KULLANIM VAR ---> forEach metodu...

// let meyveler = ["elma", "muz", "ayva", "karpuz", "portakal"];
// meyveler.forEach(function (i) {
//   console.log(i);
// });
/* arreyımızı yazıyoruz, forEach metodunun ıcerısıne bır fonksıyon tanımlıyoruz
bu fonksıyonun parametresı, her defasında,
ıteryt edecegımız arreyın bır elemanının yerıne gecerek alt blokdakı kodu calıstırıyor   */

// dılersek yanına index numaralarını da bu sekılde yazdırabılırız...
// let meyveler = ["elma", "muz", "ayva", "karpuz", "portakal"];
// meyveler.forEach(function (meyve, klm, hg) {
//   console.log(meyve, klm, hg);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FOR IN DONGUSU...(bır obje tanımlanarak)
// const person = {
//   name: "Mustafa",
//   surname: "KAYIKCI",
//   age: 34,
// };
// for (const key in person) {
//   console.log(key);
// }
/////////////////////////////////////////////
// for (const key in person) {
//   console.log(key, person[key]);
// }

///////////////////////////////////////////////////////////////////////// SABIRLA DİNLEDİĞİNİZ İÇİN TESEKKÜR EDERIM... :)
