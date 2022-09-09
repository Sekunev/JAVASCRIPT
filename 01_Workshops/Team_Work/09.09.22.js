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

const convertToRoman = (num) => {
  let roman = "";
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNum = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
      roman += romanNum[i];
      num -= decimal[i];
    }
  }
  return roman;
};

console.log(convertToRoman(5));
