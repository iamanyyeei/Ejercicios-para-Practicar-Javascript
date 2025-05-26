/*
Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

Recuerda que el salto de linea es el carácter "\n"

Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma

4 x 1 = 4

4 x 2 = 8...

*/

let numero = 0;
let mensaje = "";

numero = parseInt(prompt("Ingresa un número:"));

for (i = 1; i <= 10; i++){
    mensaje = numero + " x " + i + " = " + numero * i;

    console.log(mensaje);
}