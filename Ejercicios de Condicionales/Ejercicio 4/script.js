/*
Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúscula o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó.

Si pulsa C le dará mensaje de error.
*/

let letra = prompt("Escribe una letra entre A, B, C y D: ");

if(letra == "A" || letra == "a"){
    alert("¡Genial! Has acertado :)");
}else if( letra == "B" || letra == "b"){
    alert("¡Upps! Te equivocaste :(");
}else if(letra == "C" || letra == "c"){
    alert("¡ERROOOOR!");
}else{
    alert("Esta letra no es parte del juego. Intenta de nuevo...");
}