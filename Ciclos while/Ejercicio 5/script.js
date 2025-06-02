/*
Escribir un script que pida al usuario una contraseña. Si coincide con la clave definida en el script le devolverá el mensaje "Acceso concedido" y si no coincide le devolverá el mensaje "Acceso Denegado" . Si falla tres veces se emitirá el mensaje "Alerta, intruso"

La contraseña es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso.
*/

let getPassword = "";
let password = "pasar";
let contador = 0;

//Se ejecuta mientras la contraseña ingresada sea diferente y el contador sea menor que 3 intentos
while(getPassword !== password && contador < 3){

    getPassword = prompt("Escribe la contraseña:");

    if (getPassword == password){
        alert("Acceso concedido");
    }else{
        alert("Acceso denegado");
        //si el acceso es denegado, suma los intentos fallidos
        contador ++;
    }

    if(contador == 3){
        alert("¡Alerta! Tenemos un intruso");
    }
}
