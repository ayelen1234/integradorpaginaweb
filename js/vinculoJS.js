/*- ----------------------------------------------*/
/*CONTACTO*/
let regexEmail = /^[0-9-a-zA-Z.-._]+\@[0-9-a-zA-Z.-._]+\.[0-9a-zA-Z]+$/;
let regexTelefono = /^[0-9]{4}\-+[0-9]{4}$/;
let regexTexarea = /^[a-zA-Z0-9]$/;   /*tiene que ser menor a 1000 caracteres*/

let form = document.querySelector("#form");
let mensaje = document.querySelector("#mensaje");

/*let formularioEnviado=document.querySelector(".formularioBoton");*/
let aceptar = document.querySelector("#aceptar");
let popup = document.querySelector(".verPopup");
let consulta = document.querySelector("#consulta").value;
let contador = document.querySelector("#contador");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarEnvio();
});

function validarEnvio() {
    let error = false;
    let mensajeDeError = "";
    let nombre = document.querySelector("#Nombre");
    let correo = document.querySelector("#correo");
    let telefono = document.querySelector("#telefono");
    let consulta = document.querySelector("#consulta");

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
        form.submit();
        mostrarPopup()
    }
}

function mostrarPopup() {
    form.addEventListener("submit", () => {
        popup.classList.remove(".verPopup");
    });
}

consulta.addEventListener("keyup", () => {
    mensaje.innerHTML = "Escribio" + consulta.length + "caracteres";
});

let carrito=document.querySelector("#session");
sesionmostrar=sessionStorage.getItem("cantidad");
carrito.innerHTML=sesionmostrar;









