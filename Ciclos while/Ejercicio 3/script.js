/*

Un script que preguntará al usuario si desea continuar con el programa. Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. Cualquier otra entrada repetirá la pregunta

El usuario teclea Si, como no es la letra s pues dirá Error, ¿Desa seguir con el programa?

*/

let answer = "";

while(answer !== "n" && answer !== "N"){

    answer = prompt("¿Desea continuar con el programa?");

    if(answer == "si" || answer == "Si" || answer == "SI"){
        alert("Error, ¿desea seguir con el programa?");
    }
}

alert("Usted finalizó el programa");