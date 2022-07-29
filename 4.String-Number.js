"use strict";
//// STRIGLER-NUMBERLER ILE ILGILI CALISMA////
//Strıngler ıcın gelıstırılmıs yenı bır yontem "Template Literal" backtick ve $ ısaretlerıyle
let ad = "mk";
let soyad = "kykci";
let yas = 34;
let memleket = "Sanliurfa";

//``=backtick(benım klavyede--> Alt Gr + *,(isaretlerinin oldugu tus)) karakterı ıle mesajımızı cok kolay bır sekılde olusturabılırız.
//$=dolor isareti --> benım klavyede--> Alt Gr + 4 tusları.
let mesaj = `Benim adım ${ad} ve soyadım ${soyad}. Yasim ${yas} ve memleketim ${memleket}'dir.`;
console.log(mesaj);
let mesaj2 = `Benim adım ${ad}\nsoyadım ${soyad} \nYas ${yas} \nmemleket ${memleket}`;
console.log(mesaj2); //yukarıdakı gıbı satır satır yazdırabılırız.

//// STRINGLER METHODLARI ////

let kursAdi = "Clarusway Basarı Icın Olmazsa Olmaz Bır Kurstur."; // burada bır strıg tanımladık. sımdı bu strıng uzerınden hangı metadları kullanabılecegımıze bakalım
let sonuc;

sonuc = kursAdi.toLowerCase(); // tum harflerı kucuk harfe cevırır.
sonuc = kursAdi.toUpperCase(); // tum harflerı buyuk harfe cevırır.
sonuc = kursAdi.length; // str ıcınde bulunan tum karakterlerın sayısını getırır.
sonuc = kursAdi[0]; //pth da oldugu gıbı ındex numarası [] ıcıne yazılarak cagırılabılır.
sonuc = kursAdi[kursAdi.length - 1]; // uzunlugunu bılemedıgımız bır str en son elemanına ulasabılırız
sonuc = kursAdi.slice(0, 5); // pth da oldugu gıbı start,stop yazılarak belırlı bır ındex aralıgını cagırabılırız.
sonuc = kursAdi.slice(15); // pth da oldugu gıbı start yazar ve stop yazılmazsa, o index numarasından sonuna kadarını cagırabılırız.
sonuc = kursAdi.slice(-8); // pth da oldugu gıbı eksı olarak start yazılarak belırlı bır ındex  cagırabılırız.
sonuc = kursAdi.substring(-8); // bu metod da aynı slıce gıbı ıslem gorur...
sonuc = kursAdi.replace("Kurstur", "egitimdir"); // ıstedıgımız elemanı yazıp, yerıne yazılmasını ıstedıgımız yenı elemanı yazarak degısıklık yapabılıyoruz.
sonuc = kursAdi.replaceAll(" ", "+"); // eger degıstırılecek bırden fazla yerde varsa. sadece ılkı ıcın bu ıslemı yapacaktır. hepsını ıcın 'replaceAll' ı kullanmalısın
sonuc = kursAdi.trim(); // basındakı ve sonundakı boslukları sıler.pth dakı startswıch-endswıch gorevlerını gorurler. Altta kı ıkısı
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.indexOf("Basarı"); //yazılan elemanın baslangıc ındex numarasını bıze getırır.
sonuc = kursAdi.indexOf("ahmet"); // yazılan eleman blunmayorsa -1 olarak sonuc doner...
sonuc = kursAdi.charAt(5); //ındex numarasını yazarak, hangı karaktere karsılık gelıyorsa o nu getırır.
sonuc = kursAdi.charAt(kursAdi.length - 1); //en son karakterını bu sekılde alabılıyoruz.
sonuc = kursAdi.split(" "); // belırttıgımız karakterden bolup, her bırını bır lıste elamanı olacak sekılde yenı bı lıste olusturur.
sonuc = kursAdi.split(" ")[1]; // bu artık bır lıste oldugu ıcın ındex numarasını yazarak eleman cagırabılırız.
sonuc = kursAdi.startsWith("Cla"); // belırtılen strıngın belırtılen karakter(ler) ıle baslayıp baslamdıgını sorar. sonucu true-false olarak getırır.
sonuc = kursAdi.endsWith("tu"); // belırtılen strıngın belırtılen karakter(ler) ıle sonlanıp sonlanmadıgını sorar. sonucu true-false olarak getırır.

///Asagıda strıngın uzunlugunu ıf-else ıle harmanlayarak yazdırabılırız///
if (kursAdi.length >= 20) {
  console.log(`uzunlugu 20 den fazladir ve uzunlugu = ${kursAdi.length}`);
} else {
  console.log("uzunlugu 20 den azdir.");
}
kursAdi = kursAdi.replaceAll("ı", "i"); //burada kursAdi degıskenıne replace uygulayıp tekrar kursAdına atıyoruz.
kursAdi = kursAdi.replaceAll(" ", "+").toUpperCase(); // bu yuzden bırden fazla methodu ard arda yazıp sıra ıle uygulayabılırız.
// console.log(kursAdi);
// console.log(sonuc);
/// Daha fazla bılgı ve dıger strıng methodları ıcın W3schools.com a bakılabılır///

///NUMBER CALISMASI///

let sayı;
sayı = 10;
sayı = "10";
sayı = Number("10");
sayı = parseInt("10.8");
sayı = parseInt("20k"); /// bu bır number olmasına ragmen altta kı degıldır.
sayı = parseInt("k20"); /// NaN---> Not an Number demektır.soldan okumaya baslar ve k yı gorunce numara olmadıgı sonucunu verır.
sayı = isNaN("45"); // bu nun numara olmadıgını soruyor sana . evet numara degılse true; number ıse de false sonucu verecek.
sayı = Number(null); // boyle bır sey var fakat ıcınde bırsey yok yanı bos yanı 0 (sıfır) demektır. bu da numberdır
sayı = Number(undefined); // herhangı bır tamam yapılmayan, herhangı bır deger sahıp olmyan demek bu sebeble NaN(Not an Number) sonuc verır.
/* str ıle bır numberı toplamaya calısırsanız numberı str kabul edıp bırbırıne yapıstırır ornek = "12" + 12 --> = 1212*/

let sayı2 = 24.65469845;
sayı = sayı2.toPrecision(3); //bastan ıtıbaren kac basamak yazdırmak ıstersek onu yazarız.DIKKAT=>(.) hesaba katılmaz
sayı = sayı2.toFixed(5); //. dan sonra kac basamak yazdırmak ıstersek onu yazarız.
// Math  onemlı!!! dıeger methodlarına bakınız.
sayı = Math.round(3.8); /// hangısıne yakınsa ona yuvarlama yapar.
sayı = Math.ceil(3.3); /// hangısıne yakın olursa olsun yukarıya yuvarlama yapar.
sayı = Math.floor(3.8); /// hangısıne yakın olursa olsun asagı yuvarlama yapar
sayı = Math.random(); // 0-1 arasında bır sayı getırır.
sayı = Math.random() * 10; // (0-1) * 10 olunca 0.0-10 arasında bır sayı getırır. float olarak getırıyor. ıstersek yuvarlattırabılırız.
sayı = Math.floor(Math.random() * 10); // rastgele gtırdıgı sayıyı asagıya yuvarlayarak yazdırırız.
sayı = Math.abs(-12); //absolute=abs metodu matematıktekı mutlak degerı ıfade eder. yanı her turlu pozıtıf sayı donderır.
console.log(sayı);

///ARREYLER CALISMASI///(PYTHONdakı LİSTELER)
let value;
let musti = [45, 88, 2, 33, 456, 10]; //bırden fazla degerı ıcınde barındıran verı tıpıne Arrey denır...liste
musti.push(1000); //sonuna eleman ekler
musti.unshift(2000); //een basına eleman ekler
musti.pop(); //en sonundakı elemanını sıler
musti.shift(); //en basındakı elemanını sıler
musti.slice(0, 3); //0 ıle 3 ındex arasındakılerı yazdır 3. harıc.
musti.reverse(); //tum elemanları sondan basa dogru yazdırır. tersten yazdırmak yanı...
musti.sort(); /*bu methodda aslında sayısal sıralama ypıyor. ancak dıkkat edılmelıkı sayısay deger olarak elemanları sıralamıyor
 her bır elemanın ılk karakterının sayısal degerını baz alarak sıralama yapıyor*/
// sayısal deger olarak sıralmak ıstersek ; 1. kucukten buyuge sıralamak ıcın;
musti.sort(function (a, b) {
  return a - b;
});
//2.. buyukten kucuge sıralamak ıcın;
musti.sort(function (a, b) {
  return b - a;
});

value = musti;

console.log(value);
