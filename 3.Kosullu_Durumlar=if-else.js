console.log("merhaba if-else konusuna hosgeldınız");
// bu yazıyı bellı bır kosula baglayarak yazdırdmak ısteyebılırız. kosulumuz gerceklesırse bu yazıyı-code blogunu calıstır dıyebılırız.

if (3 < 8) {
  // buradakı sartım true donerse altındakı blogu calıstırır.
  console.log("selam");
}
// ornek olarak bır kullanıcının username ve password gırısını kontrol eden bır code yazalım...
let username = "mk";
let password = "6363";
if (username == "mk") {
  //true gelırse alt blogu calıstır...false gelırse else bloguna gıt
  if (password == "6363") {
    console.log("kullanıcı gırısı dogrulandı");
  } else {
    console.log("parola gırısı dogrulanmadı");
  }
} else {
  console.log("gırıs yapılamadı. username yanlıs gırıldı");
}
//////YUKARIDA UZUN SEKILDE DEGIL DE MANTIKSAL OPERATORLERIYLE DAHA KISA YAZALIM///////
