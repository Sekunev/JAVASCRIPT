//  String

let adı = 'Ali'
let Soyadi = 'DEMİR'
let yas = 30

mesaj = `Adım ${adı}, Soyadım ${Soyadi}`;
console.log(mesaj);

// ternary operators syntax'ı:

// condition ? True value : False value

let emeklilik = (65 - yas > 0) ? "Emekliliğe "+ (65 - yas ) + " yıl kaldı" : "emeklisiniz.";

console.log(emeklilik)

// string metodları:
// detaylar w3school sitesinde bulunabilir.

let kurs_adı  = "  Komple Full Stack"

let sonuc;
sonuc = kurs_adı.toLowerCase(); // metod
sonuc = kurs_adı.toUpperCase();
sonuc = kurs_adı.length;        // proporty(özellik)

sonuc = kurs_adı[2];
sonuc = kurs_adı.slice(0, 6);
sonuc = kurs_adı.slice(-5, -1);
sonuc = kurs_adı.substring(0, 6);

sonuc = kurs_adı.replace('Full', 'tamamen');
sonuc = kurs_adı.trim();  // boşlukları kaldırdı.
sonuc = kurs_adı.trimEnd();
sonuc = kurs_adı.trimStart();
sonuc = kurs_adı.trimStart();

sonuc = kurs_adı.indexOf('Kom');  // index num döndürür.
sonuc = kurs_adı.split(' ');  // belirtilen karakterlerden parçalar.
sonuc = kurs_adı.split(' ')[3];  // 3. indexi döndürür.



console.log(sonuc)