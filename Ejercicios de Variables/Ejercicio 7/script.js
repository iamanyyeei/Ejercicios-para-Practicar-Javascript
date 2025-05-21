/*
En este script debes pedir al usuario un número de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número. Usa solo operationes aritméticas

Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades

Si ese teclea el número 45

Unidades: 5

Decenas: 4
*/

function unidadesYDecenas (){
    let num = prompt("Dame un número de 2 dígitos");
    parseInt(num);

    let decenasDelNumero = num / 10;
    let unidades = num % 10;

    console.log("Decenas: " + Math.floor(decenasDelNumero));
    console.log("Unidades: " + unidades);
}

unidadesYDecenas();