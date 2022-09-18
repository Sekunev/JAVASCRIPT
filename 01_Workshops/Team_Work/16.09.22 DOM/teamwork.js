// variables

let textarea = document.querySelector(".textarea");
let button = document.querySelector(".button");
let div = document.querySelector(".form-floating");

console.log(textarea, button, div);

// sesli harf bulan fonksyonu yazalım.

const vowelFunc = () => {
  const str = textarea.value.toLowerCase();
  console.log(str);
  const vowel = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
  let vowelNum = 0;
  for (i of str) {
    for (j of vowel) {
      if (j == i) {
        vowelNum++;
      }
    }
  }
  return vowelNum;
};

console.log(vowelFunc());

// yeni satırı oluştur ve yerini belirle
const newRow = document.createElement("p");
div.appendChild(newRow);

// butona tıklayınca neler olacak.
button.addEventListener("click", () => {
  if (!textarea.value) {
    alert("Please enter a text");
  } else {
    newRow.innerHTML = `<p><span style="color: red;">${
      textarea.value
    } </span>  içinde ${vowelFunc()} tane sesli harf bulunmaktadır.</p>`;
    textarea.value = "";
  }
  textarea.focus();
});

console.log("2 .bölüm *******************");

// Mantık:
// n = a      2. döngüm a kadar   2n-1

// bbb*bbb     4     n a  n-- a++  str= "\n"
// bb*b*bb    3-5    n a   if( i==n || i ==a) str += "*" else str += " "
// b*bbb*b    2-6
// *bbbbb*    1-7
// b*bbb*b    2-6
// bb*b*bb    3-5
// bbb*bbb     4

let input = document.querySelector("#input");
let yildiz = document.querySelector("#yildiz");

input.addEventListener("change", () => {
  yildiz.innerHTML = ciz(input.value);
});

let ciz = (n) => {
  let str = "";
  let a = n;
  let counter = 0;
  let inpNum = n; // girilen number.
  let dongu = n * 2 - 1; // döngü sayısı

  while (dongu > 0) {
    for (let i = 1; i <= a; i++) {
      if (i == n || i == a) {
        str += "*";
      } else {
        str += "&nbsp;&nbsp;&nbsp;";
      }
    }
    str += "<br>";
    counter++;
    if (counter < inpNum) {
      a++;
      n--;
    } else {
      a--;
      n++;
    }

    dongu--;
  }
  return str;
};

// ***********
// Farklı çözüm (Murat)

// const abc = document.getElementById("number-box");
// const efg = document.getElementById("result");
// abc.addEventListener("input", () => {
//   efg.innerHTML = diamond(abc.value);
// });

// let diamond = (number) => {
//   const sayi = number;
//   let result = "";
//   let sayi2 = sayi;

//   let bosluk = -2;
//   for (let i = 1; i < sayi * 2; i++) {
//     if (i < sayi) {
//       for (let j = sayi2; j > 0; j--) {
//         result += " ";
//       }
//       result = result + "*";
//       sayi2--;

//       for (let a = bosluk; a >= 0; a--) {
//         result = result + " ";
//       }
//       if (bosluk != -2) {
//         result = result + "*" + "\n";
//       } else {
//         result += "\n";
//       }
//       bosluk += 2;
//     } else {
//       for (let l = sayi2; l > 0; l--) {
//         result += " ";
//       }
//       result = result + "*";
//       sayi2++;
//       for (let a = bosluk; 0 <= a; a--) {
//         result = result + " ";
//       }

//       if (bosluk == -2) {
//         break;
//       } else {
//         bosluk -= 2;
//         result = result + "*" + "\n";
//       }
//     }
//   }

//   return `${result}`;
// };
