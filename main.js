// Prompt

let nombreingresado = prompt("ingrese su nombre")
var blanco = " "
if (nombreingresado != "") {
    alert("Hola" + blanco + nombreingresado + ", bienvenidx a Hera");
}
else {
    alert("Ingresa un Nombre")
}

//Operacion y calculo de N° de Orden de Compra

for (let i = 1; i <= 3; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Tu número de orden de compra es " + i + ", Nombre: " + ingresarNombre);
}


//   Calcular precio

// busqueda de productos

const ropaInterior = 
[{ id: 1, producto: "Bombacha", precio: 125 },
{ id: 2, producto: "Corpiño", precio: 70 },
{ id: 3, producto: "", precio: 50 },
{ id: 4, producto: "Flan", precio: 100 }];

const buscarPan = ropaInterior.find(producto => producto.id === 3);
console.log(buscarPan)


