/*

Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo

Si num1 es 2 debe decir que num1 es positivo

*/

let numero = 0;
numero = prompt("Dime un numero"); 
parseInt(numero);

if(numero >= 0){
    alert(`El número ${numero} es positivo`)
}else{
    alert(`El número ${numero} es negativo`)
}