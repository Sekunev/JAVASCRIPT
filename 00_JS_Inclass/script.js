let url = "https://www.clarusway.com/";
let kursAdi = "Fullstack Developer Course";

// 1- url kaç karakterlidir?

let sonuc;
sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?

sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

sonuc = url.startsWith("https");

if (sonuc) {
  console.log("evet başlıyor");
} else {
  console.log("hayır");
}

// 4- kursAdi içerisinde Developer kelimesi var mı?

sonuc = kursAdi.indexOf("Developer") > -1 ? "evet var" : "hayır yok";

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.clarusway.com/fullstack-developer-course

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "/");

sonuc = url + kursAdi;

console.log(sonuc);
