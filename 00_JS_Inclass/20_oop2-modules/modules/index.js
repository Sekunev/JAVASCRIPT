// ************* JS MODULE ***************

// Bir JS dosyasını modul haline getirdiğimizde dışardan kullanılabilir hale gelmiş oluyor.
// Modül sadece bir dosyadır, tek bir program.
// export ve import yönergeleri modüller arasında işlevselliğin yer değiştirmesini sağlar:
// export anahtar kelimesi tanımlandıkları dosyanın dışında da ulaşılmak istenen değişken ve fonksiyonları etiketler.
// import başka modüldeki değişken ve fonksiyonların içeri aktarılmasına imkan tanır.
// Sabit değişkenler genellikle büyük harfle yazılır.
// as keyword'ü ile yeniden isimlendirme yapabiliyoruz.
// Default Export ile şunu demiş oluyoruz. Bu modulde hiçbişşey export edilmese bile bunu export et demiş oluyoruz. sadece 1 default export tanımlayabiliriz.
// index.html dosyamıza bağlama aşamasında "type= module" olmalı.
console.log("JS Modules is running");

//! default import yaparken ismini  biz veriyoruz.
// import karesi, {
//   WHW as W,
//   WORKING_HOURS_WEEK,
//   dec,
//   inc,
//   sum,
//   counter,
// } from "./mymodule.js";
import ugurla, { deneme, selam } from "./module2.js";

import {
  default as karesi,
  WHW as W,
  WORKING_HOURS_WEEK,
  dec,
  inc,
  sum,
  counter,
  WHW,
} from "./mymodule.js";

// default import için farklı kullanım

// clo console.log'un farklı kullanımı.
console.log("W :>> ", W);
console.log("WHW :>> ", WHW);
console.log("WORKING_HOURS_WEEK :>> ", WORKING_HOURS_WEEK);
console.log("karesi(4) :>> ", karesi(4));

inc(4);

inc(6);
dec();
console.log("dec() :>> ", dec());
inc();
console.log("counter :>> ", counter);
// counter = 29; // ! sabit gibi davranır

inc();
console.log("counter :>> ", counter);

ugurla();
selam();
deneme();
