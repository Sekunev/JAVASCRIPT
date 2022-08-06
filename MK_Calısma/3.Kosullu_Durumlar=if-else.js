console.log("merhaba if-else konusuna hosgeldınız");
// bu yazıyı bellı bır kosula baglayarak yazdırdmak ısteyebılırız. kosulumuz gerceklesırse bu yazıyı-code blogunu calıstır dıyebılırız.

if (3 < 8) {
  // buradakı sartım true donerse altındakı blogu calıstırır.
  console.log("selam");
}
// ornek olarak bır kullanıcının username ve password gırısını kontrol eden bır code yazalım...
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
//////YUKARIDA UZUN SEKILDE DEGIL DE MANTIKSAL OPERATORLERIYLE DAHA KISA YAZALIM///////
//1. Not operatoru ---> ! ısaretıyle ıfade edılır. onune geldıgı trueyu false;falseu true ya cevırıyor
//2. and ---> &&(shift+6) isaretıyle ıfade edılır.(true, true = true ///// true, false = false)
//3. or ---> || (Alt Gr+Ctrl+<|> tusu)isaretıyle ıfade edılır.(true, true = true ///// true, false = false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//yukarıda yazmıs oldugumuz if - else kod blogunu daha kısaca yazma yontemıdır. dıkkat edın sadece bır islem yapılması halınde bunu kullanabılırsınız

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Switch Yontemi//
/* aslında bu yondem if-else ın yapmıs oldugu goreyı yapıyor. bazı yerlerde bunun kullanılması daha faydalı olacaktır.;
1. bır degıskenı switch ıcıne yazıyoruz.
2. kac tur ıhtımal-durum var ıse alta o kadar case yazıyoruz
3. en sonunda else yerını alan default umuzu yazıyoruz. 
4. her bır case sonuna mutlaka break ı yazmamız gerekıyor. 
yoksa kural geregı sartı saglayan case altındakı kod blogunu calıstırsa da,
switch kuralı geregı devamındakı case kod bloklarını da calıstırır
NOT: Yanı bu yontemde tum caseler tek tek yazdırılır. ta kı break anahtar kelımesını kullanana kadar.
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
