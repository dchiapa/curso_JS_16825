//Esperamos Carga del DOM
$(function(){
    //Capturamos el evento de click del boton show    
    $("#btnShow").click( () => $("#caja-prueba").show() );
    //Capturamos el evento de click del boton hide    
    $("#btnHide").on("click",() => $("#caja-prueba").hide());
    //Capturamos el evento de click del boton fadeIn    
    $("#btnFadeIn").on("click",() => $("#caja-prueba").fadeIn("slow"));    
    //Capturamos el evento de click del boton fadeOut
    $("#btnFadeOut").on("click",() => $("#caja-prueba").fadeOut(4000));  
    
    $("#btnCallBack").on("click", () => 
        $("#caja-prueba").fadeIn("slow", () => $("#caja-prueba").fadeOut(3000,()=>$("#caja-prueba").fadeIn("fast")
        ) //fadeOut
        ) //fadeIn
        ) //on

    //Capturamos el evento de click del boton slideDown    
    $("#btnSlideDown").on("click",() => $("#caja-prueba").slideDown("slow"));    
    //Capturamos el evento de click del boton slideUp
    $("#btnSlideUp").on("click",() => $("#caja-prueba").slideUp("slow"));  
    //Capturamos el evento de click del boton slideToggle
    $("#btnSlideToggle").on("click",() => $("#caja-prueba").slideToggle("slow"));  

    //Capturamos boton para cambiar fondo a Rojo
    $("#btnRojo").click( () => $("body").css("background-color","red") );
    //Capturamos boton para cambiar fondo a Azul
    $("#btnAzul").click( () => {
        $("body").css("background-color","blue")
        //$("h1,h2,h3").css("color","white");
    } );
    //Capturamos boton para cambiar fondo a Verde
    $("#btnVerde").click( () => $("body").css("background-color","green") );
    //Capturamos boton para cambiar fondo a Azul
    $("#btnSinFondo").click( () => $("body").css("background-color","white") );

    $(".textoAnimado").animate({  left:'250px',
                    opacity:'0.5',
                    height:'150px',
                    width:'150px'   }, //1er parámetro propiedades
                    4000,            //2do parámetro duración 
                    function(){        //3er parámetro callback
                        console.log("final de animación");
                    });

    //Capturamos el boton top
    $("#btnTop").click( () => {
        //Animamos sus propiedades CSS con animate
        $('html, body').animate({
            scrollTop: $("body").offset().top  
        }, 2000);
    });

    //encadenado de efectos sobre el h2
    $("#subtitulo").css("color","darkgray")
                   .fadeOut(3000)
                   .delay(2000)
                   .css("color","black")
                   .fadeIn("slow");

});