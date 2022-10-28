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
[{ id: 1, producto: "Conjunto rosado", precio: 125 },
{ id: 2, producto: "Corpiño nude", precio: 70 },
{ id: 3, producto: "Bombacha fitness", precio: 50 },
{ id: 4, producto: "Conjunto de diario", precio: 100 },
{ id: 6, producto: "Conjunto blanco", precio: 100},
{ id: 7, producto: "Conjunto negro", precio: 100},
{ id: 8, producto: "Bombachas comodas", precio: 100},
{ id: 9, producto: "conjunto formal", precio: 100}
];

const remeras =
[
    { id: 1, producto: "Remera Jesi", precio: 2000 },
    { id: 2, producto: "Remera Meil", precio: 2000 },
    { id: 3, producto: "Remera Neibiry", precio: 2000 },
    { id: 4, producto: "Remera Any", precio: 2000 },
    { id: 5, producto: "Remera Paula", precio: 2000 },
    { id: 6, producto: "Remera Brisa", precio: 2000 }
    
]

const pantalones =
[
    { id: 1, producto: "Jogger Negro Vespertine", precio: 2000 },
    { id: 2, producto: "Kill Polita", precio: 2000 },
    { id: 3, producto: "Pantalón Terranova Etam", precio: 2000 },
    { id: 4, producto: "Palazzo Negro Destino Collection", precio: 2000 },
    { id: 5, producto: "Pantalon Oliva Wanada", precio: 2000 },
    { id: 6, producto: "Babucha Coral Wanada", precio: 2000 }
]

const buscaropaInterior = ropaInterior.find(producto => producto.id === 3);
console.log(buscaropaInterior)

// Array 

var d=new Date();
var dia=new Array(7);
dia[0]="Domingo";
dia[1]="Lunes";
dia[2]="Martes";
dia[3]="Miercoles";
dia[4]="Jueves";
dia[5]="Viernes";
dia[6]="Sabado";
document.write("Hoy es: " + dia[d.getDay()]);


