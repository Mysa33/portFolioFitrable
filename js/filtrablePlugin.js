//jQuery Portfolio Filtrable

//Web*************************
$( "#web" ).hover(function() { 
                

    $(".dv-stl").css("opacity","0.4");
               
});

$( "#web" ).mouseleave(function() { 
                
    $(".dv-stl").css("opacity","1");  

});

$( "#web" ).click(function() { 
            

    $(".dv-stl").hide(500,'swing');
              
$(".dv-web").show(500,'swing');
                
});
            
//CSS*************************
$( "#stl" ).hover(function() { 
                
    $(".dv-web").css("opacity","0.4");
               
});

$( "#stl" ).mouseleave(function() { 
            
    $(".dv-web").css("opacity","1");  
});

$("#stl" ).click(function() { 
            
    $(".dv-web").hide(500,'swing');
            
$(".dv-stl").show(500,'swing');
              
                
});

//All**************************

$( "#all" ).click(function() { 
            
    $(".dv-web").show(500,'swing');
            
    $(".dv-stl").show(500,'swing');
            
    $(".dv-web").css("opacity","1");
    $(".dv-stl").css("opacity","1");
              
                
});

