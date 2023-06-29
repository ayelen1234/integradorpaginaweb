let comprar = document.querySelector("#hola");
if (comprar != null) {
    comprar.addEventListener("click", () => {
        /* sumar 1 en el numero de carrito de compras*/
        console.log("CLICK");
    });
}
/*menu desplegable*/
$(document).ready(function(){ 
    $("a.desplegable").click(function(){
      if($('.menu').is(":visible")){
          $('.menu').slideUp();
      }else{
        $('.menu').slideDown();
      }
    });
    $(window).resize(function(){
        if($(this).width()>768){
            $(".menu").show();
        } else{
            $(".menu").hide();
        }
    });
  });
  

  let carrito=document.querySelector("#session");
  let sesion=0;
  let contadorsession=0;
  let nuevop=document.createElement("p");
  
  let sesionmostrar=0;
let btncomprar=document.getElementsByName("hola");

    btncomprar.forEach(item => {
        item.addEventListener("click",()=>{
        sesionmostrar=sessionStorage.getItem("cantidad");
        contadorsession++;
       sesion= sessionStorage.setItem("cantidad",contadorsession);
       sesionmostrar=sessionStorage.getItem("cantidad");
       carrito.innerHTML=sesionmostrar;
    nuevop.appendChild(sesionmostrar);
    carrito.appendChild(nuevop);
     Headers.appendChild(carrito);
        
    });
        
})
 
;