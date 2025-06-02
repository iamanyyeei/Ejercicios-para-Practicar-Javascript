/*
Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas

Si le doy el número 5 pues deberá contar 0,1,2,3,4,5
*/

let contador = 0;
let numero = 0;
numero = parseInt(prompt("Dime un número entero:"));

let mensaje = "";

while(contador <= numero){
    mensaje = mensaje + contador + ", ";
    contador ++;
}

if (mensaje.length > 0) {
    mensaje = mensaje.slice(0, -2);
}

alert(mensaje);