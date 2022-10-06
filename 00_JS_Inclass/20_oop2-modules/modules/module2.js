console.log("module 2 is running");
import { inc } from "./mymodule.js";

console.log("inc(100) :>> ", inc(100));
console.log("inc(100) :>> ", inc(51));

export function selam() {
  console.log("Selamlar");
}
export function deneme() {
  console.log("deneme1");
}
export default function () {
  console.log("güle güle");
}
