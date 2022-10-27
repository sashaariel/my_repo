// Prompt

let nombreingresado = prompt ("ingrese su nombre")
var blanco = " "
if (nombreingresado != ""){
alert ("Hola" + blanco + nombreingresado + ", bienvenidx a Hera" );}
else {
    alert ( "Ingresa un Nombre")
}

//Operacion y calculo de N° de Orden de Compra

for (let i = 1; i <= 3; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Tu número de orden de compra es "+i+", Nombre: "+ingresarNombre);
   }


   console.log(13 % 5)