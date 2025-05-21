/*

Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.

Un cliente elige vino, aparecerá el mensaje vaya a la barra, en caso contrarío dirá que vaya a la tienda
*/

let opcion = 0;

opcion = prompt("Elige lo que quieres pedir: 1.Vino, 2.Cerveza, 3. Refresco o 4. Agua. Escribe el número de la opción deseada: ")

if(opcion === "1" || opcion === "2"){
    alert("Dirígete a la barra");
}else if(opcion === "3" || opcion === "4"){
    alert("Dirígete a la tienda");
}else{
    alert("La opción no existe");
}