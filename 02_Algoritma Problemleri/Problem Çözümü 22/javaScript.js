// Klavyeden girilen bir sayının faktöriyelini alan bir uygulama yazınız

let sayi = +prompt("Bir sayı giriniz");

let sonuc = 1;

for (let i = 1; i <= sayi; i++) {
  sonuc *= i;
}
console.log(sonuc);

// mülakat
function initButtons() {
  var body = document.body,
    button,
    i;

  for (i = 0; i < 5; i++) {
    button = document.createElement("button");
    button.innerHTML = `Button ${i}`;
    button.addEventListener("click", (e) => {
      alert("i");
    });
    body.appendChild(button);
  }
}
5;
initButtons();
