/*
Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.

Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

Aparecerá el prompt y el usuario escribirá su nombre:

Usuario escribe juan

Hola Juan
*/

let nameUser = "";
nameUser = prompt("Escribe tu nombre:");

function saludar(nameUser){

    if(nameUser !== ""){
        alert(`Hola ${nameUser}`);
    }else{
        alert("Recuerda escribir tu nombre");
    }
}
saludar(nameUser);