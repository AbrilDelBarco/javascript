let nombre = prompt ("Por favor, ingrese su nombre y apellido")
alert ("Hola" + " " + nombre)

let terapia = prompt ("Que tipo de terapia desea agendar? Le recordamos que disponemos terapias de, (barras, imanes, psicoanaliticas, conductuales, gestalticas)")
while (terapia != "Barras"){
    switch(terapia){
        case "imanes":
            let imanes = prompt("Turno disponible lunes 8hs hs o viernes 19hs hs, escoja un horario.").toLowerCase()
            while(imanes != "agendado"){
                alert("te esperamos! porfavor respete el horario escogido")
                imanes =prompt("Turno disponible lunes 8hs hs o viernes 19hs hs, escoja un horario.").toLowerCase()
            }
            break
        case "psicoanaliticas":
            let psicoanaliticas = prompt("Turno disponible martes 9hs hs o viernes 20 hs, escoja un horario.").toLowerCase()    
            while(psicoanaliticas != "agendado!"){
                alert("te esperamos! porfavor respete el horario escogido")
                psicoanaliticas =prompt("Turno disponible martes 9hs hs o viernes 20 hs, escoja un horario.").toLowerCase()
            }
            break
        case "conductuales":
            let conductuales = prompt("Turno disponible miercoles 10hs o jueves 13hs").toLowerCase()
            while(conductuales != "agendado!"){
                alert("te esperamos! porfavor respete el horario escogido")
                conductuales =prompt("Turno disponible miercoles 10hs o jueves 13hs").toLowerCase()
            }
            break
        case "gestalticas":
            let gestalticas =prompt("Turno disponible miercoles 11hs o jueves 15hs").toLowerCase()
            while(gestalticas != "agendado!"){
                alert("te esperamos! porfavor respete el horario escogido")
                gestalticas =prompt("Turno disponible miercoles 11hs o jueves 15hs").toLowerCase()
            }
            break
        default:
            alert("La terapia ingresada no existe")
            break
    }
    terapia = prompt ("Que tipo de terapia desea agendar? Le recordamos que disponemos terapias de barras, imanes, psicoanaliticas, conductuales, gestalticas")
 }
alert ("Actualmente no hay turnos disponibles en barras, disculpe.")
