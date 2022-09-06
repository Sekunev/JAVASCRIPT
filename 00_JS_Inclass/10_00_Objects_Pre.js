// Objeler, verileri organize bir şekilde depolamak için kullanışlıdır.

// Anahtar/değer çiftleri, bir anahtar ve bir değer kullanılarak nesnelerde depolanır. Bu verilere aynı zamanda properties (özellikler) de denir.

// Değer bir fonksiyon olduğunda, buna method denir . Metotlar, objelerin (nesnelerin) içinde saklanan fonksiyonlardır.

//! create objects

// 1. Yöntem:

let person = {
  firstName: "John",
  lastName: "Doe",
};

// 2. Yöntem:

const person1 = new Object();
person1.firstName = "Ali";
person1.lastName = "veli";
console.log(person1);

// 3. Yöntem:

function personal(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let personA = new personal("ahmet", "çelik");
let personB = new personal("can", "demir");
console.log(personA, personB);

//! Nesne Properti'lerine Erişim

const itSchool = {
  name: "Clarusway",
  location: "U.S.",
  established: "2019",
};
// 1. yöntem
console.log(itSchool.name); // Expected Output : 'Clarusway'
// 2. yöntem
console.log(itSchool["location"]); // Expected Output : "U.S."

//? Nokta gösterimini veya köşeli parantez gösterimini kullanarak bir nesneye yeni özellikler ekleyebiliriz:

// 1. yöntem
itSchool.firstAlumniYear = "2020"; // added new property

// 2. yöntem
itSchool["First Graduate Year"] = "2020";
console.log(itSchool); // Expected Output : { name: 'Clarusway', location: 'U.S.', established: '2019', firstAlumniYear: 2020, First Graduate Year: '2020'}

//?  We can modify existing properties using either the dot notation or the bracket notation:

itSchool.established = "2020"; // modified property
itSchool["First Graduate Year"] = "2021";
console.log(itSchool); // Expected Output : {name: 'Clarusway', location: 'U.S.', established: '2020', firstAlumniYear: '2020', First Graduate Year: '2021'}

// ? Delete properties is done using the delete keyword:

delete itSchool.established;
delete itSchool["First Graduate Year"]; // Expected Output: {name: 'Clarusway', location: 'U.S.', firstAlumniYear: '2020'}
console.log(itSchool);

//? Bir nesne başka bir nesneyi de içerebilir. Örneğin,

// nested object
const student = {
  name: "John",
  age: 20,
  marks: {
    science: 70,
    math: 75,
  },
};
// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}
// accessing property of marks object
console.log(student.marks.math); // 70

//! Object Methods

//? Nesneler ayrıca yöntemler içerebilir. Metotlar, nesnelerin içinde saklanan fonksiyonlardır.

const personC = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    // return this.firstName + " " + this.lastName;
    // or using template lateral notation
    return `${this.firstName} ${this.lastName}`;
  },
  greet: function () {
    console.log("hello");
  },
  greet2() {
    console.log("hello2");
  },
};
console.log(personC.fullName()); // John Doe
personC.greet(); // hello
personC.greet2(); // hello2

console.log("*****");

// JavaScript Objects & Classes

// constructor function
function PersonD() {
  (this.name = "John"), (this.age = 23);
}
// creating objects
const person11 = new PersonD();
const person12 = new PersonD();

console.log(person11);
console.log(PersonD.prototype);

console.log("********");

//! JavaScript Classes

// class Dog {
//   constructor(name, foot) {
//     this.dogName = name;
//     this.foot = foot;
//   }
// }

// //? Artık Dog sınıfını kullanarak nesneler oluşturabilirsiniz:

// myDog = new Dog("Buldog");

// console.log(myDog);

//! Methods

// class Dog {
//   constructor(name, foot) {
//     this.dogName = name;
//     this.foot = foot;
//   }
//   current() {
//     return "I have a " + this.dogName + " and it has " + this.foot + " legs";
//   }
// }
// myDog = new Dog("Buldog", 4);
// console.log(myDog.current());

//! Inheritance

class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  current() {
    return "I have a " + this.dogName;
  }
}

class Specy extends Dog {
  constructor(name, foot, char) {
    super(name, foot);
    this.character = char;
  }
  show() {
    return this.current() + ", it is  " + this.character;
  }
}

myDog = new Specy("Buldog", 4, "curious");
console.log(myDog.show());

//! Getters and Setters

// class Song {
//   constructor(genre) {
//     this.genre = genre;
//   }
//   get sgenre() {
//     return this.genre;
//   }
//   set sgenre(newgenre) {
//     this.genre = newgenre;
//   }
// }
// mysong = new Song("Classical");
// console.log(`My favourite is ${mysong.sgenre}`);
