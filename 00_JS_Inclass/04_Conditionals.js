//? ➤ JavaScript'te3 tür Koşullu İfade vardır:

// if else statement
// ternary if statement
// switch statement

// ? if bloklarının 3 şekli vardır:

// simple if statement

// if .. else statement

// if .. else if .. else statement

// ?1- simple if statement

// if (condition) {
//     // the if block body
//     command;
//     otherCommand;
//     // ...
//   }
//   followingCommands();

// * tek komut için kaşlı ayraç (süslü parantez) kullanmaya gerek yok.

// if (condition) command;
// followingCommands();

// Örnek:
// let sayı = prompt('Bir sayı giriniz')

// if (sayı > 0) {
//     console.log('Sayı pozitif')
// }
// console.log('Konumuz İf else')

//? 2- if .. else statement

// if (condition) {
//     // block of code if condition is true
//   } else {
//     // block of code if condition is false
//   }
// örnek

// sayı = prompt('Bir sayı giriniz')

// if (sayı > 0) {
//     console.log('Sayı pozitif')
// }
// else {
//     console.log('Negatif veya 0')
// }
// console.log('Konumuz İf else')

//? 3- if .. else if .. else statement

// if (condition1) {
//     // code block 1
//   } else if (condition2){
//     // code block 2
//   } else if (condition3){ // we can add as much as we need to
//     // code block 3
//   } else if (condition4){ // we can add as much as we need to
//     // code block 4
//   } else {
//     // code block 3
//   }

// örnek
// sayı = prompt('Bir sayı giriniz')

// if (sayı > 0) {
//     console.log('Sayı pozitif')
// }
// else if (sayı == 0) {
//     console.log('sayı 0')
// }
// else {
//     console.log('Negatif')
// }
// console.log('Konumuz İf else')

// örnek2:
// const num1 = +prompt('1. sayı giriniz.')
// const num2 = +prompt('2. sayı giriniz.')
// const num3 = +prompt('3. sayı giriniz.')

// if (num1 >= num2 && num1 >= num3) {
//   console.log(`En büyük sayı ${num1}`)
// }else if (num2 > num1 && num2 > num3) {
//   console.log(`En büyük sayı ${num2}`)
// }else {console.log(`En büyük sayı ${num3}`)}

// 2. yöntem:
// const n1 = prompt("sayi 1")
// const n2 = prompt("sayi 2")
// const n3 = prompt("sayi 3")

// let enBuyuk = n1
// if ( n2 > enBuyuk ) {
//     enBuyuk = n2
// } 

// if ( n3 > enBuyuk ){
//     enBuyuk = n3 
// }
// console.log(`${enBuyuk} en büyük sayıdır.`)

//! ***** nested if blocks (iç içe if blokları) ********
// sayı = prompt('Bir sayı giriniz')
// if (sayı >= 0) {
//     if (sayı == 0) {
//         console.log('sayı 0')
//     }
//     else {
//         console.log('Sayı pozitif')  
//     } 
// } else {
//     console.log('Negatif')
// }
// console.log('Konumuz İf else')


//! ***** Ternary Statement *****

// condition ? expression1 : expression2

// condition true ise, ifade1 yürütülür.

// condition false ise, ifade2 yürütülür.

// örnek1:

// let sınavSonucu = prompt('sınav sonucu nedir?')

// console.log(sınavSonucu > 50 ? 'geçtiniz': 'kaldınız')

// örnek2:

// const yas = 15;
// let durum = (yas > 50) ? 'Reşitsiniz' : 'Reşit değilsiniz';
// console.log(durum);

//! ***** Nested Ternary Statement *****

// let sayı1 = -6;
// let sonuc1 = (sayı1>0) ? 'pozitif': ((sayı1==0)  ? "0'a eşit" : "negatif")
// console.log(`Girilen sayı ${sonuc1}`)

//! *** Koşullarda Kısa Devre Yapma ***
// ? && AND
// const first = 0;
// const second = 20;
// const third = 30;
// let result = first && second && third;
// console.log(result);
// AND durumunda, bir yanlış sonuç elde edene kadar ifade değerlendirilir, karşılaşmaz ise son değer döndürülür. False ile karşılaşırsa kısa devre oluşur sonraki ifade değerlendirilmez.

// const userLoggedIn = true;
// userLoggedIn && console.log('Welcome'); 

// ? || OR
// const first = 0; // play with values
// const second = 20;
// const third = 30;
// let result = first || second || third;
// console.log(result)
// OR durumunda, bir yanlış true elde edene kadar ifade değerlendirilir, karşılaşmaz ise son değer döndürülür. True ile karşılaşırsa kısa devre oluşur sonraki ifade değerlendirilmez.

//! Switch Statements
// switch, parantez () içindeki bir değişkeni/ifadeyi değerlendirir.

// İfadenin sonucu değer 1'e eşitse, o gövde yürütülür.

// İfadenin sonucu değer 2'ye eşitse, o gövde yürütülür.

// Bu süreç devam eder. Eşleşen bir durum yoksa, default gövde yürütülür.

// let day = 8;
// let dayName;
// switch (day) {
//   case 1:
//     dayName = 'Monday';
//     break;
//   case 2:
//     dayName = 'Tuesday';
//     break;
//   case 3:
//     dayName = 'Wednesday';
//     break;
//   case 4:
//     dayName = 'Thursday';
//     break;
//   case 5:
//     dayName = 'Friday';
//     break;
//   case 6:
//     dayName = 'Saturday';
//     break;
//   case 7:
//     dayName = 'Sunday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }
// console.log(dayName); 

// let not = +prompt('not giriniz')

// switch(true) {
//   case(not >= 95) : sonuc3 = 'A+'; break;
//   case(not >= 90) : sonuc3 = 'A'; break;
//   case(not >= 85) : sonuc3 = 'B+'; break;
//   case(not >= 80) : sonuc3 = 'B'; break;
//   default : sonuc3 = 'zayıf'
// }
// console.log(sonuc3);


// # ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

// const m = +prompt('1. sayıyı giriniz');
// const n = +prompt('2. sayıyı not giriniz');
// // 1. Yöntem:
// console.log(`m + n : ${m + n} `);
// console.log(`m - n : ${m - n} `);
// console.log(`m x n : ${m * n} `);
// console.log(`m / n : ${m / n} `);

// // 2. Yöntem:

// const islem = prompt('Lütfen işlem türüni giriniz.');
// if (islem === "+") {console.log(`m + n : ${m + n} `)}
// if (islem === "-") {console.log(`m - n : ${m - n} `)}
// if (islem === "*") {console.log(`m * n : ${m * n} `)}
// if (islem === "/") {console.log(`m / n : ${m / n} `)}

// 3. Yöntem

// const s1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem = prompt("Islemi giriniz: +,-,*, /");
// const s2 = +prompt("2.Sayiyi Giriniz:");
// let netice = 0;
// switch (islem) {
//   case "+":
//     netice = s1 + s2;
//     break;
//   case "-":
//     netice = s1 - s2;
//     break;
//   case "*":
//     netice = s1 * s2;
//     break;
//   case "/":
//     netice = s1 / s2;
//     break;
//   default:
//     alert("Yanlis islem girisi");
//     break;
// }
// console.log(`${s1} ${islem} ${s2} = ${netice}`);


// # ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

// ## Pazartesi, Salı ,Çarşamba, Perşembe -> InClass

// ## Cuma -> Teamwork

// ## Cumartesi ->  InClass + Workshop

// ## Pazar -> Self-Study

// ## Aksi takdirde -> Yanlis gun girildi.

// let gun = prompt('etkinliğini görmek istediğiniz gün adını giriniz').toLowerCase()
// let etkinlik;

// switch (gun) {
//     case 'pazartesi':
//     case 'salı':
//     case 'çarşamba':
//     case 'perşembe':
//     etkinlik = "InClass";
//     break;
//     case 'cuma' :
//     etkinlik = "Teamwork";
//     break;
//     case 'cumartesi' :
//     etkinlik = "InClass + Workshop";
//     break;
//     case 'pazar' :
//     etkinlik = "Self-Study";
//     break;
//     default:
//     etkinlik = "Gün bilgisi yanlış girildi";
// }
// console.log(etkinlik); 


// ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

// let maas = Number(prompt('Maaşı giriniz.'))
// let aUcret = 6471;

// if (maas < aUcret) {console.log(`Maaşınız asgari ücretin altında olduğu için %50 zam hakkı kazandınız. Güncel maaş miktarınız: ${(maas*1.5).toFixed(2)}`);}
// else{console.log(`Maaşınız asgari ücret üzeri olduğu için %10 zam hakkı kazandınız. Güncel maaş miktarınız: ${(maas*1.1).toFixed(2)}`)}

// # ODEV4: Kredi Risk Programı

// ## Console’dan kişinin gelir ve gider miktarını alan

// ## eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑

// ## değilse Kredi Verilemez 🥺

// ## şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

// const gelir = +prompt('Aylık Gelirinizi Giriniz');
// const gider = +prompt('Aylık Giderinizi Giriniz');
// let aUcret = 6471;
// console.log((gelir >= gider + aUcret) ? 'Kredi verilebilir 🤑' : 'Kredi verilemez 🥺')

// ***! Noah hoca slayt sonu soruları ***

// Soru-1: Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız. • 0-25 arası not karşılığı FF olmalı,26-45 arası DD, 46-65 arası CC, 66- 75 arası BB, 76-
// 90 arası BA, 91-100 arası AA olarak çevrilmelidir. • 100’den büyük veya 0‘dan küçük değerlerde hata mesajı verecektir.

// let puan = +prompt('Not değerini giriniz')
// let hNot;

// if (puan <= 25) {hNot='FF'}
// else if (puan > 25 && puan <= 45) {hNot='DD'}
// else if (puan > 45 && puan <= 65) {hNot='CC'}
// else if (puan > 65 && puan <= 75) {hNot='BB'}
// else if (puan > 75 && puan <= 90) {hNot='BA'}
// else if (puan > 90 && puan <= 100) {hNot='AA'}
// console.log(hNot);

// Soru-2: Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı
// kullanarak yazınız.
// let sıranu;
// let ay = prompt('sıra numarasını öğrenmek istediğiniz ayı giriniz.').toLowerCase()
// switch (ay) {
//     case  'ocak':
//         sıranu = 1
//         break;
//     case  'şubat':
//         sıranu = 2
//         break;
//     case  'mart':
//         sıranu = 3
//         break;
//     case  'nisan':
//         sıranu = 4
//         break;
//     case  'mayıs':
//         sıranu = 5
//         break;
//     case  'haziran':
//         sıranu = 6
//         break;
//     case  'temmuz':
//         sıranu = 7
//         break;
//     case  'ağustos':
//         sıranu = 8
//         break;
//     case  'eylül':
//         sıranu = 9
//         break;
//     case  'ekim':
//         sıranu = 10
//         break;
//     case  'kasım':
//         sıranu = 11
//         break;
//     case  'aralık':
//         sıranu = 12
//         break;
//     default :
//     sıranu = 'Ay bilgisi yanlış girildi.'
// }
// console.log(sıranu)

// Soru-3: Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en
// büyüğünü yazdıran programı yazınız.

// let sayı1 = +prompt('1. sayıyı giriniz.')
// let sayı2 = +prompt('2. sayıyı giriniz.')
// let sayı3 = +prompt('3. sayıyı giriniz.')
// let eBuyuk;
// let eKucuk;

// console.log(`Girilen 3 sayının toplamı : ${sayı1+sayı2+sayı3}`)
// console.log(`Girilen 3 sayının çarpımı : ${sayı1*sayı2*sayı3}`)
// if (sayı1 >sayı2 && sayı1 > sayı3) { eBuyuk = sayı1}
// else if (sayı2 >sayı1 && sayı2 > sayı3) { eBuyuk = sayı2}
// else if (sayı3 >sayı1 && sayı3 > sayı2) { eBuyuk = sayı3}
// console.log(eBuyuk)
// if (sayı1 <sayı2 && sayı1 < sayı3) { eKucuk = sayı1}
// else if (sayı2 <sayı1 && sayı2 < sayı3) { eKucuk = sayı2}
// else if (sayı3 <sayı1 && sayı3 < sayı2) { eKucuk = sayı3}
// console.log(eKucuk)

// Soru-4: Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternary
//     deyimi ile yapınız).

// let sayı = +prompt('Tek vaya çift olduğunu öğrenmek istediğiniz sayıyı giriniz.')

// console.log((sayı % 2 === 0) ? ('Çift sayıdır.') : ('tek sayıdır.'))

// Soru-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı
// tasarlayınız. Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır.

// let sayı = +prompt('çevirmek  istediğiniz sıcaklık değerini giriniz.')
// let kategori = prompt("Sonucu Fahrenhait cinsinden görmek için F Celcius cinsinden görmek için C giriniz.").toUpperCase()

// console.log( (kategori === 'F') ?  `${sayı}°C ${(sayı * 1.8) + 32 } °F'dir.` : `${sayı}°F ${(sayı-32)/1.8 } °C'dir.`);




