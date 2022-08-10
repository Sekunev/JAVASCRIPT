// var a = 5
// var b = 25
// console.log(15) //!var ile tanımladığımız değişkenler stack'de kaydedilir. bunu görmek için consol'a window yazılır 2 defa enter'a basıldığında stack'deki bu değişkenler listelenir.

// Bir JavaScript değişkeninin türünü bulmak için JavaScript "typeof" operatörünü kullanabiliriz.
// console.log(typeof"hello")

// JavaScript dilindeki türler kümesi, primitive values ve objects oluşur.

// 1- primitive values 
// ● undefined : typeof aValue === "undefined"
// ● null : typeof aValue === "object"
// console.log(typeof null)
// console.log(typeof undefined)
// ● Number : typeof aValue === "number"
// ● String : typeof aValue === "string"
// ● Boolean : typeof aValue === "boolean"
// ● BigInt : typeof aValue === "bigint"
// ● Symbol : typeof aValue === "symbol"

// 2- Object Data type(Reference type)
// typeof aValue === "nesne". anahtar/değer çiftlerini depolamak için yerleşik bir veri türüdür. Nesnelerin içindeki veriler sırasızdır ve değerler herhangi bir türde olabilir: new Object, new Array, new Map, new Set, ... new anahtar sözcüğüyle yapılan hemen hemen her şey;

// 2-A  Functions = Objects
// typeof aValue === "function" Fonksiyonlar aynı zamanda nesnelerdir, yani referans türleridir. Bir dizi eylemi gerçekleştirmek için düzenli, yeniden kullanılabilir kod sağlamak için JavaScript'teki temel yapı taşlarından biridir.

// let aValue;
// console.log("1. " + typeof aValue);
// undefined, bir değişkenin bildirildiği ancak hiçbir değerin atanmadığı anlamına gelir. 

// aValue = null; // beware: null is a value, not a reference
// console.log("2. " + typeof aValue);
// Sadece “hiçbir şey”, “boş” veya “bilinmeyen değer”i temsil eden özel bir değerdir. Yukarıdaki kod, value'nin bilinmediğini belirtir. null , bir nesne değerinin kasıtlı olarak bulunmadığını gösteren özel bir anahtar kelimedir, null primitive bir türdür.

// aValue = 42;
// console.log("3. " + typeof aValue);
// Diğer birçok programlama dilinden farklı olarak, JavaScript tamsayılar, kısa, uzun, kayan nokta vb. gibi farklı sayı türleri tanımlamaz. JavaScript'te yalnızca bir sayı türü vardır .
// console.log( 7.3e9);  // 7.3 billions (same as 7300000000 or 7_300_000_000)

// aValue = "Clarusway";
// aValue = 'Clarusway';
// aValue = `Clarusway`;
// 👆 3 ways to define a string
// console.log("4. " + typeof aValue);
// let firstName = `John`;
// let lastName = "Doe";
// let myCity = 'Tysons';
// console.log(`I'm ${firstName} ${lastName}. I live in ${myCity}`);

// aValue = true;
// console.log("5. " + typeof aValue);
// console.log(Boolean(3 > 2))

// aValue = 1234567890123456789012345678901234567890n;
// console.log("6. " + typeof aValue);

// aValue = Symbol("Clarusway");
// console.log("7. " + typeof aValue);
// console.log(aValue);

// aValue = { firstName: "John", lastName: "Doe" };
// console.log("8. " + typeof aValue);

// const myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 196
// myCar['color'] = 'red'
// console.log(myCar)
// console.log(myCar.color)



// --------------uygulama----------------

// console.log(typeof 0)
// console.log(typeof 3.14)
// console.log(typeof 'Hello')
// console.log(typeof (8 > 10))
// console.log(8 > 10)jkk
// console.log(typeof '')

// let b = +prompt('Bir rakam giriniz')
// prompt normalde string değer üretir ancak başına + koyduğumuzda number üretir.

// console.log(b, typeof b)

// console.log( typeof typeof b)
// typeof b  --> 'number' olduğundan string döndürür.


// let x;

// do {
//     x = prompt('enter a Number : ');
// }while (isNaN(x));

// let x = 123456789001234
// let y = 123456789001234123

// let z = 0.12345678901234567
// let zz = 0.123456789012345675678

// console.log({x})
// console.log({y},typeof y)

// console.log(z)
// console.log(zz)
// JS tamsayılarda 15 rakamdan sonra doğruluğa garanti vermez. ondalık sayılarda ise 17 rakam.


// let g = 0.1+0.2
// console.log(g) // çoktı 0.30000000000000004
// console.log(g.toFixed(3), typeof g.toFixed(3))
// console.log(+g.toFixed(3), typeof +g.toFixed(3))  // + ile number'a çevirdik.

// let h = 1_000_000_000
// sayılar okunması kolay olması için yukardaki gibide yazılabilir.
// console.log(h)


// let i = 'This "is "a\' """""s"""""tring'; // gerektiğinde kaçış karakteri kullanabiliriz.
// let j = "This '''''i''s a\" string";
// let k = `This is a string`;


// console.log(i,typeof i)
// console.log(j,typeof j)
// console.log(k,typeof k)

// let userName = 'Musa  ';
// console.log(userName)

// console.log('Merhaba ', userName )

// console.log(`Merhaba ${userName}`)

// console.log(`2 + 3 = ${"2" + 3}`)

// console.log('3'* 2)

// let m = ``

// let n = ' '

// let p = 0

// console.log(Boolean(m))
// console.log(Boolean(n))
// console.log(Boolean(p))
// console.log(Boolean(3 > 5))
// console.log(Boolean(3 > 2))

// const myCar = {
//     make : 'ford',
//     model : 'Mustang',
//     year : 1965,
//     color : 'Black'
//   }

//   console.log(myCar)
  
//   myCar.color = 'green'
  
//   console.log(myCar)
  
  //   myCar = 'ford'
  
//   myCar.sunRoof = false;
  
//   console.log(myCar)
  
//   myCar.age = function(current){
//       console.log(current - this.year)
//     }
    
// myCar.age(2010)

//! ---- İLAVE KAYNAKLAR --------


// var urun = 'iphone 5000';  // string
// urun = 'samsung'
// let fiyat = 6000;  //number
// var urun = 'Huvai'
// fiyat = 2000
// const sebze = 'domates'
// const sebze = 'biber' // const ile tanımladığı için değiştirilmez.

// var urun = 'iphone 5000';  // string
// urun = 'samsung'
// let fiyat = 6000;  //number
// var urun = 'Huvai'
// fiyat = 2000
// const sebze = 'domates'
// const sebze = 'biber' // const ile tanımladığı için değiştirilmez.

// console.log(urun)
// console.log(fiyat)
// console.log(typeof urun)  
// console.log(typeof fiyat)

// document.write('HOŞ GELDİNİZ.')  // tarayıcıyıya yazdırmak için.

// let sayi1 = "10"  
// let sayi2 = "20"

// console.log(sayi1+sayi2) // iki str'yi toplarsak concat eder.

// sayi1 = 10; 
// sayi2 = "20";

// console.log((sayi1) + Number(sayi2)); // Num ile str yi concat edemeyiz. Toplayabilmemiz içinse Str'yi İnt'a çevirmeliyim.


// let isim = 'sena'
// let soyad = 'tarım'

// console.log(isim + " " + soyad)

// let kisi = {
//     adi : 'kaya',
//     soyadi : 'demir',
//     yas : '30'
// }

// console.log(kisi.adi)

// function gamze() {
//     console.log('abdullah')
//     console.log('Cooper')
//     console.log('veli')
    
// }
// gamze() // fonksiyon içinde tanımlanan bütün veriler yazdırıldı.


// Tür dönüşümü
// let a = "Tür dönüşümü"
// console.log("Tür dönüşümü")

// int --> str'ye çevirme.

// sayi1 = 10;
// sayi2 = 20;

// console.log(sayi1.toString() + sayi2.toString());  // yada concat için int 'leri str'ye çevirmeliyiz. yöntem: int.toString()

// let val;
// val = String(10)  // Bir int 'i str'ye çevirdik.

// bool to str
// val = String(true);

// date to string
// val = String(new Date());

// array to string
// val = String([1, 2, 3])

// toString()
// val = (10).toString();

// Str to Number

// val = Number('10');
// val = Number(true);  // 1 döner
// val = Number(false); // 0 döner
// val = Number(null);  // 0 döner.
// val = Number('a');  // NaN Not An Number döner. str ifade int'e çevrilemez.
// val = Number([1,2,3]); // NaN Not An Number döner. array ifade int'e çevrilemez.
// val = parseInt('10')  // tamsayı döner.
// val = parseFloat('10.5')  // float döner.


// console.log(val)
// console.log(typeof val)
// console.log(val.toFixed(2))
//toFixed virgülden sonra kaç basamak yazılacağını ifade eder.


// str --> int'e çevirme.
// sayi1 = Number('10');
// sayi2 = Number('20');

// console.log(sayi1 + sayi2);  // şimdi toplama yapar

// let degisken = 'malatya' + 44 + 46  // concat eder.

// console.log(degisken)

// let x = 11e+7 // retrn --> 110000000
// x = 11e-7 // retrn --> 0.0000011
// console.log(x)


// console.log('uygulama')
// let sinav_notu = 70;
// let basarilimi = (sinav_notu >= 50)

// console.log(basarilimi);
// console.log(typeof basarilimi);  // türü boolean

// let yas;  // herhangi bir değer atamadığımız için undefined 'dır.
// console.log(yas);
// console.log(typeof yas) // Türüde undefined dır.

// let yas = "";  // karakteri olmayan bir string atadık. 
// console.log(yas);
// console.log(typeof yas) //!string


// ---------UYGULAMA------------

// let ogrenci1ad = "ada";
// let ogrenci1soyad = "Bilgi";
// let doğumt1 = 2012
// let og1_not_1 = 70;
// let og1_not_2 = 70;
// let og1_not_3 = 80;
// let ders_ort1 = (og1_not_1 + og1_not_2 + og1_not_3) / 3;
// console.log(parseInt(ders_ort1))  // parseInt tamsayı istiyorsak bu yöntemi kullanıyoruz.
// console.log(typeof ders_ort1)
// console.log(ders_ort1 >= 50)


// let ogrenci2ad = "Yiğit";
// let ogrenci2soyad = "Bilgi";
// let doğumt2 = 2000
// let og2_not_1 = 40;
// let og2_not_2 = 40;
// let og2_not_3 = 50;
// let ders_ort2 = (og2_not_1 + og2_not_2 + og2_not_3) / 3;

// console.log(parseFloat(ders_ort2)) //parseFloat ondalık istiyorsak bu yöntemi kullanıyoruz.
// console.log(typeof ders_ort2)
// console.log(ders_ort2 >= 50)

// let su_anki_yıl = new Date().getFullYear(); 

// let ogr1_yas = su_anki_yıl -parseInt(doğumt1);
// let ogr2_yas = su_anki_yıl -parseInt(doğumt2);
// console.log(ogr1_yas)
// console.log(ogr2_yas)