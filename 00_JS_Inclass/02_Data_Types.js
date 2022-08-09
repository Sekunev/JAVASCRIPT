// Bir JavaScript değişkeninin türünü bulmak için JavaScript "typeof" operatörünü kullanabiliriz.
console.log(typeof"hello")

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
// // aValue = 'Clarusway';
// // aValue = `Clarusway`;
// // 👆 3 ways to define a string
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
// console.log(8 > 10)
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
  
//   //   myCar = 'ford'
  
//   myCar.sunRoof = false;
  
//   console.log(myCar)
  
//   myCar.age = function(current){
//       console.log(current - this.year)
//     }
    
// myCar.age(2010)