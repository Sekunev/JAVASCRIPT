"use strict";

//*******GIRIS-GENEL BİLGİLER*******//

/* 1. "use strict" yazarsak. burada  katı kurallar gecerlı olsun demektır...
tavsıye edılıyor sıddetl...
tarayıcıya sadece js kuralları gecerlı kendı sacma komplekslerıne gırme sadece js kuralları gecerlı olsun demektır.
html sayfasında genelde css ve js. body nın kapanıs etıketınıın hemen ustune yazılır.
bunun sebebı SEO dur. sayfanın daha hızlı yuklenmesı ıcın bu yere konumlandırıyoruz.
2. tek satır ıcın yorum satırı yapmak ıcın 2 adet bolu ısaretı(//)
3. /*.......bırden fazla satırı yorum satırı yapmak ıstıyorsak kullanılır.
4. degıskenlerın yerıne atanan degerlerı yazınca aynı sonucu verecektır bıze
degısken tanımlama yaparken ;
5. Türkçe karakter kullanmayın...
6. Kelımeler arasına bosluk koymayın...
7. sayı ıle baslanmayın...
8. bırden cok kelıme varsa ılki harıc dıgerlerı buyuk harf ıle yazılır...*/

console.log(); //icine yazdıgımızı consolda goruntulememıze yarar = print()... bunu daha cok j.s. ogrenırken yapılanların goruntulenmesı amacıyla kullanılan bır functıon.
console.error("bu sayfa bulunamadı"); //hata halınde yazılacak yazıyı belıtır.kırmızı yazar.
console.warn("bu bir uyarıdır"); //uyarı yazısı yazılabılır rengı sarıdır.
console.clear(); //consolumuzda yazmıs oldugumuz tum yazıları temızlememıze yanı sılmemıze yarar

console.log("merhaba, js... senınle yenı bır baslangız yapıyorum...");
// cıft slash-bolu ısaretı yorum satırı yapar...

//// VERİ TİPİLERİ////
// 1. PRİMİTİVE VERİ TİPLERİ(Number-Strıng-Boolean-null-undefined) //
var a = 10; //Number veri tipi
var b = 6.2; //Number veri tipi
console.log(a); // dersek kendısıne atadıgımız degerı-karsılıgı goruntulerız.
console.log(b); // dersek kendısıne atadıgımız degerı-karsılıgı goruntulerız.
console.log(typeof a); // dersek tıpını goruntulerız.
console.log(typeof b); // dersek tıpını goruntulerız.

var name = "Mustafa"; ///strıng verı tıpı
console.log(name); // dersek kendısıne atadıgımız degerı-karsılıgı goruntulerız.
console.log(typeof name); //dersek tıpını goruntulerız.

var x = false; //boolean veri tipi
var y = true; //boolean veri tipi
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);

var mk = null; //burada boyle bır degısken var ama kendısıne tanımlanan herhngı bır deger yok anlamına gelıyor
console.log(mk); // hıc bır deger tasımadıgını bılmelıyız.
console.log(typeof mk); //object dıye sonuc verıyor. bu j.s. de bır bug(hata) ornegıdır.

var km; //burada herhangı bır deger ataması yapmadık. tanımsız kaldı
console.log(km); // undefined olarak cıktı verır. yanı degersız.
//null degerde ona bır yer ayırıyoruz ama ıcı bos. undefined a ise hic deger bile atamıyoruz.

//AYRICA PRİ.VERI TURLERINE ORNEKLER//
var urunAdi = "samsung";
let urunFiyati = 15000;

console.log(typeof urunAdi); //strıng
console.log(typeof urunFiyati); //number (pythondakı ınt=number)

let sayi1 = "10";
let sayi2 = "80";
console.log(Number(sayi1) + Number(sayi2)); // str olarak yazsaydık sonuc: 1080 olacaktı.(python ıle aynı) number ıcıne alarak numerık hale getırıyoruz...

let sayi3 = 10;
let sayi4 = 80; // yukarıda str numbere cevırdık. burada tam tersıını yapıyoruz.
console.log(sayi3.toString() + sayi4.toString());
//toString metoduyla number olan bır sayısal deger str ıcıne alınır yanı str yapılır. cevap =1080 olacaktır

let sinavNotu = 50;
let basarilimi = sinavNotu >= 50;

console.log(basarilimi); // true olarak donecektır
console.log(typeof basarilimi); //boolean verı turu olacakatır.

let yas; // herhangı bır deger atamadıgımız degıskenımızın adı=undefined
//let yas = ""; //bu sekılde yaparsak. bır str verı turunde fakat ıcı bos bır deger atamıs olacagız. undefined olmaz...

console.log(yas); //undefined
console.log(typeof yas); //undefined

//2. REFERENCE VERİ TİPLERİ(Arrey-) //
var numbers = [1, 2, 3, 4]; // bu arrey dır = liste (ptn)
console.log(numbers); // cıktı bir liste olacaktır.
console.log(typeof numbers); //cıktı object olacaktır.(VERI TIPI object OLAN TUM TIPLER REFERENCE V.T.)

var person = {
  name: "Mustafa",
  age: "34",
}; // bu sekılde kendı objelerımızı olusturabılıyoruz. bu bır dıctıonrydır(ptn)
console.log(person); // cıktı bir liste olacaktır.
console.log(typeof person); //cıktı object olacaktır

var selam = function () {
  console.log("Selam guzel insanlar");
};
console.log("selam"); // onunde f yazan yıne {} ıcınde bır fonksıyon cıktısı verır.
console.log(typeof selam); // functiondır...

/// HER IKI VERI TIPI ARASINDAKI FARK //
var m = 63;
var k = m;
console.log(m, k); // her ıkısının sonucu 63 63 olarak cıkar.
m = 414; // dıye degıstırırsek sadece m degısır, k 63 olmaya devam eder.
console.log(m, k); //m degısır, k 63 olmaya devam eder.primitive veri tipinde bu sekılde oluyor

var number63 = [1, 2, 3, 4]; // bu arrey dır = liste (ptn)
var number414 = number63;
console.log(number63, number414); // aynı sonucu verır.
number63.push(9); // 9 sayısını eklersek
console.log(number63, number414); //primi.verı turu olsaydı sadece number63 degısırdı
//ama burada number414 de onunla bırlıkte degıssır. refe.verı turlerı aslında bellekte bır yerı kaplamaz sadce gosterır.
//ıkı degerın gosterdıgı yer aynıysa, bırınde bı degısıklık olursa dırekt dıgerının de gosterdıgı yer degısır-degısmıs olacaktır.

//VAR-LET-CONST ANAHTAR DEGISKEN
var a; //ataması daha sonra da yapılabılır
a = 50;
console.log(a);
var a = 20; //yenı bır deger ataması yapabılırız.sorun cıkmaz
console.log(a);

let ab; //ataması daha sonra da yapılabılır
ab = 40;
console.log(ab);
ab = 20; //yenı bır deger ataması yapabılırız.sorun cıkmaz
console.log(ab);
/* let xy = 10; deger ataması yaptık daha sonra yıne deger ataması yapmaya cakısırsak buna ızın vermez
let xy = 20; bu olmayacaktır. vardan bır farkı bu...*/

/* const isot; deyıp daha sonra tanımlamak ıstersek hata alırız. const isot = [1, 2, 3, 4, 5]; seklınde mutkala tanımlamalıyız.*/
const isot = [1, 2, 3, 4, 5]; //sabit bır degısken anlamına gelır.sadece bır kez tanımlanır baska da tanımlama kabul etmez.
//const isot = [1, 2, 3, 4, 5, 6] seklınde yenı tanımlamayı kabul etmez.
isot.push(6); //bu sekılde ılave etmede sorun olmaz. zıra sekılde yenı bır tanımlama yapılmıyor. gosterılen yer degısmıyor. sadece deger eklemesı yapılıyor.yerı degısmıyor.

/*var ın global oldugunu varsayabılırız. 
ozelde de (tanımlama yaptıgımız bır ozel yerde) genelde(ozel yerın dısında) de yazdırılmak ıstendıgınde 
her turlu yazar-gelır.
ancak let - const ozel bır yerde tanımlanınca sadece burada calısır. bunun dısında yazdırmak ıstersek
bıze hata olarak donecektır.
degısmesını ıstemedıgımız sıfre-emaıl vs. gıbı degıskenlerın const ıle tanımlanması gerekmektedır.
artık var kullanılmamaktadır... let veya const kullanmaya alısınız...*/

//////////////.....UYGULAMA.....///////////////
//1. iki ogrencının bilgilerini degıskenler ıcerısınde saklayınız
let ogrencı1Isim = "Ada Bilgi";
let ogrencı1Dogum = "2012";
let ogrencı1Not1 = 70;
let ogrencı1Not2 = 70;
let ogrencı1Not3 = 80;

let ogrencı2Isim = "Yigit Bilgi";
let ogrencı2Dogum = "2010";
let ogrencı2Not1 = 40;
let ogrencı2Not2 = 40;
let ogrencı2Not3 = 50;

//2. iki ogrencının yas bilgilerini degıskenler ıcerısınde saklayınız
let suankiYil = new Date().getFullYear(); //new date objesı ıle getfullyear fonksıyonunu cagırınca PCdekı tarıh-saatını getırır.

// let ogrencı1Yas = 2022 - parseInt(ogrencı1Dogum); //parseInt ıle degerımızı tamsayıya donustururuz. aynen Number gıbı ıs gorur
// let ogrencı2Yas = 2022 - parseInt(ogrencı2Dogum);

let ogrencı1Yas = suankiYil - parseInt(ogrencı1Dogum);
let ogrencı2Yas = suankiYil - parseInt(ogrencı2Dogum);

console.log(ogrencı1Yas);
console.log(ogrencı2Yas);

//3. iki ogrencının ders ortalamalarını degıskende tutunuz-saklayınız.
let ogrenci1DersOrt = (ogrencı1Not1 + ogrencı1Not2 + ogrencı1Not3) / 3;
let ogrenci2DersOrt = (ogrencı2Not1 + ogrencı2Not2 + ogrencı2Not3) / 3;
//console.log(ogrenci1DersOrt);
console.log(typeof ogrenci1DersOrt);
console.log(parseInt(ogrenci1DersOrt)); //Float olan bır degerı sua sekılde tamsayıya cevırebılırız.
console.log(ogrenci2DersOrt);
console.log(typeof ogrenci2DersOrt);

//4. iki ogrencının ders ortalamasının 50 nın uzerınde olması halınde gecme notu aldıgını gosterır kodu yazınız.

let gecmeDurumu1 = ogrenci1DersOrt >= 50;
console.log(gecmeDurumu1);
let gecmeDurumu2 = ogrenci2DersOrt >= 50;

console.log(gecmeDurumu2);
/// yukarıdakı gıbı ılk basta degıskene atayabılır daha sonra o degıskenı console.log dan goruntuleyebılırız.
//ya da dırekt sartı console.logtan sartımızı yazarak goruntuleyebılırız.
console.log(ogrenci1DersOrt >= 50);
console.log(ogrenci2DersOrt >= 50);
