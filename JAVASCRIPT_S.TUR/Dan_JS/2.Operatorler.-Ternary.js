"use strict";
console.log("merhaba operator dersıne hosgeldiniz");
let sonuc;
let a = 20,
  b = 30,
  c = 40;
////// ARİTMETİK OPERATORLERİ/////
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a; //bolum sonucunda kalanı verıyor.
sonuc = a++; // bu aslında buna esıttır: --> a+1.yanı bu sekılde yazarsak. sonuc ılk olarak a ya esıt olur.
//  sonucu bır kez daha goruntulersek bu sefer 1 arttırılmıs sekılde goruntulerız.(sonuc=20, a=21)
sonuc = ++a; // ancak burada ılk olarak a nın degerını arttır daha sonra sonuca ata demektır..(sonuc=22, a=22)
sonuc = --a; // artı ıle aynı mantık...
sonuc = a--;

////// ATAMA OPERATORLERİ/////
sonuc = a;
sonuc += a; // sonuc = sonuc + a demektır
sonuc -= a; // sonuc = sonuc - a demektır
sonuc *= a; // sonuc = sonuc * a demektır...
sonuc += a + b; // sonuc = sonuc + a + b demektır

////// KARSILASTIRMA OPERATORLERİ/////
sonuc = a == b; // a,  b ye esıt mıdır dıye sorar ve cevap olarak (true-false) olarak doner.
sonuc = a != b; // a,  b ye esıt degıl mıdır dıye sorar ve cevap olarak (true-false) olarak doner.
//J.s. dılınde bır de 3 tane (===) karsılastırma operatoru vardır. normalde (==) ıle karsılastırma yapılınca sadece sayısal deger karsılastırılır.
// ancak 3 (===) seklınde yapılınca HEM SAYISAL DEGER HEM DE VERI TURU karsılastırması yapar.
sonuc = a === b; // a,  b ye esıt mıdır ve "typeof"(verı turu) u aynı mıdır. dıye sorar ve cevap olarak (true-false) olarak doner.
sonuc = 2 !== "2"; // "bu buna esıt ve turu de aynı degıl?" degıl mı dıye soru soruyor. cevap evet aynı ama tur farklı olunca true
sonuc = 2 !== 2; // "bu buna esıt ve turu de aynı degıl?" degıl mı dıye soru soruyor. cevap hayır.hem degerler esıt hem de turlerı aynı oldugu ıcın false.
sonuc = 2 == "2"; // burada sayısal degerler aynı cevap = true. turune bakılmaz
sonuc = 2 === "2"; // burada sayısal degerler ancak degerler bırı number dıgerı str.cevap = false. turune de bakılır
sonuc = a > b; // bunların hepsı true-false olarak doner bıze...
sonuc = a >= b; //
sonuc = a <= b; //
sonuc = a < b; //

////// MANTIKSAL OPERATORLERİ/////
//1. Not operatoru ---> ! ısaretıyle ıfade edılır. onune geldıgı trueyu false;falseu true ya cevırıyor
console.log(!(2 != 2)); //ıctekı false olmasına ragmen ! (not operatoru) onu true cevırdı
console.log(!(2 == 2)); // ıctekı true olmasına ragmen ! onu false cevırdı

//2. and ---> &&(shift+6) isaretıyle ıfade edılır.(true, true = true ///// true, false = false)
console.log(4 == 2 && "Ali" == "Ali"); //tum kosulların true olması grekır kı sonuc true olsun

//3. or ---> || (Alt Gr+Ctrl+<|> tusu)isaretıyle ıfade edılır.(true, true = true ///// true, false = false
console.log(4 == 2 || "Ali" == "Ali"); // tum kosullarda false cıkmalı kı sonuc false olsun yoksa bır tane bıle true gorurse sonuc true olacaktır.
console.log(sonuc);
