/*
Se trata de dibujar un triángulo rectángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.

Le tecleamos el valor 5. El resultado será:

*
**
***
****
*****
*/

let asterisco = "*";
let numero = 0;
let cadena = "";

numero = parseInt(prompt("Dime un número:"));

for(i = 1; i <= numero; i++){
    cadena = cadena + asterisco;
    console.log(cadena);
}