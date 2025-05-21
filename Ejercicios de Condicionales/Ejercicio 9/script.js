/*
Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7.

Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable
*/

let tri1 = 0;
let tri2 = 0;
let tri3 = 0;
let promedio = 0;
let sumatoria = 0;

alert("Ingresa la nota de tus 3 trimestres");
tri1 = prompt("Escribe la nota que obtuviste el 1er trimestre:");
tri2 = prompt("Escribe la nota que obtuviste el 2do trimestre:");
tri3 = prompt("Escribe la nota que obtuviste el 3er trimestre:");

sumatoria = parseFloat(tri1) + parseFloat(tri2) + parseFloat(tri3);

promedio = (sumatoria) / 3;

if(promedio < 5){
    alert("Estás en suspenso");
}else if(promedio >= 5 && promedio <=7){
    alert("Estás aprobado");
}else if(promedio > 7){
    alert("Aprobaste con una nota NOTABLE: " + promedio);
}