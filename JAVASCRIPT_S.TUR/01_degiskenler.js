"use strict" // bu sayfada Java script kurallarını uygula.
// alert("hello world")
console.error('hata oluştu..') // hata mesajı yazdır.
console.warn("bir uyarı oluştu.")  // uyarı mesajı.
console.table({adı: 'aslı', soyadı: 'tolga', yaşı:26}); // tablo oluşturabiliriz.

// Yorum satırı '//' dır

// 2 yöntenle değişken atanabilir. 

// const: sabit değerli değişkenler yaratabilmemizi sağlar. Değşiken tanımlanırken verilen değer sonradan değiştirilemez ve değişken bir defa tanımlanabilir. 

// let ile tanımlanan değişkene yeni değerler atayabiliriz. Ancak, değişkeni yeniden oluşturamayız. let blok kapsama (block scope) sahiptir. Yani, let ile oluşturulan değişken sadece oluşturulduğu süslü parantezler {} (if-for gibi) içerisinde kullanılabilir, dışarısından erişilemez. bir değişken let ile oluşturulduktan sonra yeni değer ataması yapılabilmesi için başına let yazılmadan atama yapılabilir.

var urun = 'iphone 5000';  // string
urun = 'samsung'
let fiyat = 6000;  //number
var urun = 'Huvai'
fiyat = 2000
const sebze = 'domates'
// const sebze = 'biber' // const ile tanımladığı için değiştirilmez.
// sebze = 'biber' // const ile tanımlandığı için değişmez. 

// Değişken belirlerken;
// Türkçe karekter kullanma
// arada boşluk olmaz
// sayı ile başlamaz.

console.log(urun)
console.log(fiyat)
console.log(typeof urun)  
console.log(typeof fiyat)

// document.write('HOŞ GELDİNİZ.')  // tarayıcıyıya yazdırmak için.

let sayi1 = "10"  
let sayi2 = "20"

console.log(sayi1+sayi2) // iki str'yi toplarsak concat eder.

sayi1 = 10; 
sayi2 = "20";

console.log((sayi1) + Number(sayi2)); // Num ile str yi concat edemeyiz. Toplayabilmemiz içinse Str'yi İnt'a çevirmeliyim.


let isim = 'sena'
let soyad = 'tarım'

console.log(isim + " " + soyad)

let kisi = {
    adi : 'kaya',
    soyadi : 'demir',
    yas : '30'
}

console.log(kisi.adi)

function gamze() {
    console.log('abdullah')
    console.log('Cooper')
    console.log('veli')
    
}
gamze() // fonksiyon içinde tanımlanan bütün veriler yazdırıldı.


// Tür dönüşümü
// let a = "Tür dönüşümü"
console.log("Tür dönüşümü")

// int --> str'ye çevirme.

sayi1 = 10;
sayi2 = 20;

console.log(sayi1.toString() + sayi2.toString());  // yada concat için int 'leri str'ye çevirmeliyiz. yöntem: int.toString()

let val;
val = String(10)  // Bir int 'i str'ye çevirdik.

// bool to str
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1, 2, 3])

// toString()
val = (10).toString();

// Str to Number

// val = Number('10');
// val = Number(true);  // 1 döner
// val = Number(false); // 0 döner
// val = Number(null);  // 0 döner.
// val = Number('a');  // NaN Not An Number döner. str ifade int'e çevrilemez.
val = Number([1,2,3]); // NaN Not An Number döner. array ifade int'e çevrilemez.
val = parseInt('10')  // tamsayı döner.
val = parseFloat('10.5')  // float döner.

console.log(val)
console.log(typeof val)
console.log(val.toFixed(2))



// str --> int'e çevirme.
sayi1 = Number('10');
sayi2 = Number('20');

console.log(sayi1 + sayi2);  // şimdi toplama yapar

let degisken = 'malatya' + 44 + 46  // concat eder.

console.log(degisken)

let x = 11e+7 // retrn --> 110000000
x = 11e-7 // retrn --> 0.0000011
console.log(x)






let sinav_notu = 70;
let basarilimi = (sinav_notu >= 50)

console.log(basarilimi);
console.log(typeof basarilimi);  // türü boolean

// let yas;  // herhangi bir değer atamadığımız için undefined 'dır.
// console.log(yas);
// console.log(typeof yas) // Türüde undefined dır.

let yas = "";  // karakteri olmayan bir string atadık. 
console.log(yas);
console.log(typeof yas)

let ogrenci1ad = "ada";
let ogrenci1soyad = "Bilgi";
let doğumt1 = 2012
let og1_not_1 = 70;
let og1_not_2 = 70;
let og1_not_3 = 80;
let ders_ort1 = (og1_not_1 + og1_not_2 + og1_not_3) / 3;
console.log(parseInt(ders_ort1))  // parseInt tamsayı istiyorsak bu yöntemi kullanıyoruz.
console.log(typeof ders_ort1)
console.log(ders_ort1 >= 50)


let ogrenci2ad = "Yiğit";
let ogrenci2soyad = "Bilgi";
let doğumt2 = 2000
let og2_not_1 = 40;
let og2_not_2 = 40;
let og2_not_3 = 50;
let ders_ort2 = (og2_not_1 + og2_not_2 + og2_not_3) / 3;

console.log(parseFloat(ders_ort2)) //parseFloat ondalık istiyorsak bu yöntemi kullanıyoruz.
console.log(typeof ders_ort2)
console.log(ders_ort2 >= 50)

let su_anki_yıl = new Date().getFullYear(); 

let ogr1_yas = su_anki_yıl -parseInt(doğumt1);
let ogr2_yas = su_anki_yıl -parseInt(doğumt2);
console.log(ogr1_yas)
console.log(ogr2_yas)


l = 122
l.to