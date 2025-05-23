/*

En este ejemplo el usuario tecleará dos números. Debe devolver la diferencia entre el mayor y el menor

Si el usuario entre el 5 y el 8, el programa devolverá 3 (8 - 5)
*/

let num1 = 0; 
let num2 = 0;
num1 = prompt("Dime un número:");
num2 = prompt("Dime otro número:");

if( num1 > num2){
    alert(`El número mayor es:  ${num1}`);
    let resta = num1 - num2;
    alert(`La diferencia entre ${num1} y ${num2} es: ${resta}`);
}else if( num2 > num1){
    alert(`El número mayor es:  ${num2}`);
    let resta = num2 - num1;
    alert(`La diferencia entre ${num2} y ${num1} es: ${resta}`);
}