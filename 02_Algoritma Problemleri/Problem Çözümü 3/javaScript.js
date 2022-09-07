// 1-100 arası 3 ve 5’e tam bölünen sayıları ve bu sayıların toplamını yazdıran javascript kodları

var toplam = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    if (i != 90) {
      document.write(i + "+");
    } else {
      document.write(i + "=");
    }
    toplam += i;
  }
}
document.write(toplam);

// let toplam = 0;
// for (let i = 0; i < 100; i++) {
//   if (!(i % 3) && !(i % 5)) {
//     toplam += i;
//     console.log(i, toplam);
//   }
//   console.log(i, toplam);
// }
