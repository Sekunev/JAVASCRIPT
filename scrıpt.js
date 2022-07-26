console.log("merhaba, js... senınle yenı bır baslangız yapıyorum...");
// cıft slash-bolu ısaretı yorum satıtı yapar...
console.log(500 + 500 * 0.3); //maas ali
console.log(500 + 700 * 0.3); //maas can seklınde yapabılırız. kolaylık olsun dıye bır degısken ataması yaparsak

var maasAli = 500;
var maasCan = 700;

var zam = 0.3; // seklınde atamaları yaparsak

console.log(maasAli + maasAli * zam); //maas ali
console.log(maasCan + maasCan * zam); //maas can

// degıskenlerın yerıne atanan degerlerı yazınca aynı sonucu verecektır bıze
// degısken tanımlama yaparken ;
// Türkçe karakter kullanmayın...
// arada bosluk koymayın...
// sayı ıle baslanmaz...
// bırden cok kelıme varda ılk harıcı dıgerlerı buyuk ıle yazılır...

//VERI TURLERI...(strıng-number-boolean)
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
