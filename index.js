//---forecast today---
let kelvin = 293;

//---convert to celsius---
let celsius = kelvin - 273;
//console.log(celsius);

//---convert to fahrenheit---
let fahrenheit = celsius * (9 / 5) + 32;
//console.log(fahrenheit);

//---round down fahrenheit---
fahrenheit = Math.floor(fahrenheit);

//---current kelvin temperature---
let messageOne = `The current Kelvin temperature is ${kelvin}.`;
document.getElementById("kelvin").innerHTML = messageOne;

//---output converted temperature in fahrenheit and celsius---
let message = `The temperature is ${fahrenheit} degrees Fahnrenheit and ${celsius} degrees Celsius.`;
document.getElementById("output").innerHTML = message;

//   console.log(kelvin);
//---update kelvin from user input---
function updateTemp() {
    let update = document.getElementById("input").value;
    document.getElementById("update").innerHTML = update;
}
//---check if kelvin is updated---
console.log(kelvin);
console.log(updateTemp());
//   console.log(document.getElementById("input").value);

//---update kelvin temperature---
let messageTwo = `The update Kelvin temperature is ${updateTemp()}.`;
document.getElementById("update").innerHTML = messageTwo;

//w3schools inplementation
function tempConvCelcToKelvin(valNumC) {
    valNumC = parseFloat(valNumC);
    document.getElementById("outputKelvinFromCelsius").innerHTML = "Kelvin : " + Math.floor(valNumC + 273.15);
}
function tempConvFahToKel(valNumF) {
    valNumF = parseFloat(valNumF);
    document.getElementById("outputKelvinFromFehrenheit").innerHTML = "Kelvin : " + Math.floor(((valNumF - 32) / 1.8) + 273.15);
}
