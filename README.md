[![IMBd]](https://www.imdb.com/)
# IMBD aplication
 
```JavaScript 
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
```
> blokquote text

- lista
    - sublista
    - sublista2
        - sub sub lista ordenada

|Table| hed1|head2|head3|
|---|---|---|---|
|content|content2|content3|content4|

**blod**

*italic*
~~tachado~~
