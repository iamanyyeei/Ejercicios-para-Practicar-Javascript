/*
En este ejercicio el script convertirá las notas numéricas de un examen en paabras: 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.

Si tecleo 8 me dirá "Tu calificación es  notable
*/

let script = "Tu calificación";

let nota = parseInt(prompt("Dime tu nota del 0 al 10:"));

switch(true){
    case (nota < 5):
        alert(`${script} está en SUSPENSO`);
        break;
    case (nota > 5 && nota < 8):
        alert(`${script} es APROBADO`);
        break;
    case (nota > 7 && nota < 9):
        alert(`${script} es NOTABLE`);
        break;
    case (nota > 8 && nota <=10):
        alert(`${script} es SOBRESALIENTE`);
        break;
    default:
        alert("Hay un error, recuerda escribir bien tu nota en el sistema");
        break;
}