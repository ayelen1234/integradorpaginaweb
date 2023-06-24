let agregar=document.querySelector("#agregar");
let contador=0;
let contenedor =document.querySelector(".contenedordeinput");
let valorInscripcion=document.querySelector(".valorinscribirse h4");
let valorCusoFijo=20;
let  acumulador=0;
let inscribirse=document.querySelector(".inscribiseBoton");
let popup = document.querySelector(".popup");


agregar.addEventListener("click",e =>{
    montoImporteSuma();
    //creo nuevo div con nuevos input 
let nuevoDiv=document.createElement("div");
let nodoNombreApellido=document.createElement("input");
let nodoDni=document.createElement("input");
let nodoMail=document.createElement("input");
let nodoTelefono=document.createElement("input");
let nodoImporte=document.createElement("input");
let nodobotton=document.createElement("button");

let textobotton=document.createTextNode("Eliminar");
nodobotton.appendChild(textobotton);
nodobotton.classList.add("eliminar");

nuevoDiv.classList.add("formularioinscripcion");

//hago hijos
nuevoDiv.appendChild(nodoNombreApellido);
nuevoDiv.appendChild(nodoDni);
nuevoDiv.appendChild(nodoMail);
nuevoDiv.appendChild(nodoTelefono);
nuevoDiv.appendChild(nodoImporte);
nuevoDiv.appendChild(nodobotton);

contenedor.appendChild(nuevoDiv);

//remuevo el div creado
    nodobotton.addEventListener("click",e =>{
        montoImporteResta();
        contenedor.removeChild(nuevoDiv);


});
//calcula automaticamente el importe de los cursos si se agrega integrantes.
function montoImporteSuma(){
    contador++;
if(contador==1){
  acumulador=valorCusoFijo + 20;
  valorInscripcion.innerHTML=acumulador;
}else{
    acumulador+= 20;
  valorInscripcion.innerHTML=acumulador;
}
 };

   //calcula automaticamente el importe de los cursos si se elimina integrantes.
function montoImporteResta(){

    acumulador+= -20;
  valorInscripcion.innerHTML=acumulador;
}





});



inscribirse.addEventListener("click", ()=>{

    popup.classList.remove("verPopup");
    popup.classList.add("popup");
}  

)

