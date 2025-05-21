/*
Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.

horas : 2

minutos 30

Resultado 2*60*60 + 30*60 = 9000 segundos
*/


function ConvertirASegundos(){

    let horas = prompt("Dime la hora");
    let minutos = prompt("Dame los minutos");

    alert(`La hora que me diste es: ${horas}:${minutos}`);

    let resultadoEnSegundos = (horas*60*60) + (minutos*60);
    alert(`La hora que me diste convertida a segundos es: ${resultadoEnSegundos}seg`);
}

ConvertirASegundos();