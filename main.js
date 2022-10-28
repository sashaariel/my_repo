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
[{ id: 1, producto: "Conjunto rosado", precio: 2590 },
{ id: 2, producto: "Corpiño nude", precio: 2.590 },
{ id: 3, producto: "Bombacha fitness", precio: 1.200 },
{ id: 4, producto: "Conjunto de diario", precio: 2150 },
{ id: 6, producto: "Conjunto blanco", precio: 3990},
{ id: 7, producto: "Conjunto negro", precio: 1345},
{ id: 8, producto: "Bombachas comodas", precio: 2350},
{ id: 9, producto: "conjunto formal", precio: 2300},
{ id: 9, producto: "conjunto rojo", precio: 2450}
];

const remeras =
[
    { id: 1, producto: "Remera Jesi", precio: 1990 },
    { id: 2, producto: "Remera Meil", precio: 2590 },
    { id: 3, producto: "Remera Neibiry", precio: 3990 },
    { id: 4, producto: "Remera Any", precio: 3200 },
    { id: 5, producto: "Remera Paula", precio: 2150 },
    { id: 6, producto: "Remera Brisa", precio: 3990 }
    
]

const pantalones =
[
    { id: 1, producto: "Jogger Negro Vespertine", precio: 4819 },
    { id: 2, producto: "Kill Polita", precio: 13200 },
    { id: 3, producto: "Pantalón Terranova Etam", precio: 9950 },
    { id: 4, producto: "Palazzo Negro Destino Collection", precio: 5945 },
    { id: 5, producto: "Pantalon Oliva Wanada", precio: 49990 },
    { id: 6, producto: "Babucha Coral Wanada", precio: 33990 }
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


// Carrusel 

document.getElementById ("flecha2").addEventListener ("click", mover_items);

document.getElementById ("ConteItemsCarrusel");
flechas_carrusel = document.getElementsByClassName ("flechaCarrusel");
item_1 = document.getElementsByClassName ("promociones");
item_2 = document.getElementsByClassName ("nuevaTemporada");

function mover_items () {
   item_2
}
