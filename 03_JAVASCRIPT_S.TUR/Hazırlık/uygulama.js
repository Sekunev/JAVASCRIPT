// soru :  2 vize (%40) 1 final (%60) notuna göre hesaplanan ortalama için;

// a- Eğer ortalama 50 ve üzeri ise geçti değilse kaldı yazsın. 
// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin. 

let vize1 = 20;
let vize2 = 5;
let final = 71;

let ortalama = ((((vize1 + vize2) / 2) * 0.4) + (final * 0.6))

console.log('ortalama: ', ortalama)
// a- Eğer ortalama 50 ve üzeri ise geçti değilse kaldı yazsın. 
// if (ortalama>=50){
//     console.log('Geçtiniz')
// }else{
//     console.log('kaldınız')
// }

// diğer yöntem:
// console.log(ortalama>=50 ? 'Geçtiniz' : 'kaldınız')

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.


// if (ortalama>=50 && final>=50){
//     console.log('Geçtiniz')
// }else{
//     console.log('kaldınız')
// }

// c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin. 

// if (ortalama>=50 || final>=70){
//     console.log('Geçtiniz')
// }else{
//     console.log('kaldınız')
// }




// uygulama 

// 1- Can ve Ada'nın Boy ve kilo bilgilerini alın.
// 2- Alınan bilgilere göre boy kilo indexini hesaplayınız.
// formul: kilo / boy karesi

// 3-hesaplanan index bilgisine göre karşılaştırma yapınız.

// 0-18.4: zayıf
// 18.5 - 24.9 Normal
// 25.4 - 29.9 Fazla kilolu
// 30.0 - 34.9 şişman

let IndexAda;
let IndexCan;
const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.70;
const heigtada = 1.50;

IndexAda = (kgAda) / (heigtada*heigtada);
IndexCan = (kgCan) / (heigtada*heigtCan);

console.log(IndexAda.toFixed(2), IndexCan.toFixed(2));

let adaindex_yüksekmi = IndexAda>IndexCan;

console.log( "adanın kilo index'i canın  kilo indexinden daha büyük mü? " + adaindex_yüksekmi);

let AdaZayıf = (IndexAda>=0) && (IndexAda<18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<24.9);
let AdaKilolu = (IndexAda>=25) && (IndexAda<29.9);
let AdaŞişman = (IndexAda>=30) && (IndexAda<34.9);

console.log('ada zayıf: ' + AdaZayıf);
console.log('ada Normal: ' + AdaNormal);
console.log('ada Kilolu: ' + AdaKilolu);
console.log('ada Şişman: ' + AdaŞişman);