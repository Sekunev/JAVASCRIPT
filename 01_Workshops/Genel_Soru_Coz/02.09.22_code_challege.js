let arr = ["one", "two", "three", "four", "five", "six"];

const dices = (n) => {
  for (let i = 1; i < n + 1; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1; // rastgele 1-5 arası sayı üretir 1 artırarak zar rakamları ihtimaline eşitlemiş olduk.
    const dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(
      `Dice 1 : "${dice1}" / Dice 2 : "${dice2}" -> ${
        arr[Math.min(dice1, dice2) - 1]
      }-${arr[Math.max(dice1, dice2) - 1]}`
    );
  }
};

dices(5);

const student = (info) => {
  console.log(`
    Student Nr: ${info.split(",")[0].split(" ")[0]}
    First Name: ${info.split(",")[0].split(" ").at(-2)}
    Last Name: ${info.split(",")[0].split(" ").at(-1)}
    Location: ${info.split(",")[1]}
    Program: ${info.split(",")[2]}
    `);
};

let a = [
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];

for (i of a) {
  student(i);
}
