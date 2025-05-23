/*
Pues seguimos con los números. Escribe un script  que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales.

numero: 50

¿Es par? : true 
*/

let numero = 0;
let resultado = 0;
let par = 0;

numero = prompt("Dime un número entero");
parseInt(numero);

resultado = numero % 2;

par = resultado == 0;

console.log("¿Es par?: " + par);

