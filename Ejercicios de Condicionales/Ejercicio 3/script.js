/*
En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de erro

Si se entran el número 8 y 2, debe resultar 4

Si se entran 4 y 0, debe resultar en un mensaje de error.
*/


let dividendo = 0;
let divisor = 0;

dividendo = prompt("Dime un número entero:");
divisor = prompt("Dime otro número entero:");
parseInt(dividendo);
parseInt(divisor);

if(divisor > 0){
    let cocienteDeLaDivision = dividendo / divisor;
    alert(`El cociente es: ${cocienteDeLaDivision}`);
}else{
    alert("¡Error!")
}