//! Ilk Derslerden;

console.log("selam");
// console.log();
// let firstname = prompt("enter your name:");
// alert("firstname" + " " + firstname);
// let result = confirm("are you legal?");
// console.log(result);
var myNumber1 = 11;
let myNumber2 = 5;

var myNumber1 = 22; // bu tekrar tanımlamaktır. myNumber1 = 22 deger guncellemesı her ıkısınde de calısır hata vermez.
let myNumber2 = 8;
//! bu hata verır. dha once tanımlamıs oldugun seyı tekrar tanımlayamazsın. let kullanma sebeplerımızden bır tanesı.

// const; adres tanımlıyoruz. adres tekrar degısmez aynı kutuda kalır.
// let; adres degısır, kutuyu komple degısır.

// let b = prompt("buraya input sekılnde bır girdi olacak");
console.log(b);
// prompt ınput gıbı, bu sekılde str gelır. number olarak gelmesını ıstersek ;basına + koyuyoruz.
let b = +prompt("buraya input sekılnde bır girdi olacak");
//! ancak basında artı oldu ıcın bunun typeof u number olur. ancak kullanıcı number yerıne baska bırsey gırerse o yazaman Not a Number(NaN) olarak karsımıza cıkacaktır.");

let age;
console.log(age);
// tanımlanmıs fakat degr ataması yapılmamıs bu sebbeple undefıned
console.log(age1);
//!burda hata verır. zıra age1 hıc tanımlanmamısıtr dıyecek.
// hostıng---> const veya let ıle tanımlama yapalım. var ıle tanımlanan degerler functıon calıstırıldıgında en uste alınıyor
//null; kendısıne yer ayrılmıs ancak ıcı bosaltılmıs, ıcınde hıcbır seyın olmadıgı bısey.
console.log(null);

//JavaScript'te var,let, ve const anahtar sözcükleri ile bir değişken bildirebiliriz

// ➤ Bir JavaScript değişkeninin türünü bulmak için JavaScript typeof operatörünü kullanabiliriz.

//! undefıned       : typeof aValue === "tanımsız" (Bir değişken bildirilmiş ancak atanmamışsa, değeri tanımsızdır :)
// null            : typeof aValue === "nesne" (null prımıtıve verı olmasına ragmen, verı tıpı(typeof) olarak bır object tır. bu duzeltılemez bır bug-hatadır. Sadece “hiçbir şey”, “boş” veya “bilinmeyen değer”i temsil eden özel bir değerdir.)

let aValue;
console.log("1. " + typeof aValue);

aValue = null; // burada aValuenın bilinmediğini acıklamaktadır
console.log("2. " + typeof aValue);

aValue = 42;
console.log("3. " + typeof aValue);

aValue = "Clarusway";
// aValue = 'Clarusway';
// aValue = `Clarusway`;
//! 👆 3 ways to define a string(bunların hepsi de aynı seyi ifade etmektedir)
console.log("4. " + typeof aValue);

aValue = true;
console.log("5.1 " + typeof aValue);
aValue = false;
console.log("5.2 " + typeof aValue);

aValue = 1234567890123456789012345678901234567890n;
console.log("6. " + typeof aValue);

aValue = Symbol("Clarusway");
console.log("7. " + typeof aValue);

aValue = {
  firstName: "John",
  lastName: "Doe",
};
console.log("8. " + typeof a); //! bu bır arreydır- objecttır. pty(collectıon type lar gıbı)
