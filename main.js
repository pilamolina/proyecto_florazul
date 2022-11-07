

let fechaLlegada;
let fechaSalida;
let cabaña;
let buscarDisponibilidad;


function reserva (primerafecha,segundafecha){
    alert ("Estamos buscando disponibilidad para las fechas entre "+primerafecha+" y "+segundafecha);
}

while (buscarDisponibilidad!== "N") {
    buscarDisponibilidad = prompt ("¿Desea buscar disponibilidad en Flor Azul? (S/N)");
    console.log (buscarDisponibilidad);
        if  (buscarDisponibilidad==="S") 
        {
            fechaLlegada = prompt ("Ingrese su fecha de llegada");
            console.log (fechaLlegada);
            fechaSalida = prompt ("Ingrese su fecha de salida");
            console.log (fechaSalida);
            cabaña = prompt ("Seleccione una cabaña");
            console.log (cabaña)
            
            if  ((fechaLlegada===0) || (fechaSalida===0) || (cabaña===0)) 
            {
                alert ("Debe completar todos los campos para que podamos verificar disponibilidad");
            } 
            else if (fechaLlegada>=fechaSalida) 
            {
                alert ("Por favor seleccione una fecha de salida posterior a la de llegada");
            }
            else    
            {
            reserva(fechaLlegada,fechaSalida);
            }
        }
    else if  (buscarDisponibilidad==="N") 
    {
        alert ("Hasta pronto!");
    }
    else 
    {
        alert ("Por favor ingrese S (si quiere buscar disponibilidad) o N (si no quiere buscar disponibilidad)");
    };
}

