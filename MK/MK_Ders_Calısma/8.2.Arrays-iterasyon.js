//! *************************************DIZILERDE ITERASYON ***********************************************
// •3. Dizi iterasyon metotları:

// //? Arrayler bırer "object" türüdür. typeof--->ıle bakılabılır. ayrıca bır degıskenın bır array ı barındırıp barındırmadıgının kontrolunu Array.isArray()-veya-instanceof methodlarıyla yapabılıyoruz.

// const myArr = [1, 2, 3];
// const myObj = {firstName: "John", lastName: "Doe", age:24};

// console.log(typeof myArr); // object
// console.log(Array.isArray(myArr)); // true

// console.log(myArr instanceof Array); // true
// console.log(typeof myObj); // object

// console.log(Array.isArray(myObj)); // false
// console.log(myObj instanceof Array); // false
/* 
• JS’de bir dizi içerisinde iterasyon yapmak için çok farklı yollar kullanılabilir.
//! Döngüler ile;
• Klasik for, while, do-while döngüsü
• for in döngüsü
• for of döngüsü
//! Dizi iterasyon metotları ile (En çok kullanılanlar)
•Array.forEach() *Array.every() •Array.map() *Array.some() •Array.filter() *Array.find() •Array.reduce() */

//? FOR DONGUSUYLE DIZI ITERASYONU:
/* //! ÖRNEK: Bir dizideki sayıların toplamını hesaplayan uygulamayı For döngüsü ile yazınız.
const rakamlar = [-5, 15, 22, -4, 45, 78, -25];
const total = 0;
for (let i = 0; i < rakamlar.lenght; i++) {
        total += rakamlar[i];
}
console.log(total);

//! ÖRNEK: Bir dizideki pozitif ve negatif sayıların toplamını hesaplayan uygulamayı For döngüsü ile yazınız. topla adında bir fonksiyonda hesaplamayı yapınız.
const dizi = [-5, 15, 22, -4, 45, 78];
const topla = (dizi) => {
let negatifler = 0;
let pozitifler = 0;
for (let i = 0; i < dizi.length; i++) {
if (dizi[i] < 0) {
negatifler += dizi[i];
} else {
pozitifler += dizi[i];
} }
console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
console.log(`Dizideki Pozitif Sayıların Toplamı: ${negatifler}`);
};
topla(dizi);


























*/
