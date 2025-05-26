/**
 * 
 * Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4
 * 
 * El progrma pide 4 veces al usuario que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9"
 */

let numero = 0;
let suma = 0;
let media = 0;

for(i = 0; i < 4; i++){
    numero = parseInt(prompt("Dime un número:"));

    suma = suma + numero;
}

media = suma / 4;

console.log("La media es: " + media);