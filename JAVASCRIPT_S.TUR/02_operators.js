let sonuc;
let a = 10, b = 20, c =30;
// aritmetik operatörler 

sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = a % b;
sonuc = a++;  // a yı yazdır sonra 1 artır
sonuc = ++a;  // a'yı 1 artır sonra yazdır.
sonuc = a--;  // a yı yazdır sonra 1 eksilt
sonuc = --a;  // a'yı 1 eksilt sonra yazdır.


// atama operatörleri
sonuc = a
sonuc += a // sonuc = sonuc + a;
sonuc -= a 
sonuc *= a 
sonuc /= a 
sonuc %= a  // sonuç = sonuç %a;


// // Karşılaştırma operatörleri
sonuc = (a==b)
sonuc = (a!=b)
sonuc = (a!==b)  // Tip Kontrolü yapabiliriz.
sonuc = (a > b)
sonuc = (a <= b)
sonuc = (3 === '3')  // 3 eşit işareti değer ve tip kontrolü yapar. bu örnekte aynı tür olmadığı için False döner.

// Mantıksal Operatörler
// && (And)
sonuc = (a > b) && (a>c)

// || (Or)
sonuc = (b > a) || (a > c)

// ! (Not)

sonuç = !(a > b)  // a b'den büyük değilmidir ?


console.log(sonuc)
console.log(a)
console.log(b)
console.log(c)


// uygulama 

const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.70;
const heigtada = 1.50;

IndexAda = (kgAda) / (heigtada*heigtada)
IndexCan = (kgCan) / (heigtada*heigtCan)

console.log(IndexAda, IndexCan)