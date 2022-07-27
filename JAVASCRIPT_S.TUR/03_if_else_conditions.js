if (3>2)
{
    console.log('merhaba')
}

let username = 'abdullah';

let password = '12345'

if (username =='abdullah') {
    if (password == '123645') {
        console.log('Uygulamaya giriş yapıldı.')
    }
    else {
        console.log('parola yanlış')
    }
}
else {
    console.log('Kullanıcı adı hatalı.')
}
// -----

let yas = 20
let mezuniyet = 'lise';

//  && --> AND inlamını taşır.
//  || --> OR anlamında kullanılır.

if ((yas >= 20) && (mezuniyet== 'lise' || mezuniyet== 'lisans')) {
    console.log('ehliyet alabilir.')
}
else {
    console.log('ehliyet şartları yok.')
}

// // uygulama sayı 10-58 arasındamı

 let x = 5

if (x > 10 && x < 58) {
    console.log('sayı 10 ile 58 arasındadır.')
}
else {
    console.log('sayı 10 ile 58 arasında değildir.')
}

// uygulama sayı poz tek sayı mı?

x = 9

if (x > 0 && x %2 != 0 ) {
    console.log('poz tek sayı.')
}
else {
    console.log('poz tek sayı değil.')
}

// uygulama  x, y, z hangisi en büyük;

x = 20, y= 20, z=20

if (x > y && x > z) {
    console.log('x en büyük.')
} else if (y > x && y > z) {
    console.log('y en büyük.')
} else if (z > x && z > y) {
    console.log('z en büyük.')
} else  {
    console.log('sayılar eşit')
}

// ------>

//  String

// let adı = 'Ali'
// let Soyadi = 'DEMİR'
// let yas = 30

// mesaj = `Adım ${adı}, Soyadım ${Soyadi}`;
// console.log(mesaj);

// // ternary operators;

// let emeklilik = (65 - yas > 0) ? "Emekliliğe "+ (65 - yas ) + " yıl kaldı" : "emeklisiniz.";

// console.log(emeklilik)