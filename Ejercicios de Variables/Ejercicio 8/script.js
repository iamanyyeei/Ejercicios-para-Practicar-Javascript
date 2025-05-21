/*
Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias

.5 comensales,

Se necesitará:

1 kg de papas

5 huevos

300 gr de cebolla
*/

gramosDePatatas = 200;
huevosPorKiloDePatatas = 5;
gramosDecebolla = 300;

let cantidadComensales = prompt("Dime la cantidad de comensales para la cena: ");
parseInt(cantidadComensales);

let cantidadFinalDePatatas = gramosDePatatas * cantidadComensales;

if(cantidadFinalDePatatas <= 1000){
    console.log(`Se necesitan: 1Kg de patatas, ${huevosPorKiloDePatatas} huevos y ${gramosDecebolla} gramos de cebolla`);
}else{
    cantidadFinalDePatatas = cantidadFinalDePatatas / 1000;
    let cantidadFinalDeHuevos = cantidadFinalDePatatas * huevosPorKiloDePatatas;
    let cantidadFinalDeCebolla = cantidadFinalDePatatas * gramosDecebolla;

    console.log(`Se necesitan: ${cantidadFinalDePatatas} Kg de patatas, ${cantidadFinalDeHuevos} huevos y ${cantidadFinalDeCebolla} gramos de cebolla`);
}