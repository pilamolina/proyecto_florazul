
//Creo la clase para las consultas
class consulta {
    constructor (nombreyapellido, correo, mensaje, contador) {
        this.nombreyapellido = nombreyapellido;
        this.correo = correo;
        this.mensaje = mensaje; 
        this.contador = contador;
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
    const nombreyapellido = document.getElementById("nombreyapellido").value;
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
        const serviceID = "service_c25cawd";
        const templateID = "template_0k5n10r";
        emailjs
        .send(serviceID,templateID,nuevaConsulta)
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Tu consulta fue enviada con éxito',
                confirmButtonColor: '#5998C5',
                text: 'El número de consulta es: ' + contador 
            })
            /*mensajeFormulario.innerHTML = `
            Su número de consulta es: ${contador}. Responderemos su consulta lo antes posible.
            ` */
            console.log(res);
            localStorage.setItem ("arrayConsulta", JSON.stringify(arrayConsulta));
            localStorage.setItem ("contador", JSON.stringify (contador));
        })
        .catch ((err) => 
            Swal.fire({
                icon: 'error',
                title: 'Lo sentimos, hubo un error',
                confirmButtonColor: '#5998C5',
                text: 'Por favor vuelva a intentarlo mas tarde o envíe un correo con su consulta a florazulbariloche@gmail.com mientras resolvemos este inconveniente con nuestra página.'
            })
        );
    }
}
console.log(arrayConsulta);

