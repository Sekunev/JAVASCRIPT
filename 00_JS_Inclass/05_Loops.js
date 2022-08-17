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
// örnek:

// let sum = 0;

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
//     sum += i
// }
// console.log(sum);

//? işlem sırası
// 1. Başlatıcı(initializer) , değişkenleri başlatır ve/veya bildirir ve yalnızca bir kez yürütülür.
// 2. koşul değerlendirilir. True ise kod bloğu çalışır false ise çalışmaz.
// 3. 3. parametredeki yineleyici başlatıcının değerini günceller. 
//! dikkat Yineleyici , true koşul olduğunda başlatıcının değerini günceller.

// örnek:

let sayılar = [1, 3, 5, 9]
let toplam = 0

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

//! ********* do while *********

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