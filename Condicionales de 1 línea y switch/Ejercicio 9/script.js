/*

Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 400 euros le descuenta un 15%

Es decir: hago una compra de 150 euros pago 150 - 5% de 150, o sea 142,5 euros
*/

let compra = 0;

compra = parseInt(prompt("Indica el total de la compra:"));

switch(true){
    case (compra < 100 && compra !== 0):
        alert(`No aplica para descuento. Total: ${compra} euros`);
        break;
    case (compra >= 100 && compra < 300):
        alert(`Aplica para 5% de descuento. Total ahora: ${compra - (0.05 * compra)} euros`);
        break;
    case (compra >= 300 && compra < 400):
        alert(`Aplica para 10% de descuento. Total ahora: ${compra - (0.10 * compra)} euros`);
        break;
    case (compra >= 400):
        alert(`Aplica para 15% de descuento. Total ahora: ${compra - (0.15 * compra)} euros`);
        break;
    default:
        alert("Revisa el monto de la compra");
        break;
}