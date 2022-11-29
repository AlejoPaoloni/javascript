let misCompras = []

let autos = [{
        id: 1,
        modelo: "FORD Fiesta ST",
        año: "2022",
        precio: "$3.900.000",
        img: "https://1.bp.blogspot.com/-zDNFwQ6oGPI/WMLmkXIJ5bI/AAAAAAAAUOo/ztZpy19rxCE64zWinDpn0Srhce7nFqaSQCLcB/s1600/ford-fiesta-gris-magnetic-2017.png",
        disponible: true,
    },
    {
        id: 2,
        modelo: "CHEVROLET Cruze LI",
        año: "2022",
        precio: "$5.200.000",
        img: "https://secure-developments.com/commonwealth/argentina/gm_specs/uploads/byo-cruze-sedan-lt-cinza-satin-steel_1634661278.png",
        disponible: true,
    },
    {
        id: 3,
        modelo: "VOLKSWAGEN Golf GTI",
        año: "2022",
        precio: "$5.400.000",
        img: "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/cr/model-years/11653-2022-volkswagen-gti",
        disponible: true,
    },
    {
        id: 4,
        modelo: "FORD Ranger RAPTOR",
        año: "2022",
        precio: "$7.500.000",
        img: "https://www.pngplay.com/wp-content/uploads/13/Ford-Ranger-Raptor-PNG-Clipart-Background.png",
        disponible: false,
    },
    {
        id: 5,
        modelo: "FIAT Cronos HGT",
        año: "2022",
        precio: "$4.200.000",
        img: "https://www.carone.com.ar/wp-content/uploads/2022/01/fiat-Cronos-Presicion.png",
        disponible: true,
    },
];

let html = ""

autos.forEach(el => {
    const classCard = el.disponible ? "card" : "redCard"
    html += `
        <div class= ${classCard} >
            <img src= ${el.img} class= "img" />
            <ul class= "list">
                <hr />
                <br />
                <li>
                    <p>
                        <b>
                            ${el.modelo}
                        </b>
                    </p>    
                </li>
                <li>
                    <p>
                        <b>
                            ${el.año}
                        </b>
                    </p>    
                </li>
                <li>
                    <p>
                        <b>
                            ${el.precio}
                        </b>
                    </p>    
                </li>
            </ul>
            <button id= ${el.id} class= "button" onclick=agregarAlCarrito(${el.id})>Agregar al carrito</button>
            <button id= ${el.id} class= "button" onclick=eliminarDelCarrito(${el.id})>Eliminar del carrito</button>
        </div>
`
});

document.getElementById('container').innerHTML = html

function agregarAlCarrito(idAAgregar) {

    localStorage.getItem("Lista:") ? misCompras = JSON.parse(localStorage.getItem("Lista:")) : misCompras = []

    let revisionDeDisponibilidad = autos.find(el => el.id === idAAgregar)
    if (revisionDeDisponibilidad.disponible) {

        if (!misCompras.some(el => el.id === idAAgregar)) {
            let vehiculo = autos.find(el => el.id === idAAgregar)
            misCompras.push(vehiculo)
            localStorage.setItem("Lista:", JSON.stringify(misCompras))
            alert("Agregaste con éxito el vehículo a tu carrito: " + vehiculo.modelo + " " + vehiculo.año) 
        }
    } 
    else {
        alert("No está disponible en este momento el vehículo seleccionado")
    }
};

function eliminarDelCarrito(idAEliminar) {

    localStorage.getItem("Lista:") ? misCompras = JSON.parse(localStorage.getItem("Lista:")) : misCompras = []

    let revisionDeDisponibilidad = autos.find(el => el.id === idAEliminar)

    if (revisionDeDisponibilidad.disponible) {
        if (misCompras.some(el => el.id === idAEliminar)) {
            misCompras = misCompras.filter(el => el.id !== idAEliminar)
            localStorage.setItem("Lista:", JSON.stringify(misCompras))
            alert("Eliminaste con éxito el vehículo de tu carrito: " + revisionDeDisponibilidad.modelo + " " + revisionDeDisponibilidad.año) 
        }
        else {
            alert("No podes eliminar del carrito sin agregarlo")
        }
    }
    else {
        alert("No podes eliminar del carrito un vehículo no disponible")
    }
};

function verCarrito() {
    let mensaje = "Tus vehículos agregados son: " + "\n"
    misCompras.forEach(el => {
        mensaje += "-" + el.modelo + " " + el.año + "\n"
    })

    if (misCompras.length > 0) {
        alert(mensaje)
    }
    else {
        alert("No hay ningun vehículo agregado a tu carrito")
    }
}