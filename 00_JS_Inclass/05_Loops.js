//! **** Loops ****

// ?➤ JavaScript'te üç tür geleneksel döngü vardır:

// ● for 
// ● while 
// ● do...while 

// ?➤ aşğıdaki keyword'ler, döngü yinelemelerini kontrol etmek için kullanılır:

// ● break açıklama
// ● continue açıklama

//! ********* for *********
//? The syntax of the for loop is:
//! for (initializer; condition; iterator) {
   // for loop body
// }

//? Ornek: 1 den n kadar sayiları toplayan kodu yaziniz.

// const n = Number(prompt("Bir sayi girniz:"));
// let sum = 0;

// for (let i = 0; i <= n; i++) {
//     sum += i
//     console.log(sum, i);
// }
// console.log('Sonuç: ', sum);

//? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

// for (let i = 1; i <= 10; i++) {
//   const rasgele = Math.round(Math.random() * 100);
//   console.log(rasgele);
// }

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

// const sayi = Number(prompt("Pozitif Bir sayi giriniz:"));
// let asal = true;

// if (sayi <= 1) {
//   alert("Sayi 1'den buyuk olmalidir.");
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i === 0) {
//       asal = false;
//       break;
//     }
//   }

//   const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
//   console.log(`${sayi} ${sonuc}`);
// }


//? işlem sırası
// 1. Başlatıcı(initializer) , değişkenleri başlatır ve/veya bildirir ve yalnızca bir kez yürütülür.
// 2. koşul değerlendirilir. True ise kod bloğu çalışır false ise çalışmaz.
// 3. 3. parametredeki yineleyici başlatıcının değerini günceller. 
//! dikkat Yineleyici , true koşul olduğunda başlatıcının değerini günceller.
// ! başlatıcıda const kullanılmaz çünkü değer değişecek.

// örnek:

// let sayılar = [1, 3, 5, 9]
// let toplam = 0

// for(let i = 0; i < sayılar.length; i++) {
//     toplam += sayılar[i];
//     console.log(sayılar[i]);
// }
// console.log(toplam);

// todo aynı işlemi aşağıdaki gibide yapabiliriz.
// for (let i in sayılar) {
//     // i'ye index numaralarını atamış oluyoruz.
//     toplam += sayılar[i];
//     console.log(sayılar[i]);
// }
// console.log(toplam);

// todo aynı işlemi aşağıdaki gibide yapabiliriz.

// for (let sayı of sayılar) {
//     // index ile uğraşmadık sayıya direk elemanları atadık.
//     toplam += sayı;
//     console.log(sayı);
// }
// console.log(toplam);

// **** nested for ****

// let val = '\n';
// for (let i=0; i<10; i++){
//     for(let j=0; j<10; j++){
//         val += '* ';
//     }
    
//     val += '\n';
// }
// console.log(val)

//?  *** borsa programı ***

// let prices = [7,6,4,3,1]
// let profit = 0;
// for (let index = 1; index < prices.length; index++) {
//     if (prices[index] > prices[index-1]) {
//         profit += prices[index] - prices[index-1]
//     }
// }


//! ********* while *********

//? The syntax of the while loop is:
//! while (condition) {
       // body of loop
// }
// örnek:

// let count = 0
// while (count < 10) {
//     count += 2
//     console.log(count);
// }
// Aslında for döngüsündeki parametreler aynen kullanıldı. ama parantez içerisinde değil. 

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let not = +prompt("Lutfen 0-100 arasinda bir not girniz.");

// while (not < 0 || not > 100) {
//   console.log("Not 0-100 arasinda olmalidir");
//   not = prompt("Lutfen 0-100 arasinda bir not giriniz.");
// }

// console.log("Giridiginiz Not:", not);


//! ********* DO-WHILE *********

// Bu, koşul false olsa bile döngünün her zaman en az bir kez yürütüleceği anlamına gelir.
// //? do...while Döngünün sözdizimi şöyledir:
// //! do {
    // body of loop
// } while(condition)
// örnek:
// let count = 0;
// do {
//     console.log(count);
//     count++;
// } while (count < 5);

// ******
// let sum = 0;
// let number = 0;

// do {
//     sum += number;
//     number = parseInt(prompt('bir numara gir'))
// } while ( number >= 0)
// console.log(`toplam ${sum}`);

//? ÖRNEK: 10 kere konsola Merhaba yazdıran uygulamayı do-while döngüsü ile yazınız.

// let i = 1
// do {
//     console.log('merhaba\n')
//     i++
// }while(i <= 10);



//? ÖDEV: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu  karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

// let not;
// let notTop = 0;
// let sayac = 0
// do {
//     not = prompt('Not giriniz veya çıkmak için Q tuşuna basınız.');
//     if (not == "Q" || not == "q") {break;}
//     notTop += +not
//     ++sayac
// }while(not != "Q" && not != "q")
// console.log(`not ortalaması: ${notTop/sayac}`);



//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz.

// let not1;
// do {
//   not1 = +prompt("Lutfen 0-100 arasinda bir not girniz.");
//   if (not1 < 0 || not1 > 100) {
//     console.log("Not 0-100 arasinda olmaldir.");
//     alert("Not 0-100 arasinda olmaldir.");
//   }
// } while (not1 < 0 || not1 > 100);

// console.log("Giridiginiz Not:", not1);


//! ********* break Statement *********

// let i = 0

// while (i < 10) {
//     if (i === 3){
//         break;
//     }
//     console.log(i);
//     i += 1;
// }
// console.log(`i = ${i} after while loop`);


//! ********* continue Statement *********
//? continue, bir döngünün geçerli yinelemesinde ifadenin yürütülmesini sonlandırır ve hemen bir sonraki yinelemeye devam eder.

// 5 hariç 4'ten 7'ye kadar yazdır.

// for (let i = 4; i < 8; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }


// var sum = 0;
// for (var i = 3; i < 7; i++) {
// sum += i;
// if (i ===3 || sum > 10) {
// continue;
// }
// console.log(i);
// }

// var players = ["Messi ", "Ronaldo ", "Hazard ", "Neymar ", "Salah "];
// var text = "";
// var i;  
// for (i = 2; i < players.length; i++) {
// text += players[i];
// }
// document.write(text);

// var i = 0;
// var sum=0;
// while (i < 3) {
// var sum = sum + i; i++;
// }
// console.log ("The total is: " + sum);


// ödev 
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// let hak = 5;
// const rastgele = Math.round(Math.random() * 100);
// console.log(rastgele);
// let tahmin;
// let devammı = true

// while (devammı) {
//     do {
//         tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
//         hak -= 1;
//         if (tahmin === rastgele) {
//           console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
//           break;
//         } else if (tahmin < rastgele) {
//           console.log("ARTTIR ⬆️");
//         } else {
//           console.log("AZALT ⬇️");
//         }
//     } while (hak > 0);
      
//     if (tahmin !== rastgele) {
//     console.log("Uzgunuz oyunu kaybettiniz 😔😔");
//     }

//     let bitsinmi = prompt("Tekrar oynamak istermisini E/H?")
//     if ( bitsinmi === "E" || bitsinmi === "e") {
//         devammı = true;
//         hak = 5;
//     }else{devammı = false}

// }
