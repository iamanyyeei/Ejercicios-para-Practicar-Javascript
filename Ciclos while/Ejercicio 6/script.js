/*
En este script se pedirá al usuario que teclee un número cada vez. El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.

El usuario teclea primero el 4 luego el 5 depsués 6 y finalmente , 0. El programa se para y muestra "La suma de todos los número es 15"
*/

let numero = 1;
let suma = 0;

while(numero !== 0){
    numero = parseInt(prompt("Ingrese un número:"));

    suma = suma + numero;
}

alert("La suma de todos los números es: " + suma);