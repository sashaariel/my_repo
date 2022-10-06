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

// animacion menu hamburguesa

   document.querySelector(".bars__menu").addEventListener("click", animateBars);

   let line1__bars = document.querySelector(".line1__bars-menu");
   let line2__bars = document.querySelector(".line2__bars-menu");
   let line3__bars = document.querySelector(".line3__bars-menu");
   
   function animateBars(){
       line1__bars.classList.toggle("activeline1__bars-menu");
       line2__bars.classList.toggle("activeline2__bars-menu");
       line3__bars.classList.toggle("activeline3__bars-menu");
       
   }
 