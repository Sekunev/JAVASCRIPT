"use strict" // bu sayfada Java script kurallarını uygula.

// alert("hello world")
// tarayıcıda uyarı ifadesi belirir.

// console.error('hata oluştu..') 
// consola hata mesajı yazdır.

// console.warn("bir uyarı oluştu.")  
// consola sarı renkle uyarı mesajı.

// console.table({adı: 'aslı', soyadı: 'tolga', yaşı:26}); 
// tablo oluşturabiliriz.

// console.clear(); 
//consolumuzda yazmıs oldugumuz tum yazıları temızlememıze yanı sılmemıze yarar

// let firstName = prompt('Enter your name:');
// firstName isminde bir değişken atadık. promt metodu ile tarayıcı uyarı şeklinde karşımıza çıkardı. Promt aslında HTML'deki form işlevini yürüttü. bilgi girişi sağlamış oldu.

// alert('firstName :' + firstName);
//alert ile de prompt'la kullanıcıdan aldığımız veriyi ekrana yazdırdık.

// let sonuc = confirm('are you legal?');
// Tarayıcıda confirm ile de true veya false döndüren bir uyarı mesajı alırız.

// tek satır ıcın yorum satırı yapmak ıcın 2 adet bolu ısaretı(//)
// bırden fazla satırı yorum satırı yapmak ıstıyorsak kullanılır. (/*.......*/)

//******* VARİABLE *******//



// let fiyat = 6000;
// let --> keyword, fiyat--> Variable,  "="--> atama operatörü, 6000-->value'dir.

// Atama her zaman sağdan sola doğrudur.

// Değişkenler için isim tanımlamanın genel kuralları; İsimler harf, rakam, alt çizgi ve dolar işaretlerinden oluşabilir. 
// İlk karakter olarak sayılara izin verilmez. 
// İlk karakter; ● bir harf, ● bir alt çizgi ( _ ), ● bir dolar işareti ( $ ) olabilir.
// Ayrılmış kelimeler isim olarak kullanılamaz
// Reserved words değişken adı olarak kullanılmaz.

//*******3 Yöntenle değişken atanabilir.*******//

// var: Değşiken tanımlanırken verilen değer sonradan değiştirilebilir. blok kapsama (block scope) sahip değildir.
// let: ES6 sonrası JS'ye eklenmiştir. let ile tanımlanan değişkene yeni değerler atayabiliriz. Ancak, değişkeni yeniden oluşturamayız. let blok kapsama (block scope) sahiptir. Yani, let ile oluşturulan değişken sadece oluşturulduğu süslü parantezler {} (if-for gibi) içerisinde kullanılabilir, dışarısından erişilemez. bir değişken let ile oluşturulduktan sonra yeni değer ataması yapılabilmesi için başına let yazılmadan atama yapılabilir.
// const: ES6 sonrası JS'ye eklenmiştir. sabit değerli değişkenler yaratabilmemizi sağlar. Değşiken tanımlanırken verilen değer sonradan değiştirilemez ve değişken bir defa tanımlanabilir. 

//VAR-LET-CONST ANAHTAR DEGISKEN
var a; 
//ataması daha sonra da yapılabılır
a = 50;
console.log(a);
var a = 20; 
//yenı bır deger ataması yapabılırız.sorun cıkmaz
console.log(a);

let ab; 
//ataması daha sonra da yapılabılır
ab = 40;
console.log(ab);
ab = 20; 
//yenı bır deger ataması yapabılırız.sorun cıkmaz
console.log(ab);
/* let xy = 10; deger ataması yaptık daha sonra yıne deger ataması yapmaya cakısırsak buna ızın vermez
let xy = 20; bu olmayacaktır. vardan bır farkı bu...*/

/* const isot; deyıp daha sonra tanımlamak ıstersek hata alırız. const isot = [1, 2, 3, 4, 5]; seklınde mutkala tanımlamalıyız.*/
const isot = [1, 2, 3, 4, 5]; 
//sabit bır degısken anlamına gelır.sadece bır kez tanımlanır baska da tanımlama kabul etmez.
//const isot = [1, 2, 3, 4, 5, 6] seklınde yenı tanımlamayı kabul etmez.
isot.push(6); 
//bu sekılde ılave etmede sorun olmaz. zıra sekılde yenı bır tanımlama yapılmıyor. gosterılen yer degısmıyor. sadece deger eklemesı yapılıyor.yerı degısmıyor.

/*var ın global oldugunu varsayabılırız. 
ozelde de (tanımlama yaptıgımız bır ozel yerde) genelde(ozel yerın dısında) de yazdırılmak ıstendıgınde 
her turlu yazar-gelır.
ancak let - const ozel bır yerde tanımlanınca sadece burada calısır. bunun dısında yazdırmak ıstersek
bıze hata olarak donecektır.
degısmesını ıstemedıgımız sıfre-emaıl vs. gıbı degıskenlerın const ıle tanımlanması gerekmektedır.
artık var kullanılmamaktadır... let veya const kullanmaya alısınız...*/

// 3 tür scope vardır. notionda detayları mevcut.

// referans ve primit değişkenler. görsel notion'da mevcut.
// JavaScript değişkenleri aynı yerde saklamaz. Bunun yerine JavaScript'in yaptığı şey, iki yer kullanmasıdır. Bu yerler Stack ve Heap yığınıdır.

// Stack : ilkel veri türleri değerlerini içerir. Örneğin, sayılar, dizeler, boole'ler, tanımsız ve boş. Bu statik veriler ayrıca referansları da içerir. Bu referanslar, oluşturduğunuz nesnelere ve işlevlere işaret eder. Bu verilerin ortak bir yanı var. Bu verilerin boyutu sabittir ve JavaScript bu boyutu derleme zamanında bilir. 
// Heap : JavaScript'in nesneleri ve fonksiyonları depoladığı bir yerdir. bunların ortak özelliği içeriğinin belli olmamasıdır.
// Sonuç olarak değişkene string number atadığımızda değişken ve valuesi stack'da depolanır. ama bir liste, fonksiyon atadığımızda stack'da adı (kısayol gibi) value'si ise heap'da depolanır.

// Stack örnek  (Stack örneği primitive (ilkel yöntem) örneğidir.

// let num1 = 501;
// console.log('num1 :>> ', num1);

// num1 = 888;
// console.log('num1 :>> ', num1);

// let num2 = 467;

// num1 = num2;

// num2 = num2 + 3;

// console.log(num1, num2);

// primitive örnek

// heap örnek; (heap örneği aynı zamanda (referans) örneğidir.)
// const student = {
//     name: 'Nedim',
//     age: 34,
//   };
// console.log(student);
// student stack'da value'si head'da depolandı.

// const otherStudent = student;
// otherStudent.name = 'Dan Brown';
// console.log(student);
// yeni değişkene aynı adres atandı. yeni değişkenin bir elemanı değiştirildiğinde adres aynı head'de depolanan verinin değeri değiştirildi.

// student = {
//     name: 'Ryan',
//     age: 44,
//   };
// hata alırız çünkü const ile atama yaptığımız için immutuble özelliği nedeniyle değiştiremiyoruz.

// başka örnek

var number1 = [1, 2, 3, 4]; // bu arrey dır = liste (ptn)
var number2 = number1;
console.log(number1, number2); // aynı sonucu verır.
number1.push(9); // 9 sayısını eklersek
console.log(number1, number2); //primi.verı turu olsaydı sadece number63 degısırdı
//ama burada number414 de onunla bırlıkte degıssır. refe.verı turlerı aslında bellekte bır yerı kaplamaz sadce gosterır.
//ıkı degerın gosterdıgı yer aynıysa, bırınde bı degısıklık olursa dırekt dıgerının de gosterdıgı yer degısır-degısmıs olacaktır.

// heap örnek; (referans örneği)


// -------1. ders sonu---------

var urun = 'iphone 5000';  // string
urun = 'samsung'
let fiyat = 6000;  //number
var urun = 'Huvai'
fiyat = 2000
const sebze = 'domates'
// const sebze = 'biber' // const ile tanımladığı için değiştirilmez.

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
//toFixed virgülden sonra kaç basamak yazılacağını ifade eder.


// str --> int'e çevirme.
sayi1 = Number('10');
sayi2 = Number('20');

console.log(sayi1 + sayi2);  // şimdi toplama yapar

let degisken = 'malatya' + 44 + 46  // concat eder.

console.log(degisken)

let x = 11e+7 // retrn --> 110000000
x = 11e-7 // retrn --> 0.0000011
console.log(x)





console.log('uygulama')
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
// console.log(ogr2_yas)


