const a = document.querySelector("a");
//-------------------------------Number of scroll----------------------------------//
window.onscroll = function() {
    var y = window.scrollY;
    console.log(y);
  };
//-------------------------------Change the class---------------------------------//

function scrollHeader(){
    const header = document.getElementById('header2')
    if(this.scrollY >= 1) header.classList.add('header2'); 
    else header.classList.remove('header2')
}
window.addEventListener('scroll', scrollHeader)



//--------------------------------Change the text on Finance word and scroll to page if you pick the buttom-----------------------------------//
function btnOnClick(){
    if(scrollY <= 500){
        document.getElementById("block").innerHTML = "Legal"
        window.scrollTo(0,590); 
        console.log("")
    }
    else if(scrollY <= 624){
        document.getElementById("block").innerHTML = "Finanzas"
        window.scrollTo(0,1356);
        console.log("")
    }
    else{
        document.getElementById("block").innerHTML = "Legal"
        window.scrollTo(0,590); 
    }
}

//--------------------Clicl para volver a Contabilidad, descripcion de tareas---------------------------------//

function OnClick(){
        document.getElementById("accounting-information").innerHTML = "El concepto es brindar servicios para las pymes se basa en las necesidades de las mismas <br> tanto en facturacion como posicion impositiva frente al estado.<br> Por lo cual se brindan serivicos tanto para S.A.S, SRL y Cia.<br><br> Balances generales <br> Liquidacion de impuestos <br> Control de facturacion compra/venta frente a IVA";
        
}
    //-----------------------Queda ver la pagina: como volver al home(texto anterior al apretar contabilidad. Removeto/(PLATZI))------------------------------//
function lick(){
    document.getElementById("accounting-information").innerHTML = "El concepto es brindar servicios para las pymes se basa en las necesidades de las mismas <br> tanto en facturacion como posicion impositiva frente al estado.<br> Por lo cual se brindan serivicos tanto para S.A.S, SRL y Cia.<br><br> Balances generales <br> Liquidacion de impuestos <br> Control de facturacion compra/venta frente a IVA";
    window.scrollTo(0,0);
}