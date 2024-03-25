function QueDiaDeLaSemanaEs(numeroDeDia){
    switch(numeroDeDia){
        case 1:
            console.log("Hoy es lunes!!!")
            break;
        case 2:
            console.log("Hoy es martes!!!")
            break;
        case 3:
            console.log("Hoy es miercoles!!!")
            break;
        case 4:
            console.log("Hoy es Jueves!!!")
        case 5:
            console.log("Hoy es viernes!!!")
            break;
        case 6:
            console.log("Hoy es Sabado!!!")
            break;
        case 7:
            console.log("Hoy es domingo!!!")
            break;
        default:
            console.log("Dia invalido")

        }
}

QueDiaDeLaSemanaEs(6);