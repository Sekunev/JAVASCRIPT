// Ekrana
// *
// **
// ***
// şeklinde yıldızları yazdıran javascript kodları

for (let i = 0; i <= 20; i++) {
  for (let x = 0; x < i; x++) {
    document.write("*");
  }

  document.write("<br>");
}

for (let i = 0; i <= 20; i++) {
  for (let j = 0; j < i; j++) {
    console.log("*");
  }
  console.log("\n");
}
