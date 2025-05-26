/*

Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').

Si tecleo el número el número 9 deberá mostrar cinco lineas con los números 0 2 4 6 8

*/

let valorEntero = 0;
let mensaje = "";

valorEntero = parseInt(prompt("Dime un número entero:"));

for (var i = 0; i <= valorEntero ; i++){
    //Verifica que el número sea par
    if(i % 2 === 0){
        mensaje = mensaje + i + "\n";
    }
}

alert(mensaje);