"use strict";
console.log("merhaba operator dersıne hosgeldiniz");
let sonuc;
let a = 20,
  b = 30,
  c = 40;
//////! ARİTMETİK OPERATORLERİ/////
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a; //bolum sonucunda kalanı verıyor.
sonuc = a++; // bu aslında buna esıttır: --> a+1.yanı bu sekılde yazarsak. sonuc ılk olarak a ya esıt olur.(postfıx)
// b = a ++ ---> ılk once b nın degerını a olarak kesınlestır. bundan sonra a yı arttır.
//  sonucu bır kez daha goruntulersek bu sefer 1 arttırılmıs sekılde goruntulerız.(sonuc=20, a=21)
sonuc = ++a; // ancak burada ılk olarak a nın degerını arttır daha sonra sonuca ata demektır..yanı ayı arttır daha sonra bu arttırılmıs seklıyle b ye esıtle(sonuc=22, a=22) (prefıx)
sonuc = --a; // artı ıle aynı mantık...
sonuc = a--;

// + operatoru number ve str de concat edıyor. 2 +"2" = 22 olur.

//////! ATAMA OPERATORLERİ/////
sonuc = a;
sonuc += a; // sonuc = sonuc + a demektır
sonuc -= a; // sonuc = sonuc - a demektır
sonuc *= a; // sonuc = sonuc * a demektır...
sonuc += a + b; // sonuc = sonuc + a + b demektır

//////! KARSILASTIRMA OPERATORLERİ/////
//  let sonuc;
// let a = 20,
//   b = 30,
//   c = 40;
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

//////! MANTIKSAL OPERATORLERİ/////
//1. Not operatoru ---> ! ısaretıyle ıfade edılır. onune geldıgı trueyu false;falseu true ya cevırıyor
console.log(!(2 != 2)); //ıctekı false olmasına ragmen ! (not operatoru) onu true cevırdı
console.log(!(2 == 2)); // ıctekı true olmasına ragmen ! onu false cevırdı

//2. and ---> &&(shift+6) isaretıyle ıfade edılır.(true, true = true //!true, false = false)
console.log(4 == 2 && "Ali" == "Ali"); //tum kosulların true olması grekır kı sonuc true olsun

//3. or ---> || (Alt Gr+Ctrl+<|> tusu)isaretıyle ıfade edılır.(true, true = true //! true, false = false
console.log(4 == 2 || "Ali" == "Ali"); // tum kosullarda false cıkmalı kı sonuc false olsun yoksa bır tane bıle true gorurse sonuc true olacaktır.
console.log(sonuc);

//! Aşağıdaki değerler her zaman false dur:
// false
// 0(sıfır)
// -0(eksi sıfır)
// 0n(BigInt sıfır)
// '', "", ``(boş string)
// null
// undefined
// NaN

//! Diğer her şey true dur:
// '0'(tek bir sıfır içeren bir string)
// 'false'("false" metnini içeren bir string)
// [](boş bir dizi)
// {}(boş bir nesne)
// function(){}("boş" bir function)

//!Nullish Birleştirme Operatörü (??)
// Boş birleştirme operatörü (??), sol taraftaki işleneni boş(null) veya tanımsız(undefıned) olduğunda, sağ taraftaki işleneni; aksi halde sol taraftaki işleneni döndüren mantıksal bir operatördür.
// value1 ?? value2
// İkinci (değer2) boş(null) veya tanımsız(undefined), boş birleştirme operatörü ilk değeri (değer1) döndürür. Teknik olarak, boş birleştirme operatörü aşağıdaki bloğa eşdeğerdir:

// const result = value1;
// if (result === null || result === undefined) {
//   result = value2;}

//   let count = 0;
// let result = count || 1;
// console.log(result); // 1
// // desired result should be 0, therefore using coalescing operator is a better choice
// let count2 = 0;
// let result2 = count2 ?? 1;
// console.log(result2);

// Boş birleştirme operatörü, bu tuzaktan kaçınmanıza yardımcı olur. Yalnızca birincisi boş veya tanımsız olduğunda ikinci değeri döndürür.

// ➤ Boş birleştirme operatörü kısa devredir Mantıksal OR ve AND operatörlerine benzer şekilde, boş birleştirme operatörü, ilk işlenen ne tanımsız ne de boş değilse ikinci değeri değerlendirmez.

// ➤ Boş birleştirme operatörü, (||) den doğrudan daha düşük beşinci en düşük operatör önceliğine sahiptir. ve koşullu (üçlü) operatörden doğrudan daha yüksektir. || ile kullanılırsa hata verebilir. ve && operatörleri. Operatör önceliklerini açıkça belirtmek için parantez ile kullanın.

// const result = null || undefined ?? 'OK'; // SyntaxError

// const result2 = (null || undefined) ?? 'OK';
// console.log(result); // "ok"

// ? Nesne özellikleri için boş birleştirme operatörü olan operatörde vardırBir nesne özelliğinin tanımsız olduğu durumlar varsa, alt özelliklere erişmek bir hata verebilir. Aşağıdaki örneğe bakın:

// const obj = {
//   a: {
//     b: { key: 'Some Value' },
//       },
//     d:{ key: 'My value',}
//   };
// console.log(obj.a.b.key); // 'Some Value'
// console.log(obj.a.c.key); // error, breaks the execution
// console.log(obj.a.c?.key); // undefined, does not break the exec

// instanceofnesne türü sorgu operatörü, verilen nesnenin nesne türünü belirlemek için kullanılır.
// const arr = [1, 2, 3];
// console.log(arr instanceof Array);// true

// deletebir nesnenin özelliğini veya bir dizinin bir öğesini siler
// ? : Üçlü Operatör bir sonraki bölümde ele alınacaktır.
// const user = { fullName: "John Doe", age: 40}
// delete user.age; // user = { fullName: "John Doe"}

// ,Virgül İşleci, birden çok işleneni değerlendirir ve son işlenenin değerini döndürür.
// let a = (1, 3, 7); // 7
