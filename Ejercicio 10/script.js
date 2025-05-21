/*
Pues seguimos con los números. Escribe un script  que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales.

numero: 50

¿Es par? : true
*/

let numero = prompt("Dime un número entero");

parseInt(numero);

let resultado = numero % 2;

let par = resultado == 0;

console.log("¿Es par?: " + par);