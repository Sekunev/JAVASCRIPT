// çarpım tablosunu ekrana yazdıran javascript kodları

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     document.write(`${i} * ${j} = ${i * j} <br>`);
//   }
//   document.write(`-------------<br>`);
// }

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++)
    document.write(`${i} x ${j} = ${i * j}`, "<br>");
  document.write("****<br>");
}
