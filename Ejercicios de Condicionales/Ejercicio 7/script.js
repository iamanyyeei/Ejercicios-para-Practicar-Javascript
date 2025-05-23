/*
En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.

Ejemplo si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h. Estaría descalificado.
*/

let longitudDelTramoEnKm = 0;
let tiempoEmpleado = 0;
let kmSobreHoras = 0;

longitudDelTramoEnKm = prompt("¿Cuál es la longitud del tramo en kilómetros");

tiempoEmpleado = prompt("¿Cuál es tiempo empleado en horas?");

kmSobreHoras = parseInt(longitudDelTramoEnKm) / parseInt(tiempoEmpleado);

if(kmSobreHoras >= 40 && kmSobreHoras <= 60){
    alert('El conductor es APROBADO ');
}else{
    alert('El conductor está DESCALIFICADO');
}