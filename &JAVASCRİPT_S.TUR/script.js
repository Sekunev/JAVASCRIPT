var urun = 'iphone 5000';
let fiyat = 6000;

// Türkçe kullanma
// arada boşluk olmaz
// sayı ile başlamaz.

// console.log(typeof urun)  // maaş ali
// console.log(typeof fiyat)  // maaş can

// let sayi1 = "10"
// let sayi2 = "20"

// console.log(sayi1+sayi2)

// let sayi1 = 10;
// let sayi2 = "20";

// console.log(Number(sayi1) + Number(sayi2));

// let sayi1 = 10;
// let sayi2 = 20;

// console.log(sayi1.toString() + sayi2.toString());

// let isim = 'sena'
// let soyad = 'tar'

// console.log(isim + "" + soyad)

// let sinav_notu = 70;
// let basarilimi = (sinav_notu >= 50)

// console.log(basarilimi);
// console.log(typeof basarilimi);

// let yas;
// console.log(yas);
// console.log(typeof yas)

// let yas = "";
// console.log(yas);
// console.log(typeof yas)

// let ogrenci1ad = "ada";
// let ogrenci1soyad = "Bilgi";
// let doğumt1 = 2012
// let og1_not_1 = 70;
// let og1_not_2 = 70;
// let og1_not_3 = 80;
// let ders_ort1 = (og1_not_1 + og1_not_2 + og1_not_3) / 3;
// console.log(parseInt(ders_ort1))
// console.log(typeof ders_ort1)
// console.log(ders_ort1 >= 50)


// let ogrenci2ad = "Yiğit";
// let ogrenci2soyad = "Bilgi";
// let doğumt2 = 2010
// let og2_not_1 = 40;
// let og2_not_2 = 40;
// let og2_not_3 = 50;
// let ders_ort2 = (og2_not_1 + og2_not_2 + og2_not_3) / 3;

// console.log(parseFloat(ders_ort2))
// console.log(typeof ders_ort2)
// console.log(ders_ort2 >= 50)

// let su_anki_yıl = new Date().getFullYear(); 

// let ogr1_yas = su_anki_yıl -parseInt(doğumt1);
// let ogr2_yas = su_anki_yıl -parseInt(doğumt2);
// console.log(ogr1_yas)
// console.log(ogr2_yas)

// let sonuc;
// let a = 10, b = 20, c =30;
// // aritmetik operatörler 

// sonuc = a + b;
// sonuc = a - b;
// sonuc = a * b;
// sonuc = a / b;
// sonuc = a % b;
// sonuc = a++;  // a+1
// sonuc = ++a;
// sonuc = --a;
// sonuc = a--;


// atama operatörleri
// sonuç = a
// sonuç += a // sonuç = sonuç + a 

// // Karşılaştırma operatörleri
// sonuc = (a==b)
// sonuc = (a!=b)
// sonuc = (3 ==='3')  // 3 eşit değer ve tip kontrolü yapar.
// sonuc = (a > b)
// sonuc = (a <= b)



// console.log(sonuc)
// console.log(a)

// if (3>2)
// {
//     console.log('merhaba')
// }

// let username = 'abdullah';

// let password = '12345'

// if (username=='abdullah') {
//     if (password == '123645') {
//         console.log('Uygulamaya giriş yapıldı.')
//     }
//     else {
//         console.log('parola yanlış')
//     }
// }
// else {
//     console.log('Kullanıcı adı hatalı.')
// }

let yas = 20
let mezuniyet = 'lise';

if ((yas >= 20) && (mezuniyet== 'lise' || mezuniyet== 'lisans')) {
    console.log('ehliyet alabilir.')
}
else {
    console.log('ehliyet şartları yok.')
}