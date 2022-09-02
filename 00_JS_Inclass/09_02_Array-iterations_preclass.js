// bir sayı dizisini kabul eden ve yeni bir tek sayı dizisi döndüren bir işlevi tanımlayalım.

let dizi = [1, 2, 3, 4, 5, 6, 7];

function teksayilar(numaralar) {
  let sonuc = [];
  for (let i of numaralar) {
    if (i % 2 != 0) {
      sonuc.push(i);
    }
  }
  return sonuc;
}

console.log(teksayilar(dizi));

// *************

function teksayi(sayi) {
  return sayi % 2 != 0;
}
console.log(teksayi(dizi));

function ciftsayi(sayi) {
  return sayi % 2 == 0;
}

console.log(ciftsayi());

function numarasec(numaralar, fn) {
  let sonuc = [];
  for (let i of numaralar) {
    if (fn(i)) {
      sonuc.push(i);
    }
  }
  return sonuc;
}

console.log(numarasec(dizi, teksayi));
console.log(numarasec(dizi, ciftsayi));

// *********
// dizideki elemanları consola yazdıralım.

const harfler = ["A", "B", "C", , "E"];

for (let i = 0; harfler.length > i; i++) {
  console.log(harfler[i]);
}
// *** forEach ***
// syntax'ı
// forEach((element) => { /* ... */ })
// forEach((element, index) => { /* ... */ })
// forEach((element, index, array) => { /* ... */ })
// yukardki işlemi forEach ilede yapabiliriz.

harfler.forEach((harf) => {
  console.log(harf);
});
// Boş hücrenin atlandığına ve undefinedyazdırılmadığına dikkat edin.

function elemanyazdir(eleman, index, harfler) {
  console.log(`index numarası ${index} : ${eleman} ${harfler}`);
}
harfler.forEach(elemanyazdir);

// ******* map *******
// syntax'ı
// map((element) => { /* ... */ })
// map((element, index) => { /* ... */ })
// map((element, index, array) => { /* ... */ })

const sayilar = [2, 4, 5, 6];
const karesi = [];

for (let i = 0; sayilar.length > i; i++) {
  karesi.push(sayilar[i] ** 2);
}
console.log(karesi);

// yukardakinin aynısını map ile yapalım.

const karesi1 = sayilar.map((sayi) => {
  return sayi ** 2;
});
console.log(karesi1);

//? şehir populasyonlarını '3.8M' formatına dönüştürelim.

const sehirler = [
  { name: "Los Angeles", population: 3792621 },
  { name: "Chicago", population: 2695598 },
  { name: "New York", population: 8175133 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

// let yuvarla = sehirler.map((sehir) => {
//   sehir.population = (sehir.population / 1000000).toFixed(1) + "M";
//   return sehir;
// });
// console.log(yuvarla);

// ****** filter *******

// snytax'ı
// filter((element) => { /* ... */ })
// filter((element, index) => { /* ... */ })
// filter((element, index, array) => { /* ... */ })

// let kucuksehirler = [];

// for (let i = 0; sehirler.length > i; i++) {
//   if (sehirler[i].population < 3000000) {
//     kucuksehirler.push(sehirler[i]);
//   }
// }
// console.log(kucuksehirler);

// Yukarıdaki aynı işlevi filter ile yapalım.

// const kucuksehirler1 = sehirler.filter((sehir) => {
//   return sehir.population < 3000000;
// });
// console.log(kucuksehirler1);

// sehirler
//   .filter((sehir) => sehir.population > 3000000)
//   .sort((c1, c2) => c1.population - c2.population)
//   .map((city) => `${city.name}: ${city.population}`)
//   .forEach((c) => console.log(c));

// ***** reduce() *****
// syntax'ı
// reduce((previousValue, currentValue) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Şehirlerin toplam nüfusunu hesaplamak istiyorsunuz. Bunu normal for döngüsü ile yapalım:

let toplam = 0;

for (let i = 0; sehirler.length > i; i++) {
  toplam += sehirler[i].population;
}
console.log(toplam);

// aynı işlemi reduce ile de yapalım.

let reducetoplam = sehirler.reduce((a, b) => {
  return a + b.population;
}, 1);

console.log(reducetoplam);
