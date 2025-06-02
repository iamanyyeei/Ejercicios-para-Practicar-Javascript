/*
Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares, en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).

Muestra Si escribo 2,8,12,1 el script me dirá "Ha escrito 3 números pares")
*/


let numero = 0;
let sumar = 0;
let contador = 0;

//los numeros pares son numero % 2 === 0
// el 0 tambien es par

while(numero % 2 === 0 || numero === 0){
    numero = parseInt(prompt("Ingresa un número al azar:"));

    //suma los números ingresados
    sumar = sumar + numero + ",";
    //lleva la cuenta de los números pares
    contador++;

    //si el usuario escribe un impar, resta uno a la cuenta de los pares para que no tome en cuenta ese número impar
    if(numero % 2 !== 0){
        contador = contador -1;
    }
}

//Le quita la última coma al mensaje
if (sumar.length > 0) {
    sumar = sumar.slice(0, -1);
}

alert(sumar + `: Has escrito ${contador} números pares.`);