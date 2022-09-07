// Ekrana büyüyen font ile  11 kez TÜRKİYE yazan javascript kodları

for (let i = 0; i <= 10; i++) {
  document.write(
    "<span style='font-size:" + i + 5 + "px;'>TÜRKİYE</span><br/>"
  );
}

for (let i = 1; i < 11; i++) {
  document.write(`<p style= font-size:${i + 15}px;>${i}- TÜRKİYE</p>`);
}
