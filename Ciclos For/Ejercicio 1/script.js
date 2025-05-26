/*
Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.

Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5 
*/

let valorEntero = 0;
let mensaje = "";

valorEntero = parseInt(prompt("Dime un número entero:"));

for (i = 0; i<= valorEntero; i++){
    mensaje = mensaje + i + ",";
}

//Crea una nueva cadena que contiene todos sus caracteres excepto el úñtimo, que quitaría la coma adicional después del número más alto
if (mensaje.length > 0) {
    mensaje = mensaje.slice(0, -1);
}

alert(mensaje);