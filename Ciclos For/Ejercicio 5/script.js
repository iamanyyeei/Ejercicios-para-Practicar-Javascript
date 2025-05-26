/*

En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.

Por ejemplo si tecleas el 14, obtendré la lista 2, 5, 8 y 11
*/

let numero = 0;
let mensaje = "";

numero = parseInt(prompt("Ingresa un número:"));

for (i = 0; i <= numero; i++){
    
    if(i % 3 === 2){
        mensaje = mensaje + i + ",";
    } 
}

if (mensaje.length > 0) {
    mensaje = mensaje.slice(0, -1);
}
console.log(mensaje);


//Crea una nueva cadena que contiene todos sus caracteres excepto el úñtimo, que quitaría la coma adicional después del número más alto
