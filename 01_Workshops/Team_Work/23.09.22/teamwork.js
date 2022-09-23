// const brackets1 = "{ [ ( ] ) }"; //* false
// const brackets2 = "[([({})})({})]"; //* false
// const brackets3 = "[({})]"; //* true

// const bracketValidator = (str) => {
//   while (str.includes("()") || str.includes("[]") || str.includes("{}")) {
//     str = str.replace("()", "").replace("[]", "").replace("{}", "");
//   }
//   return str === "";
// };
// console.log(bracketValidator(brackets1));
// console.log(bracketValidator(brackets3));

// ******************Hava Durumu****************

console.log("Hava Durumu");

const sehir = document.querySelector("#sehir");
const liste = document.querySelector("#liste");
const key = "6e1a3eda9fa53b82169bd49471c74f36";
let city = "";
// * const api =`https://api.openweathermap.org/data/2.5/weather?q=konya&appid=6e1a3eda9fa53b82169bd49471c74f36`;

const weather = () => {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data),
      //  console.log(data.name);
      //  console.log(Math.round(data.main.temp) + " °C");
      //  console.log(data.weather[0].description);
      let icon = data.weather[0].icon;
      // console.log(icon);
      let durum = data.weather[0].description;
      let derece = Math.round(data.main.temp) + " °C";
      return tahmin(data.name, derece, icon, durum);
    });
};

// weather(api);

function tahmin(isim, derece, icon, durum) {
  liste.innerHTML += `<li> ${isim} <br> ${derece} <br> <img src="http://openweathermap.org/img/w/${icon}.png" alt=""> <br> ${durum} </li>`;
}

sehir.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    city = sehir.value;
    console.log(city);
    weather();
  }
});
