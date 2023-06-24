let btncomprar = document.querySelector("#hola");
let contador=0;
let mostarnumero=docuemnte.querySelector(".contadorcarrito");

    comprar.forEach(item => {
        item.addEventListener("click", () => {
            contador++;
           mostarnumero.innerHTML=contador;
         });
     
    });
 







