/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let calcBtn = document.getElementById("calc-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const litreToGallon = 0.264;
const gallonToLitre = 3.78541;
const kiloToPound = 2.204;
const poundToKilo = 0.45359237;

calcBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  lengthEl.textContent = `${baseValue} meters = ${
    baseValue * meterToFeet
  } feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`;
  volumeEl.textContent = `${baseValue} litres = ${
    baseValue * litreToGallon
  } gallons | ${baseValue} gallons is ${(baseValue * gallonToLitre).toFixed(
    3
  )} litres`;
  massEl.textContent = `${baseValue} kilograms = ${
    baseValue * kiloToPound
  } pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(
    3
  )} kilos`;

  inputEl.value = "";
});
