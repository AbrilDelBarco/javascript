let nombre = prompt ("Por favor, ingrese su nombre y apellido")
alert ("Hola" + " " + nombre)

let terapia = prompt ("Que tipo de terapia desea agendar? Le recordamos que disponemos terapias de, (barras, imanes, psicoanaliticas, conductuales, gestalticas) Para terminar coloque 'salir' ")
while (terapia != "salir"){
    switch(terapia){
        case "barras":
            let barras = prompt("Turno disponible lunes 8hs hs o viernes 19hs hs, escoja un horario.").toLowerCase()
            while(barras == ""){
                barras =prompt("Turno disponible lunes 8hs hs o viernes 19hs hs, escoja un horario.").toLowerCase()
            }
            alert ("te esperamos! porfavor respete el horario escogido")
            break
        case "imanes":
            let imanes = prompt("Turno disponible lunes 8hs hs o viernes 19hs hs, escoja un horario.").toLowerCase()
            while(imanes == ""){
                imanes =prompt("Turno disponible lunes 8hs hs o viernes 19hs hs, escoja un horario.").toLowerCase()
            }
            alert ("te esperamos! porfavor respete el horario escogido")
            break
        case "psicoanaliticas":
            let psicoanaliticas = prompt("Turno disponible martes 9hs hs o viernes 20 hs, escoja un horario.").toLowerCase()    
            while(psicoanaliticas ==""){
                psicoanaliticas =prompt("Turno disponible martes 9hs hs o viernes 20 hs, escoja un horario.").toLowerCase()
            }
            alert("te esperamos! porfavor respete el horario escogido")
            break
        case "conductuales":
            let conductuales = prompt("Turno disponible miercoles 10hs o jueves 13hs").toLowerCase()
            while(conductuales == ""){
                conductuales =prompt("Turno disponible miercoles 10hs o jueves 13hs").toLowerCase()
            }
            alert("te esperamos! porfavor respete el horario escogido")
            break
        case "gestalticas":
            let gestalticas =prompt("Turno disponible miercoles 11hs o jueves 15hs").toLowerCase()
            while(gestalticas == ""){
                gestalticas =prompt("Turno disponible miercoles 11hs o jueves 15hs").toLowerCase()
            }
            alert("te esperamos! porfavor respete el horario escogido")
            break
        default:
            alert("La terapia ingresada no existe, recuerde que puede colocar 'salir' para finalizar")
            break
    }
    terapia = prompt ("Que tipo de terapia desea agendar? Le recordamos que disponemos terapias de, (barras, imanes, psicoanaliticas, conductuales, gestalticas) Para terminar coloque 'salir' ")
 }
 alert ("Usted puede pagar una terapia de forma semestral en la cual recibira un descuento ya que, cada sesion tendra un valor de $1500 es decir un 30% menos del valor actual de la sesion")
 alert("El valor semestral actual es de $36000 y puede variar el costo con tarjetas de credito pudiendo ser financiadas en hasta 12 cuotas, de contado serian " + " " + cuota(36000,15,12))
 function cuota (credito, interes, meses){
     let cuota = credito *(1 + interes/100)/meses
     return cuota
 }
 console.log(calcInteres ("macro"))
 function calcInteres (banco){
     switch(banco){
         case "bvva":
            return 25
         case "HSBC":
             return 23
         case "santander" :
             return 22
         default :
         return 0
     }
 }
 function mostrar (banco, credito, interes, cuota,meses){
    document.writ(`el credito del banco ${banco} es de ${credito} con un interes de ${interes} a pagar en cuotas de ${cuota} durante ${meses}`)
 }

 class Producto {
    objeto (nombre, precio) {
        this.nombre = nombre.toUppercase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
 }
 const productos = [];
 productos.push (new Producto ("padecientes", "3500"));
 productos.push (new Producto ("el lado b del amor", "4200"));
 productos.push(new Producto("el precio de la pasion", "4100"));

 for (const producto of producto )
 producto.sumaIva();

 alert ("le recordamos que por ser pasiente puede llevarse uno de los libros del salon, aceptamos todos los medios de pago, recuerde que abonando en un solo pago en efectivo o por transferencia bancaria usted tendra un 15% de descuento sobre el valor final del libro + iva.")
let ofertas = prompt ("Si desea uno de los libros indique cual (padecientes, palabras cruzadas, el precio de la pasion)si no esta interesado en ninguno simplemente coloque salir")

 while (terapia != "salir"){
    switch(terapia){
        case "padecientes":
            let padecientes = prompt("El valor del libro es de 3500 +  iva.").toLowerCase()
            while(padecientes == ""){
                padecientes = prompt("El valor del libro es de 3500 +  iva.").toLowerCase()
            }
            alert ("El dia de su sesion dirijase a administracion y sera dado su libro y realizada la transaccion de su pago.")
            break
            case "palabras cruzadas":
                let palabras_cruzadas = prompt("El valor del libro es de 3500 +  iva.").toLowerCase()
                while(palabras_cruzadas == ""){
                    palabras_cruzadas = prompt("El valor del libro es de 4200 +  iva.").toLowerCase()
                }
                alert ("El dia de su sesion dirijase a administracion y sera dado su libro y realizada la transaccion de su pago.")
                break
                case "el precio de la pasion":
                    let el_precio_de_la_pasion = prompt("El valor del libro es de 3500 +  iva.").toLowerCase()
                    while(el_precio_de_la_pasion == ""){
                        el_precio_de_la_pasion = prompt("El valor del libro es de 4100 +  iva.").toLowerCase()
                    }
                    alert ("El dia de su sesion dirijase a administracion y sera dado su libro y realizada la transaccion de su pago.")
                    break
        }
    }