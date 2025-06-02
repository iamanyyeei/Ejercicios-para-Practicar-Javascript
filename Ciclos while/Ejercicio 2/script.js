/*

Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número

Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5

*/

let numero = 0;

//Compara si el número es menor que 1 o mayor que 5 y si lo es, vuelve a pedir que escribas el número
while(numero < 1 || numero > 5){

    numero = parseInt(prompt("Escribe un número del 1 al 5"));
    
    if(numero == 0){
        alert("Recuerda escribir un número entre 1 y 5");
    }
}