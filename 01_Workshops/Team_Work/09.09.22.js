// 5
let daltones = ["joe", "Jack", "Willam", "Averell"];
daltones.shift();
daltones.pop();
console.log(daltones);
// 6
// let daltones = ['joe', 'Jack', 'Willam', 'Averell']
for (let i = 0; i < daltones.length; i++) {
  if (i == 1) {
    continue;
  }
  console.log(daltones[i]);
}
// 7
let avengers = ["Iron Man", "Captain America", "Black Widow", "Hulk"];
console.log(avengers.splice(2, 1, "Thor", "Hawkeye"));
console.log(avengers);

//8
let fullStack = {
  languages: ["JavaScript", "React", "HTML"],
  jira: true,
  gitHub: true,
  difficulty: 8,
};
for (let i in Object.keys(fullStack)) {
  i == 0 && console.log(...fullStack.languages);
}

// 9
// spread
console.log(...Object.keys(fullStack));

// 10

const myCar = {
  make: "ford",
  model: "Mustang",
  year: 1965,
  color: "Black",
  age: function (year1) {
    return year1 - this.year;
  },
};

console.log(myCar.age(2022)); //Output: 57

// Roman

// const convertToRoman = (num) => {
//   let roman = "";
//   let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   let romanNum = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];
//   for (let i = 0; i < decimal.length; i++) {
//     while (decimal[i] <= num) {
//       roman += romanNum[i];
//       num -= decimal[i];
//     }
//   }
//   return roman;
// };

// console.log(convertToRoman(1001));

// alternatif çözüm.

// function convertRoma() {
//   // let number = +prompt("sayi giriniz");
//   let firstNumber = number;
//   let convertData = "";
//   if (number > 3000 || number == "") {
//     console.log("sayi 3000'den kucuk , 0 dan büyük olmalı");
//     return;
//   }
//   while (number > 999) {
//     number = number - 1000;
//     convertData = convertData + "M";
//   }
//   if (number >= 900) {
//     number = number - 900;
//     convertData = convertData + "CM";
//   }
//   if (number >= 500) {
//     number = number - 500;
//     convertData = convertData + "D";
//   }
//   if (number >= 400) {
//     number = number - 400;
//     convertData = convertData + "CD";
//   }
//   while (number > 99) {
//     number = number - 100;
//     convertData = convertData + "C";
//   }
//   if (number >= 90) {
//     number = number - 90;
//     convertData = convertData + "XC";
//   }
//   if (number >= 50) {
//     number = number - 50;
//     convertData = convertData + "L";
//   }

//   if (number >= 40) {
//     number = number - 40;
//     convertData = convertData + "XL";
//   }
//   while (number > 9) {
//     number = number - 10;
//     convertData = convertData + "X";
//   }
//   if (number == 9) {
//     number = number - 9;
//     convertData = convertData + "IX";
//   }
//   if (number >= 5) {
//     number = number - 5;
//     convertData = convertData + "V";
//   }
//   if (number == 4) {
//     number = number - 4;
//     convertData = convertData + "IV";
//   }
//   while (number > 0) {
//     number = number - 1;
//     convertData = convertData + "I";
//   }
//   console.log(
//     `Girilen sayı: ${firstNumber} , Roma rakamı karşılığı: ${convertData}`
//   );
// }

// convertRoma();

// farklı çözüm.(ihsan h.)

const roma = (number) => {
  let str = ("" + number).split("");
  if (number > 3000 || number < 0) {
    console.log(
      "gırdıgınız sayı 3000 den kucuk veya 0 dan buyuk olmalıdır... "
    );
    return 0;
  } else {
    while (str.length != 4) {
      str.splice(0, 0, "0");
    }
    console.log(str);
    let birler = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let onlar = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let yuzler = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let binler = ["", "M", "MM", "MMM"];
    return binler[str[0]] + yuzler[str[1]] + onlar[str[2]] + birler[str[3]];
  }
};
console.log(roma(2999));
