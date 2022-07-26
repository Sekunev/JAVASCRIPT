// Yorum satırı '//' dır

// 2 yöntenle değişken atanabilir. 

// const: sabit değerli değişkenler yaratabilmemizi sağlar. Değşiken tanımlanırken verilen değer sonradan değiştirilemez ve değişken bir defa tanımlanabilir. 

// let ile tanımlanan değişkene yeni değerler atayabiliriz. Ancak, değişkeni yeniden oluşturamayız. let blok kapsama (block scope) sahiptir. Yani, let ile oluşturulan değişken sadece oluşturulduğu süslü parantezler {} (if-for gibi) içerisinde kullanılabilir, dışarısından erişilemez. bir değişken let ile oluşturulduktan sonra yeni değer ataması yapılabilmesi için başına let yazılmadan atama yapılabilir.

var urun = 'iphone 5000';  // string
let fiyat = 6000;  //number

// Değişken belirlerken;
// Türkçe karekter kullanma
// arada boşluk olmaz
// sayı ile başlamaz.

console.log(typeof urun)  
console.log(typeof fiyat)

// let sayi1 = "10"  
// let sayi2 = "20"

// console.log(sayi1+sayi2) // iki str'yi toplarsak concat eder.

// let sayi1 = 10; 
// let sayi2 = "20";

// console.log((sayi1) + Number(sayi2)); // Num ile str yi concat edemeyiz. Toplayabilmemiz içinse Str'yi İnt'a çevirmeliyim.

let sayi1 = 10;
let sayi2 = 20;

console.log(sayi1.toString() + sayi2.toString());  // yada concat için int 'leri str'ye çevirmeliyiz. yöntem: int.toString()

let isim = 'sena'
let soyad = 'tarım'

console.log(isim + " " + soyad)

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