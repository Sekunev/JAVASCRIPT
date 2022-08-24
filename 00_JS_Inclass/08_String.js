let kursAdi = "   Clarusway and, FrontendI, and bootcamp and rootboot   ";
let isAdı = "Fullstack";
let sonuc;

sonuc = kursAdi.length;
sonuc = kursAdi.concat(" " + isAdı);
// ("+ operatörü .concat yerine kullanılabilir.");
sonuc = kursAdi.charAt(3);
sonuc = kursAdi.charAt(kursAdi.length - 1);
// string öğelerine erişmek için `[]` köşeli ayraç gösterimini kullanabiliriz.
sonuc = kursAdi[3];

sonuc = kursAdi.includes("boot");
sonuc = kursAdi.includes("Cla");

sonuc = kursAdi.indexOf("boot");
sonuc = kursAdi.indexOf("ü"); //Değer bulunamazsa bu yöntem -1 döndürür.
sonuc = kursAdi.indexOf("boot", 20); // 19 dan sonra hangi index'de.
sonuc = kursAdi.lastIndexOf("boot"); // 19 dan sonra hangi index'de.

sonuc = kursAdi.search("boot"); //Değer bulunamazsa bu yöntem -1 döndürür.
sonuc = kursAdi.search(/Boot/i); //Büyük/küçük harf duyarlılığını değiştirmek için "i" kullan.

sonuc = kursAdi.replace("and", "or");
// replace() Yöntemi , çağrıldığı dizeyi değiştirmez. Yeni bir dize döndürür .
sonuc = kursAdi.replace(/and/gi, "or"); //flag (global) tüm eşleşmelerin yerini alır.

sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(5, 12);
sonuc = kursAdi.slice(3, -8);
sonuc = kursAdi.slice(-8, -3);

sonuc = kursAdi.substring(5, 10);
sonuc = kursAdi.substring(10, 5);
sonuc = kursAdi.substring(3); // 3'dahil sonrası

sonuc = kursAdi.split(","); // virgüllerden böldü.
sonuc = kursAdi.split(" "); // boşluklarsdan böldü.
sonuc = kursAdi.split(" ", 2); // boşluklarsdan 2 parçaya böldü.
sonuc = kursAdi.split(""); // tüm haflerden böler.
sonuc = kursAdi.split(); // tüm dizeyi köşeli parantezler arasında böler.

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toLocaleLowerCase(); //bir dizeyi küçük harflere dönüştürmek için geçerli yerel ayarı kullanır. TR karekterlerinde fark edilebilir.

sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.toLocaleUpperCase(); //bir dizeyi küçük harflere dönüştürmek için geçerli yerel ayarı kullanır. TR karekterlerinde fark edilebilir.

sonuc = kursAdi.trim(); //dizgenin her iki tarafındaki boşlukları ortadan kaldırır .
sonuc = kursAdi.trimStart();
sonuc = kursAdi.trimEnd();

console.log(sonuc);
