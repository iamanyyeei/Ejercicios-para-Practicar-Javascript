/*

En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

Tecleo que pago 2 créditos, el escript me dirá que puedo acceder a las salas de consola y juegos 2D.
*/

let creditos = 0;

creditos = prompt("Puede cancelar hasta 4 créditos. ¿Cuántos desea pagar?");

let nroCreditos = parseInt(creditos);

acceso = "Puedes acceder a la sala de:";

switch(nroCreditos){
    case 1:
        alert(`${acceso} consolas`);
        break;
    case 2: 
        alert(`${acceso} consolas y juegos 2D`);
        break;
    case 3:
        alert(`${acceso} consolas, juegos 2D y juegos 3D`);
        break;
    case 4:
        alert(`${acceso} consolas, juegos 2D, juegos 3D y Realidad Virtual`);
        break;
    default:
        alert("Recuerda que sólo tienes opción a cancelar entre 1 y 4 créditos");
        break;
}