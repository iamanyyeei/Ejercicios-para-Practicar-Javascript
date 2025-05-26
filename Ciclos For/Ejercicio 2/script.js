/*
Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por comas desde el número tecleado hasta el 0.

Si tecle o número 5 deberá mostarar 5,4,3,2,1.

*/

let valorEntero = 0;
let mensaje = "";

valorEntero = parseInt(prompt("Dime un número entero:"));

for (i = valorEntero; i >= 0 ; i--){
    mensaje = mensaje + i + ",";
}

//Crea una nueva cadena que contiene todos sus caracteres excepto el úñtimo, que quitaría la coma adicional después del número más alto
if (mensaje.length > 0) {
    mensaje = mensaje.slice(0, -1);
}

alert(mensaje);