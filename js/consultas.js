 
//Creo la clase para las consultas
class consulta {
    constructor (nombre, correo, mensaje, numeroMensaje) {
        this.nombre = nombre;
        this.correo = correo;
        this.mensaje = mensaje; 
        this.numeroMensaje = numeroMensaje;
    }
}

//Creo array 

let arrayConsulta = []

if (localStorage.getItem("arrayConsulta")) {
    arrayConsulta = JSON.parse(localStorage.getItem("arrayConsulta"));
}

//Creo variable contadora

let contador = JSON.parse(localStorage.getItem("contador"));

//Obtengo datos del formulario 

const formulario = document.getElementById("formularioConsulta");

formularioConsulta.addEventListener ("submit", (e) => {
    e.preventDefault ();
    hacerConsulta ()
})

function hacerConsulta () {
    const nombreyapellido = document.getElementById ("nombre").value;
    const correo = document.getElementById ("correo").value;
    const mensaje =  document.getElementById ("mensaje").value;
    if ((nombreyapellido.lenth == 0) || (correo.lenth == 0) || (mensaje.lenth == 0)) {
        alert ("Todos los campos deben estar completos");
     }
     else {   
        const numeroMensaje = contador++;
        const nuevaConsulta = new consulta (nombreyapellido,correo,mensaje,numeroMensaje);
        arrayConsulta.push (nuevaConsulta);
        formulario.reset ();
        numeroConsulta.innerHTML= `${numeroMensaje}`;   
        localStorage.setItem ("arrayConsulta", JSON.stringify(arrayConsulta));
        localStorage.setItem ("contador", JSON.stringyfy (contador));
    }
}

console.log(arrayConsulta);

