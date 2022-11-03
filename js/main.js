/*
 AUTO
 Compra tu Volkswagen GOLF 0KM:
 1 cuota: $5.300.000
 6 cuotas + 15% interes
 12 cuotas + 30% interes
 18 cuotas + 50% interes
 */

 let autoPrecio = 5300000;
 let modelo = "Volkswagen Golf GTI 2022";
 alert("Comprá tu" + " " + modelo + " " + "0KM");
 let cuotas = parseInt(prompt("Ingrese cantidad de cuotas: 1, 6, 12 o 18"));
 let = cantidadCuotas = cuotas;
 
 console.log("Volkswagen Golf 0KM");

 do {
    if (cantidadCuotas == 1) {
        console.log("El precio final es $" + autoPrecio);
    }
    else if (cantidadCuotas == 6) {
        console.log("El precio final es $" + autoPrecio * 1.15);
    }
    else if (cantidadCuotas == 12) {
        console.log("El precio final es $" + autoPrecio * 1.30);
    }
    else if (cantidadCuotas == 18) {
        console.log("El precio final es $" + autoPrecio * 1.50);
    }
    else{
        alert("Ingrese una cuota válida")
    }
    break;
 }
 
 while (cuotas == 1 || cuotas == 6 || cuotas == 12 || cuotas == 18);
