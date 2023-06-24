let nombreDestinatario=document.querySelector("#destinatario");
let vistaPrevia=document.querySelector(".imagenGif h3");
let vistaPreviaImagen=document.querySelector(".imagenGif img");

nombreDestinatario.addEventListener("keyup",()=>{
    vistaPrevia.innerHTML=nombreDestinatario.value;
})

let monto=document.querySelector("#monto");
let vistaPreviaMonto=document.querySelector(".imagenGif p");

monto.addEventListener("keyup",()=>{
    vistaPreviaMonto.innerHTML="$" + monto.value;
})

let colores=document.getElementsByName("color");
colores.forEach(item =>{
    item.addEventListener("click",()=>{
        vistaPrevia.classList.remove("rojo","amarillo","verde","violeta","blanco");
        vistaPrevia.classList.add( item.value);
})


})

let coloresFondo=document.getElementsByName("fondo");
let fondoclase=document.querySelector(".imagenGif");
coloresFondo.forEach(item=>{
    item.addEventListener("click",()=>{
        fondoclase.classList.remove("imagenGif1","imagenGif2","imagenGif3","imagenGif4","imagenGif5");
        fondoclase.classList.add("imagenGif"+item.value);

    })
})

let letras=document.getElementsByName("tamanio");
 vistaPrevia=document.querySelector(".imagenGif h3");
letras.forEach(item=>{
    item.addEventListener("click", () =>{
        vistaPrevia.classList.remove("tamanio1");
        vistaPrevia.classList.add("tamanio1","tamanio2","tamanio3","tamanio4","tamanio5");
    })
})

let ubicacion=docment.getElementsByName("ubicacion");

ubicacion.forEach(item=>{
    item.addEventListener("click", ()=>{
        vistaPreviaMonto.classList.remove( "imagenGifAbajo p","imagenGifDerecha p"  );
        vistaPreviaMonto.classList.add( "imagenGif p" , "imagenGifAbajo p","imagenGifDerecha p" );
    })




})