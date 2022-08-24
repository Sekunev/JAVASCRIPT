//Fonksıyon tanımlama//

function selam() {
  console.log("selam tum dostlarıma");
} // functıon kelımesı + fonk.koyacagımız isim + () + {} ve { ıcıne de calısmasını ıstedıgımız kod blogunu yazarız}
selam(); // fonsıyonumuzu cagırıyoruz...

function selam(name, age) {
  console.log(`selam ${name} senın yasın ${age} 'dir.`);
} // fun. tanımlarken ıstedıgımız kadar parametre tanımlatabılırız, atamayla da sınırlı kalabılırız.
selam(); // burada 2 adet arguman gondermezsek her ıkısıne undefied cıktısı verır.

function selam(name = "Mustafa", age = "34") {
  console.log(`selam ${name} senın yasın ${age} 'dir.`);
}
selam(); // name ve/veya age herhangı bır arguman gondermezsek yukarıda default olarak  tanımladıklarımız ekrana gelır.

function selam(name = "Bilgi Yok", age = "Bilgi Yok") {
  console.log(`selam ${name} senın yasın ${age} 'dir.`);
}
selam("Ali"); // sadece bırını yazdım, o ekrana gelır, age ıcın ıse Bilgi Yok yazısı gelecektır.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//...RETURN...//
function kareal(a) {
  console.log(a * a);
}
function kupal(a) {
  console.log(a * a * a);
}
let x = kareal(3);
x = kupal(x);
console.log(x);
/*yukarıdakı gıbı yaptıgımızda; ılk fon. calısır ama 
ıkıncı fon. ıcın herhangı bır deger dondurulmedıgı ıcın ıkıncı fonk. calısmayacaktır. 
cunku bız sadece ılk fonk. consola yazdırdık. fızıkı dunyaya bır deger getırmedık.
ılk fonk. kareal calıstı fakat bır verı cıkartmadı.
ıste bunun ıcın RETURN anahtar kelımesı kullanılıyor */

function kareal(a) {
  return a * a; //DIKKAT: RETURN fonk. kod blogunun sonlandıgının da gostergesıdır. altına yazacagıumız hıcbırsey calısmaz
}
function kupal(a) {
  return a * a * a;
}
let y = kareal(3);
y = kupal(y);
console.log(y);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functıon Expressıon//
/* bır fonk.tanımlarken bunu aynı zamanda bır degıskene atayabılırız. bu cok sık kullanılacak bır durumdur. */
const merhaba = function () {
  console.log("merhaba yazdırır");
}; // DİKKAT : burada functıon dan sonra herhangı bır ad yazmıyoruz. fonksıyonun adı, fonk. atadıgımız degerın kendısıdır.
merhaba();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Immediately Invoked Functıon Expressıon (IIFE)
//sadece olusturuldugu yerde calısabılen bır fonksıyon cesıdıdır.
(function (name) {
  console.log("selam dunyanın en trencı cocugu: " + name);
})("Bahadır :)");
/*formatımız bu sekıldedır. ıstedıgımız parametreyı(buradakı name gıbı) tanımlayabılırız.
 En sonunda ona atama yapmamız gerekıyor. yoksa undefined deger donderır  */
