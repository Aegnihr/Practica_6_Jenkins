$(document).ready(() => {
    init()
});

var sneakers_json;

function init() {
    $.getJSON('/pantallaPrincipal/JSON/sneakers.json', function (data) {
        var dataset = data.sneakers;
        sneakers_json = data.sneakers;
        pintarSneakersNovedades(dataset);
    });
}

function pintarSneakersNovedades(sneakers_json) {
    var contendor_sneakers = $(".sneakers");
    $(contendor_sneakers).empty()

    sneakers_json.forEach(function (sneaker) {
        if (sneaker.novedades == "si") {
            var div_sneaker = $("<div>").addClass("col-xxl-4 col-md-12 col-12 sneakers_novedades").html(`
            <div class="container sneaker-image">
                <div class = "row"> 
                    <img src="${sneaker.imagen}" alt="${sneaker.nombre}" width="400px">
                    <h3 class="sneaker-title">
                        ${sneaker.nombre}
                    </h3>
                    <h4 class= "sneaker-price">
                    ${sneaker.precio}€
                    </h4>
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-xxl-8 d-flex justify-content-end btn-group dropstart">
                                <button type="button" id="añadir_al_carrito" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Detalles
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" >${sneaker.marca}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.talla}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.color}</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-xxl-3 d-flex justify-content-end">
                                <button id="añadir_al_carrito" onclick = "añadirCarrito(this)">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
            $(div_sneaker).appendTo(contendor_sneakers)
        }

    });
}

function pintarSneakerRunning(sneakers_json) {
    var contendor_sneakers = $(".sneakers");
    $(contendor_sneakers).empty()

    sneakers_json.forEach(function (sneaker) {
        if (sneaker.tipo == "Running") {
            var div_sneaker = $("<div>").addClass("col-xxl-4 col-md-6 col-6 senakers_running").html(`
            <div class="container sneaker-image">
                <div class = "row"> 
                    <img src="${sneaker.imagen}" alt="${sneaker.nombre}" width="400px">
                    <h3 class="sneaker-title">
                        ${sneaker.nombre}
                    </h3>
                    <h4 class= "sneaker-price">
                    ${sneaker.precio}€
                    </h4>
                    <div class="row">
                            <div class="col-12 col-xxl-8 d-flex justify-content-end btn-group dropstart">
                                <button type="button" id="añadir_al_carrito" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Detalles
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" >${sneaker.marca}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.talla}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.color}</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-xxl-3 d-flex justify-content-end">
                                <button id="añadir_al_carrito" onclick = "añadirCarrito(this)">Añadir al carrito</button>
                            </div>
                        </div>
                </div>
            </div>
        `);
            $(div_sneaker).appendTo(contendor_sneakers)
        }

    });
}

function pintarSneakerBasket(sneakers_json) {
    var contendor_sneakers = $(".sneakers");
    $(contendor_sneakers).empty()

    sneakers_json.forEach(function (sneaker) {
        if (sneaker.tipo == "Basket") {
            var div_sneaker = $("<div>").addClass("col-xxl-4 col-md-6 col-6 senakers_basket").html(`
            <div class="container sneaker-image">
                <div class = "row"> 
                    <img src="${sneaker.imagen}" alt="${sneaker.nombre}" width="400px">
                    <h3 class="sneaker-title">
                        ${sneaker.nombre}
                    </h3>
                    <h4 class= "sneaker-price">
                    ${sneaker.precio}€
                    </h4>
                    <div class="row">
                            <div class="col-12 col-xxl-8 d-flex justify-content-end btn-group dropstart">
                                <button type="button" id="añadir_al_carrito" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Detalles
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" >${sneaker.marca}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.talla}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.color}</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-xxl-3 d-flex justify-content-end">
                                <button id="añadir_al_carrito" onclick = "añadirCarrito(this)">Añadir al carrito</button>
                            </div>
                        </div>
                </div>
            </div>
        `);
            $(div_sneaker).appendTo(contendor_sneakers)
        }

    });
}

function pintarSneakerMontaña(sneakers_json) {
    var contendor_sneakers = $(".sneakers");
    $(contendor_sneakers).empty()

    sneakers_json.forEach(function (sneaker) {
        if (sneaker.tipo == "Montaña") {
            var div_sneaker = $("<div>").addClass("col-xxl-4 col-md-6 col-6 senakers_mountain").html(`
            <div class="container sneaker-image">
                <div class = "row"> 
                    <img src="${sneaker.imagen}" alt="${sneaker.nombre}" width="400px">
                    <h3 class="sneaker-title">
                        ${sneaker.nombre}
                    </h3>
                    <h4 class= "sneaker-price">
                    ${sneaker.precio}€
                    </h4>
                    <div class="row">
                            <div class="col-12 col-xxl-8 d-flex justify-content-end btn-group dropstart">
                                <button type="button" id="añadir_al_carrito" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Detalles
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" >${sneaker.marca}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.talla}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.color}</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-xxl-3 d-flex justify-content-end">
                                <button id="añadir_al_carrito" onclick = "añadirCarrito(this)">Añadir al carrito</button>
                            </div>
                        </div>
                </div>
            </div>
        `);
            $(div_sneaker).appendTo(contendor_sneakers)
        }

    });
}

function buscar() {
    var contendor_sneakers = $(".sneakers");
    $(contendor_sneakers).empty()

    var encontrado = false;
    var busqueda = $("#searchInput").val();

    $.each(sneakers_json, function (index, sneaker) {
        if (sneaker.nombre.includes(busqueda)) {
            var div_sneaker = $("<div>").addClass("col-xxl-4 col-md-6 col-6 senakers_searched").html(`
            <div class="container sneaker-image">
                <div class = "row"> 
                    <img src="${sneaker.imagen}" alt="${sneaker.nombre}" width="400px">
                    <h3 class="sneaker-title">
                        ${sneaker.nombre}
                    </h3>
                    <h4 class= "sneaker-price">
                    ${sneaker.precio}€
                    </h4>
                    <div class="row">
                            <div class="col-12 col-xxl-8 d-flex justify-content-end btn-group dropstart">
                                <button type="button" id="añadir_al_carrito" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Detalles
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" >${sneaker.marca}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.talla}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.color}</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-xxl-3 d-flex justify-content-end">
                                <button id="añadir_al_carrito" onclick = "añadirCarrito(this)">Añadir al carrito</button>
                            </div>
                        </div>
                </div>
            </div>
        `);
            $(div_sneaker).appendTo(contendor_sneakers)
            encontrado = true
        }
    });

    if (!encontrado) {
        var div_sneaker = $("<div>").addClass("col-xxl-4 col-md-6 col-6 senakers_searched").html(`
        <div class="container sneaker-image">
        <div class = "row"> 
            <div class="notFound">
                <h2>
                EL PRODUCTO BUSCADO NO EXISTE
                </h2>
            </div>
        </div>
    </div>
        `);
        $(div_sneaker).appendTo(contendor_sneakers)
    }
}

function ordenMayor_a_Menor(sneakers_json) {
    sneakers_json.sort(function (a, b) {
        return b.precio - a.precio;
    });

    var contendor_sneakers = $(".sneakers");
    contendor_sneakers.empty();

    $.each(sneakers_json, function (index, sneaker) {
        var div_sneaker = $("<div>").addClass("col-xxl-4 col-md-6 col-6 senakers_mountain").html(`
        <div class="container sneaker-image">
        <div class = "row"> 
            <img src="${sneaker.imagen}" alt="${sneaker.nombre}" width="400px">
            <h3 class="sneaker-title">
                ${sneaker.nombre}
            </h3>
            <h4 class= "sneaker-price">
            ${sneaker.precio}€
            </h4>
            <div class="row">
                            <div class="col-12 col-xxl-8 d-flex justify-content-end btn-group dropstart">
                                <button type="button" id="añadir_al_carrito" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Detalles
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" >${sneaker.marca}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.talla}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.color}</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-xxl-3 d-flex justify-content-end">
                                <button id="añadir_al_carrito" onclick = "añadirCarrito(this)">Añadir al carrito</button>
                            </div>
                        </div>
        </div>
    </div>
        `);
        $(div_sneaker).appendTo(contendor_sneakers);
    });
}

function ordenMenor_a_Mayor(sneakers_json) {
    sneakers_json.sort(function (a, b) {
        return a.precio - b.precio;
    });

    var contendor_sneakers = $(".sneakers");
    contendor_sneakers.empty();

    $.each(sneakers_json, function (index, sneaker) {
        var div_sneaker = $("<div>").addClass("col-xxl-4 col-md-6 col-6 senakers_mountain").html(`
            <div class="container sneaker-image">
                <div class = "row"> 
                    <img src="${sneaker.imagen}" alt="${sneaker.nombre}" width="400px">
                    <h3 class="sneaker-title">
                        ${sneaker.nombre}
                    </h3>
                    <h4 class= "sneaker-price">
                    ${sneaker.precio}€
                    </h4>
                    <div class="row">
                            <div class="col-12 col-xxl-8 d-flex justify-content-end btn-group dropstart">
                                <button type="button" id="añadir_al_carrito" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Detalles
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" >${sneaker.marca}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.talla}</a></li>
                                    <li><a class="dropdown-item" >${sneaker.color}</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-xxl-3 d-flex justify-content-end">
                                <button id="añadir_al_carrito" onclick = "añadirCarrito(this)">Añadir al carrito</button>
                            </div>
                        </div>
                </div>
            </div>
        `);
        $(div_sneaker).appendTo(contendor_sneakers);
    });
}

function añadirCarrito(button) {
    var contenedorSneaker = $(button).closest(".sneaker-image");
    var nombre = contenedorSneaker.find(".sneaker-title").text();
    var precioTexto = contenedorSneaker.find(".sneaker-price").text();

    contenedor_listaCompra = $("#listaCompra");

    var table_listaCompra = $("<table>").addClass("tablaProductosCarrito").html(`
    <tr id="sneakerCarrito">
        <td id="nombre">${nombre} - </td>
        <td id="precio"> ${precioTexto}</td>
        <td><button id="eliminarUnidad" onclick="borrarUnidad(this)")>X</button><td>
    </tr>
    `);

    contenedor_listaCompra.append(table_listaCompra);
}

function borraCarrito (){
    var contenedor_listaCompra = $("#listaCompra");
    contenedor_listaCompra.empty()
}

function comprarCarrito(){
    
}

function borrarUnidad(button){
    var sneakerCarrito = $(button).closest(".sneakerCarrito");
    sneakerCarrito.empty()
}
