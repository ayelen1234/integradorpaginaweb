/*- ----------------------------------------------*/
/*CONTACTO*/
let regexEmail = /^[0-9-a-zA-Z.-._]+\@[0-9-a-zA-Z.-._]+\.[0-9a-zA-Z]+$/;
let regexTelefono = /^[0-9]{4}\-+[0-9]{4}$/;
let regexTexarea = /^[a-zA-Z0-9. ]{0,1000}$/;   /*tiene que ser menor a 1000 caracteres*/

let formularioBoton = document.querySelector(".formularioBoton");
let mensaje = document.querySelector("#mensaje");

let nombre = document.querySelector("#Nombre");
let correo = document.querySelector("#correo");
let telefono = document.querySelector("#telefono");

let aceptar = document.querySelector("#aceptar");
let popup = document.querySelector(".popup");

let consulta = document.querySelector("#consulta");
let contador = document.querySelector("#contador");
let cantidadMaxCaracteres = 1000;

if (consulta != null) {
    consulta.addEventListener("keyup", () => {
        let caracteresIngresados = consulta.value.length;
        let caracteresRestantes = cantidadMaxCaracteres - consulta.value.length;

        contador.innerHTML = "Escribio " + caracteresIngresados + " caracteres y queadan " + caracteresRestantes;
    });
}

/*ESCUCHA EL BOTON*/
if (formularioBoton != null) {
    formularioBoton.addEventListener("click", (e) => {
        validarEnvio();
    });
}

function validarEnvio() {
    let error = false;
    let mensajeDeError = "";

    let datos = {
        nombre: nombre.value,
        correo: correo.value,
        telefono: telefono.value,
        consulta: consulta.value
    }

    if (nombre.value == "") {
        error = true;
        mensajeDeError += "<p>Campo nombre incompleto</p>";
    }
    /*SI LO INGRESA, QUE CUMPLA CON ESTE FORMATO SINO NO HAY ERRORES */
    if (telefono.value) {
        if (!regexTelefono.test(telefono.value)) {
            error = true;
            mensajeDeError += "<p>El campo Telefono esta incompleto</p>";
            mensajeDeError += "<p>Debe cumplir con el formato '1234-1234'</p>";
        }
    }

    if (!regexEmail.test(correo.value) || correo.value == "") {
        error = true;
        mensajeDeError += "<p>El campo Correo esta incompleto</p>";
    }


    if (!(regexTexarea.test(consulta.value))) {
        error = true;
        mensajeDeError += "<p>Campo consulta contiene demasiados caracteres</p>";
    }

    if (error) {
        mensaje.innerHTML = mensajeDeError;
    } else {
       mostrarPopup();
    }
}

/*MUESTRA POPUP*/
function mostrarPopup() {
    popup.classList.remove("verPopup");

    aceptar.addEventListener("click", () => {
        enviarFormulario(datos);
        popup.classList.add("popup", "verPopup");
    });
}

/*  DUDA*/
function enviarFormulario(datos) {
    fetch("#", { method: "POST", body: JSON.stringify(datos), headers: { "Content-type": "application/json; charset=UTF-8" } });
    console.log("se envio");
}