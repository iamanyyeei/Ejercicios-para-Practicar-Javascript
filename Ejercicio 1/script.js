/*
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

Precio 200€

Iva: 21%

El total son 242 €.  //200 + 21*200/100
*/

let price = 200;
const ivaPercentage = 21;

function calculateFinalPrice(price, ivaPercentage){

    let iva = (ivaPercentage * price) / 100;
    let finalPrice = price + iva;
    console.log(`El precio final es: ${finalPrice}€`);
    return;
}

calculateFinalPrice(price,ivaPercentage);