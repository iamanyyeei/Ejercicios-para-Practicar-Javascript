/*

Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobús le recordará que lleve dinero para el billete.

*/

let transporte = prompt("¿Cómo viajará? 1. Coche, 2. Tren, 3. Bicicleta o 4. Autobús. Indica tu selección con el número que corresponda");

let opcion = parseInt(transporte)

if(opcion === 2 || opcion === 4){
    alert("Recuerda llevar dinero para tu ticket de viaje :)")
}else if(opcion === 1 || opcion === 3){
    alert("No necesitas ningún ticket ya que viajas por tu cuenta :)");
}else{
    alert("La opción seleccionada no existe");
}