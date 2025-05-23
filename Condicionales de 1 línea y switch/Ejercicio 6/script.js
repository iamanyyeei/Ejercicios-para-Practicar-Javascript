/*

Aprtir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.

Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño.

Si tecleo el 3 el script me responderá que estamos en Primavera
*/

let opcionDelUsario = "";
opcionDelUsario = prompt("Dime el número de un mes (son 12): ");

let mes = parseInt(opcionDelUsario);

switch(mes){
    case 12:
    case 1:
    case 2:
        alert("Estamos en invierno");
        break;
    case 3:
    case 4:
    case 5:
        alert("Estamos en primavera");
        break;
    case 6:
    case 7:
    case 8:
        alert("Estamos en verano");
        break;
    case 9:
    case 10:
    case 11:
        alert("Estamos en otoño");
        break;
    default:
        alert("Ese mes no existe");
        break;
}