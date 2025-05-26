/**
 Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la forma "Los números enteros de 0 a n  suman suma"

 Si tecleo el 5 obtendré "Los enteros enteros de 0 a 5 suman 15" (1+2+3+4+5 ).
 */

 
let numero = 0;
let suma = 0;
let cadena = "";

numero = parseInt(prompt("Dime un número:"));

for(i = 1; i <= numero; i++){
    suma = suma + i;
    cadena = cadena + i + " + ";
}

if (cadena.length > 0) {
    //Quita 3 elementos al final, los tres que son; " + "
    cadena = cadena.slice(0, -3);
}

console.log(`Los números enteros de 0 a ${numero} suman: ${suma} (${cadena})`);