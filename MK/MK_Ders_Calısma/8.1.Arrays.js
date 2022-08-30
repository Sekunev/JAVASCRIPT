//! *****************************ARRAYLER(DİZİLER)********************************
//number, strıng ve boolen verı turlerını ıcınde barındarabılen, boyutu dınamık ve otomatık olarak buyuyen verı turlerıne denır.

//? 2 sekılde olusturulabılır
//1. bır koselı parantez ıcerısınde yazılacak tum elemanlar dızının bır elemanı olacaktır.const array1 = ["eat", "sleep"];
//2. JavaScript'in "new" anahtar sözcüğünü kullanarak da bir dizi oluşturabilirsiniz.
//const array2 = new Array["eat", "sleep"];
//!daha cok ılk secenegın kullanılması tavsıye edılır.

// ! 3.Yöntem (Array.of())
// const veriler = Array.of(1, 2, 3);
// console.log(veriler);

// const veri = Array.of("Deneme");
// console.log(veri);

//?bu da baska bır yontem; dıger yontemlerle numberlı bır tane elemanlı tanımlanmaya calısılır sa bu o kadar sayıda elemanlık bos bır alan acıyor.
// const tekElemanli = Array.of("5");
// console.log(tekElemanli);
//! 10 elemanlik bos bir Array oluşturdu
// const numbers1 = new Array(10);
// console.log(numbers1);

//Boşluklar ve satır sonları önemli değildir . Bir bildirim birden çok satıra yayılabilir.
/*const colors = [
        "Red",
        "Blue",
        "Yellow"
      ]; */
//**************ORNEKLERIMIZ:****************
/* const öğrenciBilgileri = ['Ahmet', 'Çalı', 2021-1990, arabalar];
// empty array
const myList = [];
// array of numbers
const numberArray = [ 2, 4, 6, 8];
// array of strings
const dailyActivities = [ 'eat', 'work', 'sleep'];
// array with mixed data types
const newData = ['work', 'exercise', 1, true];
// array with size
let scores = Array(10); */

//Dizin numarasına bakarak bir dizi öğesine erişebilirsiniz...

/*const dailyActivities = [ 'eat', 'work', 'sleep'];

let first = dailyActivities[0]; // eat

let last = dailyActivities[dailyActivities.length - 1]; // sleep

const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"

// length
console.log(myArray.length); // 5
//!dızın numarası "0" dana baslar. en son elemanın ındex numarası ıse tersten bakıldıgında "-1"dır. eger bır dızının eleman sayısını ogrenmek ıstıyorsak .length methodunu yazarız.
Dizilerdeki elemanlara erişim için indisleme (indexing) kullanılır.
• Diziler, elemanları sıralı olarak belleğe kaydeder.
• Bir dizideki elemanlara ulaşmak için bu sırayı kullanabiliriz.
• Sıra numaraları 0 ile başlar ve dizinin eleman sayısının bir
eksiğine (length-1) kadar devam eder.

//? at()-1 yazarak array ın en son elemanına ulasabılıyoruz.
console.log(isimler.at(-1));

Dizinin elemanlarına veri yazmak-atamak veya güncellemek-yenılemek için yine indisleme yöntemi kullanılır.
arabalar[0] = "Doğan SLX";
arabalar[3] = "Toros";
console.log(arabalar); // output--------> ["Dogan SLX", "TOFAS", "Anadol", "Toros"]


//!DİKKAT: 
• Dizi const ile tanımlanmış olsa da dizinin elemanlarını değiştirebildik. Çünkü Dizi gibi "non-primitive" veri yapılarının elementleri değiştirilebilir. 
• Ancak, tamamen bir başka dizi ile değiştirilemez. ılave yapılabılır eksıltılebılır ancak tamamen bır baska dızı olarak degıstırılemez veya atama yapılamaz
arabalar = ['Fiat', 'Audi','Citroen']; //HATA ALIRIZ...

//!**************************************************************************************************************
JS’de diziler, Array.prototype nesnesinden türemektedir ve içerisinde hazır bir çok metot tanımlanmıştır.

//!1. Diziyi değiştiren (mutator) metotlar:
JS’de eleman eklemek, silmek, sıralamak gibi bir diziyi değiştirmeyi sağlayan metotlar bulunmaktadır.
Metot ********************* Açıklaması
.pop()********************* Dizinin son elemanını diziden siler ve bu elemanı döndürür
.push()********************* Dizinin sonuna bir veya daha fazla eleman ekler ve dizinin yeni eleman sayısını döndürür.
.reverse()********************* Dizinin elemanlarını ters sıralar.
.shift()********************* Dizinin ilk elemanını diziden siler ve bu elemanı döndürür.
.unshift() *********************Dizinin ilk indeksine yeni bir eleman ekler ve dizinin yeni elaman sayısını döndürür.
.sort()********************* Diziyi yükselen sırada sıralar.
.splice() *********************Dizi'nin içeriklerini, diziye ait öğeleri kaldırarak veya yeni öğeler ekleyerek ve/veya mevcut öğeleri silerek değiştirir.

.at(-1) methodu .lenght - 1 ıle aynı ısı gorecektır. en sondakı elemanı getırır.

//**************ORNEKLERIMIZ:****************
 const meyveler = ["Elma", "Armut", "Muz", "Kivi"];

// Kivi silindi. ["Elma", "Armut", "Muz"]
meyveler.pop();

// Sonuna Ananas Eklendi. ["Elma", "Armut", "Muz", "Ananas"]
meyveler.push('Ananas');

// İlk eleman silindi. ["Armut", "Muz", "Ananas"]
myveler.shift();

// İlk sıraya Çilek eklendi.["Çilek", "Armut", "Muz", "Ananas"] 
meyveler.unshift('Çilek');

// Dizi indis sıralaması terslendi. ["Ananas", "Muz", "Armut", "Çilek"]
meyveler.reverse();

// Harf sırasına göre sıralandı.["Ananas", "Armut", "Muz", "Çilek"]
meyveler.sort();

// 1. indeksine Kiraz eklendi. ["Ananas", "Kiraz", "Armut", "Muz", "Çilek"]
***Bir dizinin iki elemanı olduğunu varsayalım. Dizin 3'e (dördüncü öğe) bir öğe eklemeye çalışırsanız, üçüncü öğe tanımsız olacaktır:

ORNEK;
let dailyActivities = [ 'eat', 'sleep'];
// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';
console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]

//! sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow... fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar...ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
//* sort methodu normalde alfabetık olarak sıralar. fakat numara olan elemanları sıralarken sayısal degerlerı olarak sıralamaz sadece son basamagı(en soldakı) dıkkate alarak bu ıslemı yapar. bu da yanlıs sonuclara sebep olur. buna gore 20 sayısı 3 den once gelır sankı ondan kucukmus gıbı. oysa kı 2 ve 3 degerlerıne baktıgı ıcın boyle sonuc vermektedir. bunun onune gecmek ıcın;

compare(a,b)
const numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers); //tek tek tum ıkılılerın durumuna bakılır ve ona gore sıralama yapılır
// [ 0,  1,  2, 3, 10, 20, 30 ] 
sayilar.sort((a, b) => a - b);
console.log(sayilar);

//* fill()
//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0); //tum elemanları 0 a donustur.
console.log(array1);

array1.fill(1, 2, 4);
console.log(array1);
array1.fill(-1, 1); //* 1. ındıstekı ve sonrasindakı elemanları -1 yap
array1.fill(9, 2, 4); //* 2. indisdekı dahıl basla-4.indise kadar bu dahıl degıl tum elemanları 9 yap
console.log(array1);
//!vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv?????
meyveler.splice(1,0,'Kiraz');
// 3. indeksdeki Muz, Kayısı ile değiştirildi.
// ["Ananas","Kiraz","Armut","Kayısı","Çilek"]

meyveler.splice(3, 1 ,'Kayısı');
//!DİKKAKT:  *.splace(ilk_öge=eklenılmesı dusunulen eleman konumunu belırler, ikinci_öge=0 yazılırsa hıcbır oge sılme sadece saga kaydır;1 veya baska sayı yazılırsa ilk_öge de belırlenen konumdakı ogeyı-/-bundan sonrakı ogelerı sıler(sılınecek oge sayısı), son parametre/ler ıse eklenecek olanlardır) *tek oge yazılınca bu ındıs numarası dahıl sonuna kadar olanları secer, dıgerlerını sıler.
*.splıce(baslamak ıstedıgın ındıs numaraı, 0 olursa sılme dıgerını kaydır araya yazdır 1 dersek o ındıstekı elemanı sılıp onun yerıne yazdır, yerıne yazılacak eleman)
//!ORNEK1:
let colors = ['red', 'green', 'blue'];
let deletedColors = colors.splice(2, 0, 'purple', 'orange');
console.log(colors); // ['red', 'green', 'purple', 'orange', 'blue']
console.log(deletedColors); // [] nothing deleted
//? .splice() Bir dizideki silinen öğeleri döndürür, hiçbir şey silinmezse boş bir dizi[]döndürülür. Orijinal dizi mutasyona uğramış ve güncellenmiş dizi öğelerine sahip.
//!ORNEK2:
let colors = ['red', 'green', 'purple', 'orange', 'blue'];
let deletedColors = colors.splice(3, 1, 'pink');
console.log(colors); // ['red', 'green', 'purple', 'pink', 'blue']
console.log(deletedColors); // ['orange'] is deleted

//!ornek
const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];

console.log(kisiler);
console.log(kisiler[5][2]);
//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz.
console.log(kisiler[kisiler[5][1]]);

//? kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.
kisiler[5][1]--; //43
console.log(kisiler);

//? numbers dizisinin son elementinin degerini bir arttirin
console.log(numbers);
numbers[numbers.length - 1]++;
console.log(numbers);

//!2. Dizi erişim metotları:
Bu metotlar var olan diziyi değiştirmez ancak diziden elde edilen bazı bilgileri döndürür.
Metot Açıklaması
.concat() ************* Dizi ile bir başka diziyi veya değeri birleştirerek yeni bir dizi döndürür.
.includes() ************* Dizinin belirtilen bir elemanı içerip içermediğine bakar. Eğer içeriyorsa 
true, içermiyorsa false döndürür.
.join() ************* bir Dizi içerisinde yer alan bütün elemanları birleştirerek(.join("") yaparsak) String bir ifade olarak geri döndürür.
//!orıjınalını bozmaz. joın methodu kullanılan bır array daha sonra cagrıldıgında ılk halı seklınde gelecektır.
.slice() ************* Bir Dizinin elemanlarını, belirtilen başlangıç ve bitiş indeksine göre kopyasını oluşturarak ve döndürür.
.toString() ************* Dizinin içerisindeki elemanları tek bir String olarak döndürür.
.indexOf() ************* Belirtilen elemanın dizide ilk görüldüğü indeks numarasını döndürür.
.lastIndexOf() ************* Belirtilen elemanın dizide görüldüğü en son indeks numarasını döndürür. 
Bulunmazsa – 1 döndürür.

//!//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------


//**************ORNEKLERIMIZ:****************
concat:
const languages1 = ["JavaScript", "Python", "Java"];
const languages2 = ["C", "C++"];

// concatenating two arrays
const new_arr = languages1.concat(languages2);
console.log(new_arr); // [ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]

// concatenating a value and array
const new_arr1 = languages2.concat("Lua", languages1);
console.log(new_arr1); // [ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]
*********************************************************************************************
1.const sayılar = [1, 2, "3","Üç"];
sayılar.includes(2)); // true
sayılar.includes(3)); // false
sayılar.includes("3")); // true

2.const elementler = ['Ateş', 'Hava', 'Su'];
console.log(elementler.join()); --------> Ates, Hava, Su
console.log(elementler.join("")); --------> AtesHavaSu
console.log(elementler.join("-")); --------> Ates-Hava-Su

3.const hayvanlar = ['fil','kuş','deve','fare','kedi'];
console.log(hayvanlar.slice(2)); --------> ['deve','fare','kedi']
console.log(hayvanlar.slice(2, 4)); --------> ['deve','fare']
console.log(hayvanlar.slice(1, 5)); --------> ['fil','kuş','deve','fare','kedi']
//!DİKKAT:* slice(start, stop); * slice() metodunda bitiş indisi dahil değildir.
//!ORNEKLER:
const colors = ["Red" ,"Yellow", "Green", "Blue"];
const slicedColors = colors.slice(1, 3);

const newColors = colors.slice();

console.log(colors); -------> ["Red" ,"Yellow", "Green", "Blue"] 
console.log(slicedColors); -------> ["Yellow", "Green"]
console.log(newColors);-------> ["Red" ,"Yellow", "Green", "Blue"] bos oldugu ıcın tumunu kopyalar-clonlar...


4.const dizi1 = [1, 2, 'a', '1a'];
console.log(dizi1.toString()); -------> 1,2,a,1a

5.const dizi2 = [2, 9, 9];
console.log(dizi2.indexOf(9));------->1
console.log(dizi2.lastIndexOf(9));-------> 2
console.log(dizi2.indexOf(4)); -------> -1
//!.indexOf();bu methodda aranan eleman veya degerın ılk bulundugu yerın ındısını dondurur. eger bulamazsa -1 donderir. *** .indexof(searchElement, fromIndex) ıkıncı eleman hangı ındıs ten ıtıbaren aramaya baslanacagını ıfade eder. bu zorunlu degıldır o zaman en bastan aramaya baslar ve ılk buldugunu donderır.
const colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];
console.log(colors.indexOf("Green")); // 2
console.log(colors.indexOf("Green",3)); // 5
console.log(colors.indexOf("green")); // -1
//!.lastIndexOf(); bu yontem de arrayın sonundan ıtıbaren baslayarak elemanı arar buldugu ılkını donderır. yoksa -1 doner.

6.const harfler = ['a', 'b', 'c'], rakamlar = [1, 2, 3];
const birleşik = harfler.concat(rakamlar, 4, [5,6]); 
console.log(birleşik); ------->  ["a", "b", "c", 1, 2, 3, 4, 5, 6]

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(sayilar1.toString());



//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili, yanı kosula uyuyorsa "true" aksi takdirde "false" deger dondurur.
//!FORMATI: itere_edılecek_array(yasArray).every(parametre(yas) => kosul(yas >= 18));
const yasArray = [18, 22, 78, 34, 78, 79, 15];
const check = yasArray.every((yas) => yas >= 18);
check
  ? console.log("Dizideki herkesin yasi 18'den buyuktur")
  : console.log("Dizide 18 yas alti var");
//!bu ornekte kosulun true-false cıkmasına gore check degıskenı bır degere sahıp olacak. altta yer alan ternary yapıyla da true-false gore sol:sag ıslenır...
//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const buyuk80 = yasArray.some((y) => y >= 80);
console.log(buyuk80); //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin
const yasIlk30 = yasArray.find((yas) => yas >= 30);// basından bakar ılk degerı dondurur.
const yasSon30 = yasArray.findLast((yas) => yas >= 30); //sonundan bakmaya baslar ve sondan buldugu ılk degerı dondurur.
console.log(yasIlk30, yasSon30);

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = yasArray.findIndex((yas) => yas >= 30);
console.log(foundIndex);

*/
//****************************************************************************************************************************** */
