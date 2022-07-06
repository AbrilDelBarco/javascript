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
            alert("La terapia ingresada no existe, recuerde que puede colocar 'salir' para finalizar").toLowerCase()
            break
    }
    terapia = prompt ("Que tipo de terapia desea agendar? Le recordamos que disponemos terapias de, (barras, imanes, psicoanaliticas, conductuales, gestalticas) Para terminar coloque 'salir' ").toLocaleLowerCase()
 }
 alert ("Usted puede pagar una terapia de forma semestral en la cual recibira un descuento ya que, cada sesion tendra un valor de $1500 es decir un 30% menos del valor actual de la sesion").toLocaleLowerCase()
 alert("El valor semestral actual es de $36000 y puede variar el costo con tarjetas de credito pudiendo ser financiadas en hasta 12 cuotas, de contado serian " + " " + cuota(36000,15,12))
 function cuota (credito, interes, meses){
     let cuota = credito *(1 + interes/100)/meses
     return cuota
 }
 console.log(calcInteres ("macro"))
 function calcInteres (banco){
     switch(banco){
         case "bbva":
            return 25
         case "hsvc":
             return 23
         case "santander" :
             return 22
         default :
         return 0
     }
 }
 function mostrar (banco, credito, interes, cuota,meses){
    console.log(`el credito del banco ${banco} es de ${credito} con un interes de ${interes} a pagar en cuotas de ${cuota} durante ${meses}`)
 }
