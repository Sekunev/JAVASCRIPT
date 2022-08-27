let url = "https://www.clarusway.com/";
let kursAdi = "Fullstack Developer Course";

// 1- url kaç karakterlidir?

let sonuc;
sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?

sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

sonuc = url.startsWith("https");

// if (sonuc) {
//   console.log("Evet Başlıyor.");
// } else {
//   console.log("Hayır Başlamıyor.");
// }

// 4- kursAdi içerisinde Developer kelimesi var mı?

// sonuc = kursAdi.indexOf("developer") > -1 ? "evet var" : "hayır yok";

// kursAdi = "asd";
sonuc = kursAdi.search(/^[a - z]/) > -1 ? "evet var" : "hayır yok";

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.clarusway.com/fullstack-developer-course

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replace(/ /g, "-");
kursAdi = kursAdi.replaceAll(" ", "-"); // ikinci yöntem.

sonuc = url + kursAdi;

console.log(sonuc);

// 6- verilen stringi boşluklardan parçalayıp tersten yazdıralım. (26.08.22 workshop)

let x = "days. big make things Little";

let reversed = (x) => {
  let y = x.split(" ");
  let sonuc1 = "";

  for (let i = y.length - 1; i >= 0; i--) {
    if (i === 0) {
      sonuc1 += y[i];
    } else {
      sonuc1 += y[i] + "-";
    }
  }
  return sonuc1;
};

console.log(reversed("days. big make things Little"));

// 7- Stringin tamamını tersten yazdıran fonksiyonu yazalım. (26.08.22 workshop)

// let x = "Merhaba Ali Veli";
// let reverse = (x) => {
//   let sonuc1 = "";

//   for (let i = x.length - 1; i >= 0; --i) {
//     sonuc1 += x[i];
//   }
//   return sonuc1;
// };

// console.log(reverse("Clarusway Rocks!"));
