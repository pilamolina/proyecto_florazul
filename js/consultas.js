
//Creo la clase para las consultas
class consulta {
    constructor (nombre, correo, mensaje) {
        this.nombre = nombre;
        this.correo = correo;
        this.mensaje = mensaje; 
    }
}

const consulta1 = new consulta("Marta Perez" , "martaperez12345@gmail.com", "quiero saber cuanto sale el hospedaje para dos personas");
const consulta2 = new consulta("Alberto Gomez" , "albertogomez12345@gmail.com", "hola, quiero saber si tienen cabañas para 20 personas");


// Creo el array y hago el push con las consultas
const arrayConsulta = []

arrayConsulta.push (consulta1);
arrayConsulta.push (consulta2);

console.log (arrayConsulta)

// Agrego la consulta que hace el usuario al array 

function hacerConsulta () {
    let nombreyapellido = prompt ("Ingrese su nombre y apellido");
    let correo = prompt ("Ingrese su correo electrónico");
    let mensaje = prompt ("Ingrese su consulta");
    let nuevaConsulta = new consulta (nombreyapellido,correo,mensaje);
    arrayConsulta.push (nuevaConsulta);
}

hacerConsulta();
console.log(arrayConsulta)