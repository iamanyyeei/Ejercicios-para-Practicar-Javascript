/*
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.

El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.

Lado 40

El area es 1600

El perímetro es 160

*/

let ladoDelCuadrado = 40;

function areaDelCuadrado(ladoDelCuadrado){
    let resultado = ladoDelCuadrado*ladoDelCuadrado;
    console.log(`El área del cuadrado es: ${resultado}`);
    return;
}

function perimetroDelCuadrado(ladoDelCuadrado) {
    let resultado = 0;
    for(i = 0; i < 4;  i++){
        resultado = resultado + ladoDelCuadrado;
    }
    console.log(`El perímetro cuadrado es: ${resultado}`);
}

areaDelCuadrado(ladoDelCuadrado);
perimetroDelCuadrado(ladoDelCuadrado);