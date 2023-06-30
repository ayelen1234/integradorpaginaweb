let nombreDestinatario=document.querySelector("#destinatario");
let vistaPrevia=document.querySelector("#vista");
let vistaPreviaImagen=document.querySelector(".imagenGif img");

nombreDestinatario.addEventListener("keyup",()=>{
    vistaPrevia.innerHTML=nombreDestinatario.value;
})


let monto=document.querySelector("#monto");
let vistaPreviaMonto=document.querySelector("#precio");

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

let tamanios=document.getElementsByName("tamanio");
tamanios.forEach(item=>{
   
    item.addEventListener("click", () =>{
        vistaPrevia.classList.remove("tamanio1","tamanio2","tamanio3","tamanio4","tamanio5");
        vistaPrevia.classList.add (`tamanio${item.value}`);
        
    })
})

let ubicaciones=document.getElementsByName("ubicacion");

ubicaciones.forEach(item=>{
    item.addEventListener("click", ()=>{
        vistaPreviaMonto.classList.remove("imagenGif-p","imagenGifDerechap" ,"imagenGifAbajop" + "imagenGifpp");
        vistaPreviaMonto.classList.add(item.value);

        
    })



})
let carrito=document.querySelector("#session");
sesionmostrar=sessionStorage.getItem("cantidad");
carrito.innerHTML=sesionmostrar;