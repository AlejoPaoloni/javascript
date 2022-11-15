const autos = [
    { modelo: "Ford Fiesta", precio: 3900000 },
    { modelo: "Chevrolet Cruze", precio: 5200000 },
    { modelo: "Volkswagen Golf", precio: 5400000 },
    { modelo: "Ford Ranger", precio: 7500000 },
    { modelo: "Fiat Cronos", precio: 4200000 },
];

let carrito = []

alert("¡Comprá tu auto 0km!");
let seleccionarAuto = prompt ("Ingrese (x) para ver nuestros modelos y precios")

while (seleccionarAuto != "x" && seleccionarAuto != "si" && seleccionarAuto != "no"){
    alert("Por favor ingrese x para ver los vehículos")
    seleccionarAuto = prompt("¡Hola! Desea comprar SI o NO")
}

if (seleccionarAuto == "x"){
    alert("A continuación nuestros modelos y precios")
    let todoslosAutos = autos.map(
        (auto) => auto.modelo + " " + "$" + auto.precio);
    alert(todoslosAutos.join(" - "))
}
 else if (seleccionarAuto == "si"){
    alert("A continuación nuestros modelos y precios")
    let todoslosAutos = autos.map(
        (auto) => auto.modelo + " " + "$" + auto.precio);
    alert(todoslosAutos.join(" - "))
}
else if (seleccionarAuto == "no"){
    alert("¡Gracias por pasarte! Hasta pronto")
}

while (seleccionarAuto != "no") {
    let auto  = prompt("Agrega un vehículo a tu carrito")
    let precio = 0

    if (auto == "ford fiesta" || auto == "chevrolet cruze" || auto == "volkswagen golf" || auto == "ford ranger" || auto == "fiat cronos") {
        switch (auto) {
            case "ford fiesta":
                precio = 3900000;
                break;
            case "chevrolet cruze":
                precio = 5200000;
                break;
            case "volkswagen golf":
                precio = 5400000;
                break;
            case "ford ranger":
                precio = 7500000;
                break;
            case "fiat cronos":
                precio = 4200000;
                break;
                default:
                break;
        }

        let unidades = parseInt(prompt("¿Cuantos vehículos desea llevar?"))

        carrito.push({auto, unidades, precio})
        console.log(carrito)
    } else {
        alert("No tenemos ese vehículo") 
    }

    seleccionarAuto = prompt("¿Desea seguir comprando?")

    while (seleccionarAuto === "no") {
        alert("¡Gracias por la compra! Hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`Vehículo: ${carritoFinal.auto}, Unidades: ${carritoFinal.unidades}, Total a pagar por vehículo: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)
