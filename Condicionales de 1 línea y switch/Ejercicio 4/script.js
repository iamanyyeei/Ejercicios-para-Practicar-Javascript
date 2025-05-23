/*
/*

En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.

Por ejemplo he pedido carne, el ejercicio mostrará "¿Desea beber vino tinto?"

*/

let menu = "";

menu = prompt("¿Qué desea comer? Puede elegir entre 'carne', 'pescado' o 'verdura'");

switch (menu){
    case "carne":
        alert("¿Desea beber vino tinto?");
        break;
    case "pescado":
        alert("¿Desea beber vino blanco?");
        break;
    case "verdura":
        alert("¿Desea beber agua?");
        break;
    default:
        alert("Diculpe, esa opción no está incluida en el menú de hoy");
}
