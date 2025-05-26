/*

Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.

Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x

*/


let letra = "";
let numero = 0;
let cadena = "";

letra = prompt("Dime una letra:");
numero = parseInt(prompt("Ahora dime un número:"));

for(i = 1; i <= numero; i++){
    cadena = cadena + letra;
}
console.log(cadena);