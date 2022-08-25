const prompt = require("prompt-sync")();
//!İf-Else if Kosullu Durumlar///
/*
Bir koşul ise, bir eylem gerçekleştirilebilir ve koşul ise başka bir eylem gerçekleştirebilirsiniz.
JavaScript'te3 tür Koşullu İfade vardır:
1. if-else ifade
2. Ternary yapısı ifadesi
3. switch statement*/

//* boylece yesıl olarak yazar
//?mavı yazar
//! kırmızı yazar

console.log("merhaba if-else konusuna hosgeldınız");
// bu yazıyı bellı bır kosula baglayarak yazdırdmak ısteyebılırız. kosulumuz gerceklesırse bu yazıyı-code blogunu calıstır dıyebılırız.

if (3 < 8) {
  // buradakı sartım true donerse altındakı blogu calıstırır.
  console.log("selam");
}
//! ***************** ÖRNELER *******************
//? ornek olarak bır kullanıcının username ve password gırısını kontrol eden bır code yazalım...
let username = "mk";
let password = "6363";
if (username == "mk") {
  //true gelırse alt blogu calıstır...false gelırse else bloguna gıt
  if (password == "6363") {
    console.log("kullanıcı gırısı dogrulandı");
  } else {
    console.log("parola gırısı dogrulanmadı");
  }
} else {
  console.log("gırıs yapılamadı. username yanlıs gırıldı");
}
///?ornek: gırılen sayının pozıtıf negatıf olup olmadıgını kontrol eden  kodu yazınız??
const sayim = prompt("lütfen bir sayi giriniz: ");
if (sayim > 0) {
  console.log(`${sayim} pozitiftir.`);
} else if (sayim < 0) {
  console.log(`${sayim} negatiftir.`);
} else {
  console.log(`${sayim} 0'a esittir.`);
}
//? ORNEK: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.
const n1 = +prompt("Sayi1:");
const n2 = +prompt("Sayi2:");
const n3 = +prompt("Sayi3:");

//* 1.Yontem
if (n1 >= n2 && n1 >= n3) {
  console.log(`${n1} en buyuk sayidir`);
} else if (n2 >= n1 && n2 >= n3) {
  console.log(`${n2} en buyuk sayidir`);
} else if (n3 >= n1 && n3 >= n2) {
  console.log(`${n3} en buyuk sayidir`);
}

//? ORNEK5: Kaldi-Gecti
const notum = +prompt("lütfen notunuzu giriniz: ");
// let sonucdurum = notum >= 50 ? "gectiniz" : "kaldiniz";
// console.log(sonucdurum);
console.log(notum >= 50 ? "gectiniz" : "kaldiniz");

//? ORNEK6:
const yas = 17;
const cinsiyet = "erkek";
const saglikli = false;

// let askerlikDurumu = (yas >= 18 && cinsiyet === "erkek" && saglikli) ? "Gel teskere Gel teskere sarkısını soyle :)" : "haydi yine iyisin :)";
// console.log(askerlikDurumu);

yas >= 18 && cinsiyet === "erkek" && saglikli
  ? console.log("askerlik yapmali")
  : console.log("Askerlik yapmasina gerek yok");

//! ODEV1: Dort Islem Hesap Makinasi yapınız;
const nummer1 = Number(prompt("bir sayı giriniz:"));
const nummer2 = +prompt("bir sayı giriniz:");
const operatör = prompt("+,-,/,* dan herhangi bir operatör giriniz:");
let sonuc = 0;
switch (operatör) {
  case "+":
    sonuc = nummer1 + nummer2;
    break;
  case "-":
    sonuc = nummer1 - nummer2;
    break;
  case "*":
    sonuc = nummer1 * nummer2;
    break;
  case "/":
    sonuc = nummer1 / nummer2;
    break;
  default:
    alert("Yanlis islem girisi");
    break;
}
console.log(`${nummer1} ${operatör} ${nummer2} = ${sonuc}`);

//! ODEV2 : Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.
const maas = Number(prompt("Maasinizi giriniz"));
const asgariUcret = 5500;
const zamliMaas = maas >= asgariUcret ? maas * 1.1 : maas * 1.5;
console.log("NORMAL MAAS:", maas, "ZAMLI MAAS:", Math.trunc(zamliMaas));

//!ODEV4: Kredi Risk Programı
//? Console’dan kişinin gelir ve gider miktarını alan
//? eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//? değilse Kredi Verilemez 🥺
//? şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gider = Number(prompt("Giderlerinizi giriniz"));
const gelir = Number(prompt("Gelirleriniz giriniz"));
const kredi = gelir - gider >= 5000 ? "KREDI ALABILIR 🤑" : " KREDI ALAMAZ 🥺";
console.log(kredi);

//! ////YUKARIDA UZUN SEKILDE DEGIL DE MANTIKSAL OPERATORLERIYLE DAHA KISA YAZALIM///////
//1. Not operatoru ---> ! ısaretıyle ıfade edılır. onune geldıgı trueyu false;falseu true ya cevırıyor
//2. and ---> &&(shift+6) isaretıyle ıfade edılır. hepsı true olursa en sondakı true degerı doner... sadece bır tane bıle false olursa sonuc ılk falsyı deger olur...//! ///(true, true = true ---- true, false = false)
//3. or ---> || (Alt Gr+Ctrl+<|> tusu)isaretıyle ıfade edılır. tamamı false olursa en sonkı false deger doner... sadece bır tane bıle true olsa ılk truety degerı doner. //! ///(true, true = true ---- true, false = false

//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const islem = 1; // islem =true -false dıye yazılarak da kontroller yapılabılır.
if (islem === 1) {
  // bır kosulun true olması halınde hemen alt blogunu calıstırır
  console.log("bırıncı ıslem gecerlı");
} else if (islem === 2) {
  // if kosulunun false olması halınde yukardan asagıya dogru tek tek kontrol baslar. hangısı true ıse o blok calısır.
  console.log("ikinci ıslem gecerlı");
} else if (islem === 3) {
  console.log("ucuncu ıslem gecerlı");
} else {
  //if ve else if kosullarından hıc bırının true olmaması halınde else blogu otomatık olarak calısır...
  console.log("gecerlı islem tanımlanamadı");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ternary Operatoru//
/*yukarıda yazmıs oldugumuz if - else kod blogunu daha kısaca yazma yontemıdır. dıkkat edın sadece bır islem yapılması halınde bunu kullanabılırsınız
Genellikle bir sonuç elde etmek için basit karşılaştırmalarda kullanılır. Üçlü bloklar iç içe yerleştirilebilir, ancak kodunuzun anlaşılmasını zorlaştırdığı için önerilmez. 
//! condition ? expression1 : expression2
 burada  condıtıons(sartımız) true donerse : nın sol tarafundakı expression1; false donerse expression2 doner.*/

const hesap = 100;
if (hesap === 100) {
  console.log("hesap dogrulandı");
} else {
  console.log("hesap dogrulanmadı...HATA...");
}

/*Ternary:          ? kosul true ıse calıstır (sagındakı kodu)
                    : kosul false ıse calıstır (sagındakı kodu) */

console.log(hesap === 100 ? "hesap dogrulandı" : "hesap dogrulanmadı...HATA..");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Sadece bir islem yapacaksak if ve else de {} parantezler kullanılmayabılır. hıcbır problem olusmayacaktır.*/
if (hesap === 1400) console.log("hesap dogrulandı");
else console.log("hesap dogrulanmadı...HATA...");

//! ///////////////////////////////////////////////////////////////////////////////////////////
//Switch Yontemi//
/* aslında bu yondem if-else ın yapmıs oldugu goreyı yapıyor. bazı yerlerde bunun kullanılması daha faydalı olacaktır.;
1. bır degıskenı switch ıcıne yazıyoruz.
2. kac tur ıhtımal-durum var ıse alta o kadar case yazıyoruz
3. en sonunda else yerını alan default umuzu yazıyoruz. 
4. her bır case sonuna mutlaka break ı yazmamız gerekıyor. 
yoksa kural geregı sartı saglayan case altındakı kod blogunu calıstırsa da,
switch kuralı geregı devamındakı case kod bloklarını da calıstırır
NOT: Yanı bu yontemde tum caseler tek tek kontrol edılır, true olan deger tespıt edıldıgı andan ıtıbaren yazdırılmaya baslanır ta kı break anahtar kelımesını kullanana kadar.
Bu yuzden her bır case sonrası break kelımesı kullanılmalıdır. default sonunda kullanılmasa da onemlı degıl.
zıra switch bıtmıs oluyor. */

const vatan = 63;
switch (vatan) {
  case 1:
    console.log("vatan topragı");
    break;
  case 63:
    console.log("vatan 63");
    break;
  case 456:
    console.log("vatansızlık");
    break;
  default:
    console.log("vatansızlık oldurur, vatan delilerini");
}
