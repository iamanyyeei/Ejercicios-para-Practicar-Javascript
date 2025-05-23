/*
En este caso, también usando el operador ternario o if reducido, un visitante a la página deberá teclear su edad, si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá decirle los años que tiene que estperar para entrar

Si le digo que tengo 19 años me dirá "Puedes entrar", si le digo que tengo 14 años me dirá "Espera 4 años"
*/

let edad = 0;

edad = prompt("Dime tu edad");
parseInt(edad);

let menorDeEdad = (18 - edad);

let mayorDeEdad = (edad >= 18) ? "Entra" : `Espera ${menorDeEdad} años`;

console.log(mayorDeEdad);