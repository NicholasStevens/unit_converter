/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let calcBtn = document.getElementById("calc-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

calcBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet`;
});
