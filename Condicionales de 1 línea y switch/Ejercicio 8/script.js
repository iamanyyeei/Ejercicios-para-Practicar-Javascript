/*
En una tienda coches se quiere redirigir a un cliente hacia una sección de acuerdo al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficina 200 y si elige eléctrico o 3 se le enviará a la oficina 300.

Por ejemplo tecleo el número 2, el mesnaje me dirá que vaya a la oficina 200
*/

let opcionDelUsario = 0;
opcionDelUsario = prompt("Elige un tipo de coche según su combustible: 1. Gasolina, 2. Diesel, o 3. Eléctrico. Indique el número que corresponda a su elección:");

let opcionFinal = parseInt(opcionDelUsario);

switch(opcionFinal){
    case 1:
        alert("Se le enviará a la oficina Nro. 100 (Coche a gasolina)");
        break;
    case 2:
        alert("Se le enviará a la oficina Nro. 200 (Coche a diesel)");
        break;
    case 3:
        alert("Se le enviará a la oficina Nro. 300 (Coche eléctrico)");
        break;
    default:
        alert("No tenemos esa opción disponible");
        break;
}