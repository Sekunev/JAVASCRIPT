let numbers = [10, 15, 20, 30, 40];
const newArray = numbers.map((num) => num * num);
console.log(newArray);

// hepsini büyük harfe çevirmenin 2 yöntemi.

let avengers = ["iron Man", "captain america", "Black widow", "hulk"];

let newarr = avengers.map((a, i, arr) => (arr[i] = a.toLocaleUpperCase()));

console.log(newarr);

// const newArray = avengers.map((a) => a.toUpperCase());

console.log(newArray);

let slicer = avengers.slice(2);

console.log(slicer);

// iki listeyi birleştiriniz

let A = [12, 14, 21];
let B = [11, 13, 17, 10];

let sorted = (arr1, arr2) => {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }
  arr2.forEach((i) => {
    arr.push(i);
  });
  let array = [];
  while (arr.length > 0) {
    let enk = 200;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (enk > arr[i]) {
        enk = arr[i];
        index = i;
      }
    }
    array.push(enk);
    arr.splice(index, 1);
  }
  console.log(array);
  arr = null;
  return array;
};

sorted(A, B);

let sorted1 = (arr1, arr2) => arr1.concat(arr2).sort((c, d) => c - d); // küçükten büyüğe sıralama
console.log(sorted1(A, B));
let sorted2 = (arr1, arr2) => arr1.concat(arr2).sort((c, d) => d - c); // büyükten küçüğe sıralama
console.log(sorted2(A, B));
