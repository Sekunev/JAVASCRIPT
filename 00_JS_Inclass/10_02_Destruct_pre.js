// İki tür yok etme vardır: Object destructuring and Array destructuring.

// const note = {
//   id: 1,
//   title: "My first note",
//   date: "01/01/1970",
// };
// geleneksel yol
// const id = note.id;
// const title = note.title;
// const date = note.date;

// destructuring
// const { id, title, date } = note;
// console.log(id, title, date);

// Tahrip edilmiş bir mülke özel bir isim atamak mümkündür.

// const { id: noteId } = note;
// console.log(noteId, title, date);

// İç içe nesneleri de yok edebilirsiniz. Örneğin, yuvalanmış bir nesneniz varsa, onu aşağıdaki gibi yok edebilirsiniz:

// const note = {
//   id: 1,
//   title: "My first note",
//   date: "01/01/1970",
//   author: {
//     firstName: "John",
//     lastName: "Doe",
//     email: "johndoe@example.com",
//   },
// };
// const {
//   id,
//   title,
//   date,
//   author: { firstName, lastName, email },
// } = note;
// console.log(`${firstName} ${lastName}`, id, title, date, email);

// ➤ Bir nesneyi yok etmek, yalnızca yazmanız gereken kod miktarını azaltmak için yararlı değildir; ayrıca önemsediğiniz mülklere erişiminizi hedeflemenize olanak tanır.

// ➤ Son olarak, ilkel değerlerin nesne özelliklerine erişmek için yıkım kullanılabilir. Örneğin, String, dizeler için global bir nesnedir ve bir length özelliğine sahiptir:

// const { length } = "A string";
// console.log(length); // 8

//! Array Destructuring

// ➤ Dizi yok etme, bir dizi öğesini değer olarak kullanarak yeni değişkenler oluşturmanıza olanak tanır.

// ➤ JavaScript'teki dizilerin sıralarını korumaları garantilidir, bu nedenle bu durumda ilk dizin her zaman bir yıl, ikincisi ay olacaktır ve bu böyle devam eder. Bunu bilerek dizideki öğelerden değişkenler oluşturabilirsiniz:

// const date = [1970, 4, 20];
// geleneksel yol
// const year = date[0];
// const month = date[1];
// const day = date[2];

// destructuring
// const [year, month, day] = date;
// console.log(day, month, year); // 20 4 1970
// ikinci ögeyi atla
// const [year2, , day2] = date;
// console.log(day2, year2); // 20 1970

//? İç içe dizilerin yapısı da bozulabilir:

// const nestedArray = [1, 2, 3, [4, 5, 6], 7];
// const [first, second, third, [fourth, fifth, sixth], seventh] = nestedArray;
// // first = 1, second = 2, third = 3, fourth = 4, fifth = 5, sixth = 6, seventh
// console.log(second, fourth);

// ➤ Bir fonksiyondaki parametreleri yok etmek için yok etme sözdizimi uygulanabilir. Bunu test etmek için, Object.entries() içindeki anahtarları ve değerleri yok edeceksiniz.

// const note = {
//   id: 1,
//   title: "My first note",
//   date: "25/04/1977",
// };

// Using forEach
// Object.entries(note).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// Using a for loop
// for (let [key, value] of Object.entries(note)) {
//   console.log(`${key}: ${value}`);
// }

// Nesne yok etme ve dizi yok etme, tek bir yok etme atamasında birleştirilebilir. Varsayılan tarihi new Date() olarak ayarlayan bu örnekte görüldüğü gibi, varsayılan parametreler yıkımla birlikte de kullanılabilir.

const note = {
  title: "My first note",
  author: {
    firstName: "Sherlock",
    lastName: "Holmes",
  },
  tags: ["personal", "writing", "investigations"],
};
// Then destructure the object, while also setting a new date variable with the default of new Date():
// Ardından nesneyi yok edin ve aynı zamanda new varsayılanıyla yeni bir tarih değişkeni ayarlayın.

const {
  title,
  date = new Date(),
  author: { firstName },
  tags: [personalTag, writingTag],
} = note;
console.log(date); // outputs the curre
console.log(new Date()); // outputs the curre

// Yıkıcı atama sözdizimi, JavaScript'e çok fazla esneklik katar ve daha özlü kod yazmanıza olanak tanır.
// react useState , yıkıma iyi bir örnektir.
// Yıkım ataması strict mode'da kullanılamaz.

// Spread and Rest Operator
// ➤ Yayılma ve dinlenme operatörlerinin her ikisi de aynı üçlü nokta sözdizimini kullanır:...

// ➤ Uygulama, onu spread olarak mı yoksa dinlenme operatörü olarak mı kullanacağınızı belirler.

// ➤ Rest operatörü, fonksiyon argümanlarının listesini bir dizide birleştirmek için kullanılır.

// ➤ Tersine, yayılma operatörü, bir diziden öğeleri çekmenize veya bir nesneden özellikleri çekmenize olanak tanır.

// ➤ Yayılma operatörü, bir dizinin (veya herhangi bir yinelenebilirin) değerini, bir işlevdeki sıfır veya daha fazla bağımsız değişkene veya bir dizideki (veya herhangi bir yinelenebilir) öğeye yaymamızı sağlar.

// ➤ rest parametresi, bir fonksiyona belirsiz sayıda parametre geçirmemizi ve bunlara bir dizide erişmemizi sağlar.

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers]; // spread operator
console.log(newNumbers);

// copy array using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, 11, ...arr2, 7, 8, 9];
console.log(arr3); // expected output: [1, 2, 3, 11, 4, 5, 6, 7, 8, 9]

// clone array using spread operator
let ar1 = [1, 2, 3];
let ar2 = ar1;

console.log(ar1); // [1, 2, 3]
console.log(ar2); // [1, 2, 3]

// append an item to the array
ar1.push(4);

console.log(ar1); // [1, 2, 3, 4]
console.log(ar2); // [1, 2, 3, 4]

// with spread operator
let array1 = [1, 2, 3];

// copy using spread syntax
let array2 = [...array1];

console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3]

// append an item to the array
array1.push(4);

console.log(array1); // [1, 2, 3, 4]
console.log(array2); // [1, 2, 3]

// Object Example:

const person = {
  name: "John",
  age: 30,
};

const newPerson = {
  ...person, // spread operator
  city: "New York",
};

// newPerson will be { name: 'John', age: 30, city: 'New York' }
console.log(newPerson);

// String Example:

const arrValue = ["My", "name", "is", "Jack"];

console.log(arrValue); // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

// ➤ Örneğin, bir dizi nesnesinin push() yöntemi, bir diziye bir veya daha fazla öğe eklemenize olanak tanır. Push() yöntemine bir dizi iletmek istiyorsanız, Apply() yöntemini aşağıdaki gibi kullanmanız gerekir:

// İlk çözüm ayrıntılı görünüyor. İkincisi, kodun okunabilirliğini artırmak için spread operatörünü kullanır:

// 1st
let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];
[].push.apply(rivers, moreRivers);
console.log(rivers);
// 2nd
rivers.push(...moreRivers);
console.log(rivers);

// ➤ Yayılma operatörü, hem dizileri hem de nesneleri klonlamak için kullanışlıdır. Her ikisi de ilkellerden ziyade referans türleridir. Bu, yeniden atanmaları durumunda değer yerine işaretçinin kopyalandığı anlamına gelir.

// ➤ Gerçekten bir kopya oluşturmak istiyorsanız, kopyalanan tamamı yerine yalnızca özelliklerle yeni bir nesne oluşturulmalıdır. Yan etkileri veya kopyalanan orijinalin değişikliklerini ortadan kaldırırken referans türlerini güvenli bir şekilde kopyalamak sorunlu olabilir.

// ➤ Yayma operatörü, nesnenin veya dizinin sığ bir klonunu sağlayarak yan etkileri önler.

// Rest Operator
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
// only calculate number values
function sum2(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    }, 0);
}
console.log(sum2(1, 2, 3, 4, 5, "aa")); // 15

// Dinlenme parametreleri ve argümanlar nesnesi arasındaki fark

// Dinlenme parametreleri ile argümanlar nesnesi arasında bazı farklılıklar vardır:

// argümanlar nesnesi gerçek bir dizi değil, dinlenme parametreleri Array örnekleridir, yani sort, map, forEach veya pop gibi yöntemler doğrudan üzerine uygulanabilir;
// Argümanlar nesnesinin kendine özgü ek işlevleri vardır (callee özelliği gibi).
// ...restParam tüm ekstra parametreleri tek bir dizide toplar, bu nedenle ...restParam'dan önce tanımlanmış herhangi bir adlandırılmış argüman içermez. Argümanlar nesnesi, tek bir dizi benzeri nesnede paketlenmiş - ...restParam dizisindeki parametreler de dahil olmak üzere - tüm parametreleri içerir.
// rest parametresini kullanmak, argümanları dizi öğeleri olarak iletir.

// Not:
// rest parametresi sözdizimi, bir işlevin, JavaScript'te değişken işlevleri temsil etmenin bir yolunu sağlayarak, bir dizi olarak belirsiz sayıda bağımsız değişkeni kabul etmesine olanak tanır. Bir işlev tanımının son parametresinin önüne "..." (üç nokta karakteri) eklenebilir, bu da kalan tüm (kullanıcı tarafından sağlanan) parametrelerin standart bir JavaScript dizisine yerleştirilmesine neden olur. _Bir fonksiyon tanımındaki sadece son parametre_ bir rest parametresi olabilir.

const filter = (...args) => args.filter((el) => el === 1);
console.log(filter(1, 2, 3)); // [1]
