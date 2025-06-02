/*
Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En este caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados

El usuario teclea la serie 4,2,3,5,0, El máximo es 5 y el minimo es 2. Si telcea 2,2,2,0, máximo es 2 y minimo es 2.
*/

let numero;
let max = 0;
let min = 0;

numero = parseInt(prompt("Escriba un número:"));
min = numero;

while(numero !== 0){
    max = (numero > max) ? numero : max;
    min = (numero < min) ? numero : min;
    numero = parseInt(prompt("Escriba un número:"));
}

alert(`El número máximo es: ${max} y el número mínimo es: ${min}`);