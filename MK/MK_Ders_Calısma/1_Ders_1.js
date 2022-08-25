const prompt = require("prompt-sync")();
// bu komutu asagıda termınalı calıstırmak ıcın yuklemek zorundayız. aksı takdırde promt calısmayacak hata verecektır. bu arada node_modules folder ını da genel klasorumuzun ıcıne konumlandırdık.
const a = Number(prompt("bır sayi giriniz: "));
console.log(a);
console.log(typeof a);
//?-------------------------------------------------------------------------------

// ! strıng metodları
//
// prımıtıve-nanprımıtıv (object)
const str1 = "hello";
const str2 = new String("nan-prımıtıve :) hello");
console.log(typeof str2); //bu bır object olacaktır.
// mozılla sıtesıne bakılabılır strıng konusnnda
console.log(str1.concat(str2));
console.log(str1);
console.log(str2);
// concat-----> aksı belırtılmedıgı seurece ımmutıby oldugu ıcın ekleme yapmıs olsa da aslını degıstırmez.
str1 = str1.concat(str2);
// toLocaleUpperCase --->
// her bir degerin arkasina null deger saklanır
// indexof---> bulamadıgını -1 olarak donderıryor. cunku hıc bır strıngın indis numarası eksı olamaz
// regular extends (regex).../[] / .....https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html bakabılırsınız
