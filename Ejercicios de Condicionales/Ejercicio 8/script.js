/*
Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.

Por ejemplo si compras 20 artículos de 50 euros se te descuenta un 15% del total pagarías 20*50 - 20*50*0.15 = 850 euros.

*/

const porcentajeDescuento = 15;

let articulos = prompt("¿Cuántos artículos iguales llevas?");
let cantidadDeArticulos = parseInt(articulos);

let precio = prompt("¿Cuál es el precio en euros?");
let elPrecio = parseFloat(precio);

if(cantidadDeArticulos >= 10 && elPrecio > 40){
    
    let factura = cantidadDeArticulos * elPrecio;
    let facturaFinal = factura - ((factura * porcentajeDescuento)/100);

    console.log("Debes pagar: " + facturaFinal + "euros.");
}else{
    let factura = cantidadDeArticulos * elPrecio;
    console.log("Tu factura es de: " + facturaFinal + " euros");
}