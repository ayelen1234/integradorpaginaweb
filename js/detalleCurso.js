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