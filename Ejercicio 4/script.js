/*

En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

Si el usuario teclea:

3
2
4

La media de los números es 3.

*/


let suma = 0
let media = 0;

for(i = 0 ; i < 3; i++){
    let guardarNumero = prompt("Ingresa un número");
    suma = suma + parseInt(guardarNumero);
}

media = suma / 3;

console.log(`La media de los 3 números que me diste es: ${media}`);