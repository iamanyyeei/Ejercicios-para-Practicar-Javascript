/*
Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. Si teclea un valor fuera del menu se mostrará un mensaje de error y se vuelve a pedir un número de opción. El programa finaliza al teclear el 3.

Pulso 1, mensaje Opción leeer datos. Y vuelve a pader opción. Pulso 4 : Error y vuelve a pedir opción, Pulso 3: Fin del programa y acaba.
*/


let opcion;

while(opcion !== 3){
    opcion = parseInt(prompt(`
        Menú de opciones: \n
        1. Leer datos \n
        2. Mostrar datos \n
        3. Fin \n
        `))

    switch (opcion){
       case 1:
        alert("Opción: Leer datos");
        break;
       case 2:
        alert("Opción: Mostrar datos");
        break;
       case 3:
        alert("Opción: Finalizar");
        break;
      default:
        alert("Error, opción incorrecta");
      }
}
alert("Programa finalizado");