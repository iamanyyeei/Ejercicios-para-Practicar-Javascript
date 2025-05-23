/*
En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado. Si la base y el alto son idénticos la respuesta será "Es un cuadrado", si la base es mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".

Si entro base es 10, alto es 5. Resultado rectángulo
*/

let base = 0;
let alto = 0;

base = parseFloat(prompt("Indique la base:"));
alto = parseFloat(prompt("Indique el alto"));

switch(true){
    case (base === alto && (base !== 0 && alto !==0) ):
        alert("Es un cuadrado");
        break;
    case (base > alto && (base !== 0 && alto !==0) ):
        alert("Es un rectángulo horizontal");
        break;
    case (base < alto && (base !== 0 && alto !==0) ):
        alert("Es un rectángulo vertical");
        break;
    default:
        alert("Recuerda ingresar una base y un alto distitos de cero");
        break;
}