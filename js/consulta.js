$(document).ready(function(){
    $("#consultar").click(function(){consultar()});
});
var httpConsulta = 'http://www.omdbapi.com/?i=tt3896198&apikey=3a2b6a85';
var consultaCompleta;
function consultar(){
    consultaCompleta = ''
    http_request = new XMLHttpRequest();
    http_request.overrideMimeType('text/xml');
    http_request.onreadystatechange = function (){          // CADA VEZ QUE CAMBIE EL ESTADO DE LA CONEXION
        console.log("STATE: " + http_request.readyState);
        console.log("SATTUS: " + http_request.status);
        if(http_request.readyState == 4){
            if(http_request.status == 200){
                // Hago proceso
                console.log('restpuesta ' + http_request.responseText);
                procesarJson(http_request.responseText);
            }
        };
    };
    var validation = construirConsulta();
    if(validation){
        http_request.open('GET',consultaCompleta , true); // TRUE indica asincrona
        http_request.send();
    }else{
        http_request.close();
    }
}
function construirConsulta(){
    consultaCompleta = httpConsulta;
    var movTitle = $("#movTitle").val();
    if(movTitle != 'undefined' && movTitle != ''){
        consultaCompleta += ('&t=' + movTitle);
        console.log('TYPE: ' + $("#type").val());
        if($("#type") != 'undefined' && $("#type") != null){
             consultaCompleta += ('&type=' + $("#type").val())
            };
        console.log('YEAR: ' + $("#year").val());
        if($("#year").val() != '' && $("#year").val() != null){ 
            consultaCompleta += ('&y=' + $("#year").val())
        };
        
        consultaCompleta += '&plot=full';
        console.log(consultaCompleta);
        return true;
    }else{
        console.log('Es necesario escribir el título de la pelicula.');
        alert("Es necsario escribir el titurlo de la pelicula que desea buscar");
        return false;
    }
}
function procesarJson(respuesta){
    var obj= JSON.parse(respuesta);
    console.log(obj);
    console.log(obj.Title);
    // PINTAR CUTRE
//  $("#film").html('<h2>' + obj.Title + '</h2><br><img src="'+ obj.Poster + '">');         // jQuery
//  document.getElementById("film").innerHTML = '<h2>' + obj.Title + '</h2><br><img src="'+ obj.Poster + '">';      // JavaScript clasico
    var h2Titulo = document.createElement("h2");
    var textoTitulo = document.createTextNode(obj.Title);
    h2Titulo.appendChild(textoTitulo);
    h2Titulo.setAttribute("class","titilo");
//  document.querySelector("#film");        // SIMILAR a $("film") de jQuery
    document.querySelector("#film").appendChild(h2Titulo);
    var imagen = document.createElement("img");
    imagen.setAttribute("src",obj.Poster);
    $("#film").append(imagen);
}

// http://www.omdbapi.com/?apikey=[yourkey]&