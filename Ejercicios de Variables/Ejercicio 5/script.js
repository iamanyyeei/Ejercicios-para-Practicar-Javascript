/*
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático muy simple numero de litros dividido por número de kilómetros.

El usuario teclea

Num de litros: 20

Num de kilómetros: 80

Has consumido 0.25 l/km  //   20/80
*/

let numKm = 0;
let numLitros = 0;

function calculate(){
    numKm = prompt("¿Cuántos kilómetros has recorrido?");

    numLitros = prompt("¿Cuántos litros de gasolina has consumido?");

    let resultado = 0;

    resultado = numLitros / numKm;
    alert(`Tu vehículo ha consumido ${resultado} por cada Km`); 
}

calculate(numKm, numLitros);