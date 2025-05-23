/*
 
El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensaje de acierto en caso contrario dirá que se produjo un error.

Se trata de usar el if resumido (cond?true:false)

Por ejemplo si teclea 3 y 9 el resutlado es Correcto. Si tecleo 3 8, el resultado será Error

 */

let numero = 0;
let exponente = 0;
let calcularExponente = 0;

numero = prompt("Ingresa un número:");
exponente = prompt(`Ingresa el cuadrado del número que me diste: ${numero}`);

let number = parseInt(numero);
let exponent = parseInt(exponente);

calcularExponente = number ** 2;

let resultado = (exponent === calcularExponente ? "Correcto" : "¡Incorrecto!");

alert(`El cuadrado del número que me diste ${number} es: ${resultado}`)