/*

Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.

Teiens que escribir un programa que intercambie el valor de dos variables. Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. No vale usar arrays ni asignación múltiple

Antes:

varUno vale 10, varDos vale 30

Al final

varUno vale 30, varDos vale 10

*/

let variable1 = 10;
let variable2 = 30;

let auxiliar = variable1;

variable1 = variable2;
console.log("La variable 1 es: " + variable1);

variable2= auxiliar;
console.log("La variable 2 es: " + variable2);