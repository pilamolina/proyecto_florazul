 
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

let contador = JSON.parse(localStorage.getItem("contador")) || 0;

//Obtengo datos del formulario 

const formulario = document.getElementById("formularioConsulta");

formularioConsulta.addEventListener ("submit", (e) => {
    e.preventDefault ();
    hacerConsulta ()
})

let mensajeFormulario = document.getElementById("mensajeFormulario");

function hacerConsulta () {
    const nombreyapellido = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje =  document.getElementById("mensaje").value;
    if ((nombreyapellido.length == 0) || (correo.length == 0) || (mensaje.length == 0)) {
        mensajeFormulario.innerHTML = `
        Por favor complete todos los campos
        `
     }
     else {   
        contador++;
        const nuevaConsulta = new consulta (nombreyapellido,correo,mensaje,contador);
        arrayConsulta.push(nuevaConsulta);
        formulario.reset ();
        /*let numeroConsulta = document.getElementById("numeroConsulta");
        numeroConsulta.innerHTML= `${contador}`;   */
        mensajeFormulario.innerHTML = `
        Su número de consulta es: ${contador}. Responderemos su consulta lo antes posible.
        `
        localStorage.setItem ("arrayConsulta", JSON.stringify(arrayConsulta));
        localStorage.setItem ("contador", JSON.stringify (contador));
    }
}

console.log(arrayConsulta);

