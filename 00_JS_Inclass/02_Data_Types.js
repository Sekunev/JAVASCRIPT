// Bir JavaScript değişkeninin türünü bulmak için JavaScripttypeofoperatörünü kullanabiliriz.
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

let aValue;
console.log("1. " + typeof aValue);
// undefined, bir değişkenin bildirildiği ancak hiçbir değerin atanmadığı anlamına gelir. 

aValue = null; // beware: null is a value, not a reference
console.log("2. " + typeof aValue);
// Sadece “hiçbir şey”, “boş” veya “bilinmeyen değer”i temsil eden özel bir değerdir. Yukarıdaki kod, value'nin bilinmediğini belirtir. null , bir nesne değerinin kasıtlı olarak bulunmadığını gösteren özel bir anahtar kelimedir, null primitive bir türdür.

aValue = 42;
console.log("3. " + typeof aValue);
// Diğer birçok programlama dilinden farklı olarak, JavaScript tamsayılar, kısa, uzun, kayan nokta vb. gibi farklı sayı türleri tanımlamaz. JavaScript'te yalnızca bir sayı türü vardır .
console.log( 7.3e9);  // 7.3 billions (same as 7300000000 or 7_300_000_000)

aValue = "Clarusway";
// aValue = 'Clarusway';
// aValue = `Clarusway`;
// 👆 3 ways to define a string
console.log("4. " + typeof aValue);
let firstName = `John`;
let lastName = "Doe";
let myCity = 'Tysons';
console.log(`I'm ${firstName} ${lastName}. I live in ${myCity}`);

aValue = true;
console.log("5. " + typeof aValue);
console.log(Boolean(3 > 2))

aValue = 1234567890123456789012345678901234567890n;
console.log("6. " + typeof aValue);

aValue = Symbol("Clarusway");
console.log("7. " + typeof aValue);
console.log(aValue);

aValue = { firstName: "John", lastName: "Doe" };
console.log("8. " + typeof aValue);

const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 196
myCar['color'] = 'red'
console.log(myCar)
console.log(myCar.color)

