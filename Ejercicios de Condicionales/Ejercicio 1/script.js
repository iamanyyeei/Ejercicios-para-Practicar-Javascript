/*
Se trata de escribir un script que diga si un número es par o es impar.

Recordemos que un número es par si al dividirlo por 2 da como resto 0.

Si el número es 17, el programa debe decir que es impar
*/

let numero = prompt("Dime un número");
parseInt(numero);

if(numero%2 === 0){
    alert(`El número ${numero} es par`);
}else{
    alert(`El número ${numero} es impar`);
}