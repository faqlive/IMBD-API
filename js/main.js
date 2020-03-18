var asideVisible = false;
// document
$(document).ready(function(){
    init();
    console.log(document.getElementsByTagName("aside"));    //  HTML collection     //  JavaScript
    console.log($("aside"));                                //  Objeto              //  jQuery
});

function init(){ 
    $("aside").css("left","-35%");   //  jQuery
//  document.getElementsByTagName("aside").style.left="0px";    // JavaScrip
    $("#front").css("left","0px");
    $("#middel").css("left","100%");
    $("#back").css("left","100%");
    $("#moveAside").click(function(){showAside()});
    $(".front").click(function(){showFront()});
    $(".middel").click(function(){showMiddel()});
    $(".back").click(function(){showBack()});
    console.log("SE ha cargado correctamente.");
};

function showFront(){
    $("aside").css("left","-35%");
    $("#front").css("left","0px");
    $("#middel").css("left","100%");
    $("#back").css("left","100%");
    console.log("MOSTRAR FRONT.");
}
function showMiddel(){
    $("aside").css("left","-35%");
    $("#middel").css("left","0px");
    $("#front").css("left","-100%");
    $("#back").css("left","100%");
    console.log("MOSTRAR MIDDEL.");
}
function showBack(){
    $("aside").css("left","-35%");
    $("#back").css("left","0px");
    $("#front").css("left","-100%");
    $("#middel").css("left","-100%");
    console.log("MOSTRAR BACK.");
}
function showAside(){
    
    if(asideVisible){
        $("aside").css("left","-35%");
        asideVisible = false;
        console.log("OCULTAR MENU.");
    }else{
        $("aside").css("left","0px");
        asideVisible = true;
        console.log("MOSTRAR MENU.");
    }
}