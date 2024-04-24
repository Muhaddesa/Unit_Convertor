/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let valumeEl= document.getElementById('valume-el')
let massEl= document.getElementById('mass-el')

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed((3))} meter`

    valumeEl.textContent= `${baseValue} litter = ${baseValue * literToGallon} Gallon | ${baseValue} Gallon = ${(baseValue / literToGallon).toFixed((3))} Litter`
    
    massEl.textContent= `${baseValue} Kilo = ${(baseValue * kiloToPound).toFixed((2))} Pound | ${baseValue} Pound = ${(baseValue / kiloToPound).toFixed((3))} Kilo`
})
