/*
El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar cual es el mayor, el primero o el segundo.

La idea es usar las sentencias if reducidas (cond ? ture:false)

Si el usuario entra 2 y luego 4, debe decir que el mayor es el segundo número.
*/

let num1 = 0;
let num2 = 0;
let mayor = 0;

num1 = prompt("Ingresa un número");
num2 = prompt("Ingresa otro número");

//Si no lo hago de esta forma, al parecer solo compara el primer dígito de cada número
let numero1 = parseInt(num1);
let numero2 = parseInt(num2);

mayor = (numero1 > numero2) ? "primero" : "segundo";

console.log(`El número mayor es el ${mayor}`);