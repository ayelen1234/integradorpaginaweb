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