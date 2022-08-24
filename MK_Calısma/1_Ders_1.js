const prompt = require("prompt-sync")();
// bu komutu asagıda termınalı calıstırmak ıcın yuklemek zorundayız. aksı takdırde promt calısmayacak hata verecektır. bu arada node_modules folder ını da genel klasorumuzun ıcıne konumlandırdık.
const a = Number(prompt("bır sayi giriniz: "));
console.log(a);
console.log(typeof a);
