/*

Determinar si el número que teclea el usuario es primo o no. 

//Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.

Si el usuario telcea el 3: dirá que 3 es primo. Si teclea el 4 dirá que 4 no es primo
*/

//un numero es primo cuando es > 1
//es primo si el resto NO es cero

let numero = 0;
let divisor = 2;

numero = parseInt(prompt("Ingrese un número primo:"));

while(divisor <= numero && numero % divisor !== 0){
    divisor++;
}

if(divisor < numero){
        console.log("El número NO ES primo");
}
else{
    console.log("El número ES primo");
}