// Prompt


// let nombreingresado = prompt("ingrese su nombre")
// var blanco = " "
// if (nombreingresado != "") {
//     alert("Hola" + blanco + nombreingresado + ", bienvenidx a Hera");
// }
// else {
//     alert("Ingresa un Nombre")
// }

// //Operacion y calculo de N° de Orden de Compra

// for (let i = 1; i <= 3; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre");
//     // Informamos el turno asignado usando el número de repetición (i).
//     alert(" Tu número de orden de compra es " + i + ", Nombre: " + ingresarNombre);
// }



//BUSCADOR DE CONTENIDO

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-search").addEventListener("click", ocultar_buscador)

let bars_search = document.getElementById("ctn-bar-search");
cover_ctn_search = document.getElementById ("cover-search");
inputSearch = document.getElementById ("inputsearch");
box_search = document.getElementById ("box-search");

function mostrar_buscador(){

    bars_search.style.top= "-10px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
 
}

function ocultar_buscador(){

    bars_search.style.top = "-80px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none"
}

document.getElementById("inputsearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){

    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //para que recorra y filtre con los li

    for (i = 0; i < li.length; i++ ){

        a = li[i].getElementsByTagName("a")[0];

        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
            box_search.style.display = "block";
            if (inputSearch.value === ""){
                box_search.style.display= "none"
            }
        }
        else{

            li[i].style.display = "none";
        }
    }

}



// Carrusel 

document.getElementsById("flecha1").addEventListener("click", mostrar_items)
document.getElementsById("flecha2").addEventListener("click", mostrar_items)

let flechas_carrusel = document.getElementsByClassName ("flechaCarrusel");
flechad = document.getElementById("flecha1");
flechai = document.getElementById("flecha2");
item_1 = document.getElementsByClassName("promociones");
item_2 = document.getElementsByClassName("nuevaTemporada");


function mostrar_items() {
    item_2

}

// Fromulario de inscripción de emprendimientos

