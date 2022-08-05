"use strict";
//// STRIGLER-NUMBERLER ILE ILGILI CALISMA////

let ad = "mk";
let soyad = "kykci";
let yas = 34;
let memleket = "Sanliurfa";

//``=backtick(benım klavyede--> Alt Gr + *,(isaretlerinin oldugu tus)) karakterı ıle mesajımızı cok kolay bır sekılde olusturabılırız.
//$=dolor isareti --> benım klavyede--> Alt Gr + 4 tusları.
let mesaj = `Benim adım ${ad} ve soyadım ${soyad}. Yasim ${yas} ve memleketim ${memleket}'dir.`;
console.log(mesaj);

//// STRINGLER METHODLARI ////

let kursAdi = "Clarusway Basarı Icın Olmazsa Olmaz Bır Kurstur."; // burada bır strıg tanımladık. sımdı bu strıng uzerınden hangı metadları kullanabılecegımıze bakalım
let sonuc;

sonuc = kursAdi.toLowerCase(); // tum harflerı kucuk harfe cevırır.
sonuc = kursAdi.toUpperCase(); // tum harflerı buyuk harfe cevırır.
sonuc = kursAdi.length; // str ıcınde bulunan tum karakterlerın sayısını getırır.
sonuc = kursAdi[0]; //pth da oldugu gıbı ındex numarası [] ıcıne yazılarak cagırılabılır.
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
