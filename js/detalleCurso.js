let acordeon = document.querySelector(".acordeon");
let segundo = document.querySelector("#segundo");
let tercero = document.querySelector("#tercero");

let items = document.querySelector(".items");
let items2 = document.querySelector(".items2");
let items3 = document.querySelector(".items3");


if (acordeon != null) {
    acordeon.addEventListener("click", () => {
        items.classList.toggle("ver");
    });
}
if (segundo != null) {
    segundo.addEventListener("click", () => {
        items2.classList.toggle("ver");
    });
}
if (tercero != null) {
    tercero.addEventListener("click", () => {
        items3.classList.toggle("ver");
    });
}

let inscribirse = document.querySelector(".botonInscripcion");
let aceptar = document.querySelector("#aceptar");
let popup = document.querySelector(".popup");
let carrito=document.querySelector("#session");
let sesion=0;
let contadorsession=0;
let nuevop=document.createElement("p");

let sesionmostrar=0;
inscribirse.addEventListener("click", () => {
    mostrarPopup();
    contadorsession++;
    sessionStorage.setItem("cantidad",contadorsession)
   sesionmostrar=sessionStorage.getItem("cantidad");
   carrito.innerHTML=sesionmostrar;
nuevop.appendChild(sesionmostrar);
carrito.appendChild(nuevop);
 Headers.appendChild(carrito);  


});

function mostrarPopup() {
    popup.classList.remove("verPopup");

    aceptar.addEventListener("click", () => {
        popup.classList.add("popup", "verPopup");
    });
}
