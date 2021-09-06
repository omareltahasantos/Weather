
$(document).ready(function(){
    
        var today = new Date(); //Saca la fecha de hoy
        var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves',  'Viernes', 'Sabado'];
        var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    function diaFormato(fecha, arraydias){
        var dia = fecha.getDay();
        var stringDia = ""
        for (let index = 0; index < arraydias.length; index++) {
         
           if(index===dia){
               stringDia= arraydias[index]
           }
         
            
        }
        var diaFormato = stringDia.slice(0,3)

        return diaFormato
    }

    function mesFormato(fecha, arraymeses){
        var mes = fecha.getMonth();
         var mesString="";

    for (let index = 0; index < arraymeses.length; index++) {
        
        if(index=== mes){
            mesString= arraymeses[index]
        }
        
    }
    var mesFormato = mesString.slice(0,3)
    return mesFormato
    }
   
    var formatoFecha = diaFormato(today, dias) +", "+ today.getDate() + " " + mesFormato(today, meses);

    $("#data").html(formatoFecha)


function fechaNextDay(fecha){

    var fechaSegundos = fecha.getTime();
    var diaMili = 60*60*24*1000
    var fechaCombinada = (fechaSegundos + diaMili)
    var newDate = new Date(fechaCombinada) //FechaDiaSiguiente en good format

    return newDate
}


var tomorrow = diaFormato(fechaNextDay(today), dias) +", "+ fechaNextDay(today).getDate() + " " + mesFormato(fechaNextDay(today), meses);

var tomorrowafter = diaFormato(fechaNextDay(fechaNextDay(today)), dias) +", "+ fechaNextDay(fechaNextDay(today)).getDate() + " " + mesFormato(fechaNextDay(fechaNextDay(today)), meses);

var tomorrowafter2 = diaFormato(fechaNextDay(fechaNextDay(fechaNextDay(today))), dias) +", "+ fechaNextDay(fechaNextDay(fechaNextDay(today))).getDate() + " " + mesFormato(fechaNextDay(fechaNextDay(fechaNextDay(today))), meses);

var tomorrowafter3 = diaFormato(fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today)))), dias) +", "+ fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today)))).getDate() + " " + mesFormato(fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today)))), meses);

var tomorrowafter4 = diaFormato(fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today))))), dias) +", "+ fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today))))).getDate() + " " + mesFormato(fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today))))), meses);




$("#text-tomorrow").html(tomorrow)

$("#text-tomorrow2").html(tomorrowafter)

$("#text-tomorrow3").html(tomorrowafter2)

$("#text-tomorrow4").html(tomorrowafter3)

$("#text-tomorrow5").html(tomorrowafter4) //x







////////////////////////////////////CAMBIA LA PAGINA SOLO CON LONDRES AL CARGAR//////////////////////////////////////////////
    //Con esto podemos sacar el titulo de la localidad, en este caso es London
   $.ajax({
        method: 'GET',
        url:  'https://www.metaweather.com/api/location/search/?query=barcelona',
        success: function(data){
           
            const template = data.map(location =>($("#localidad").html(location.title))) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion

         
        }
    })



    var year = today.getFullYear();
    var month = (today.getMonth() + 1) ; 
    var day = today.getDate(); 

 


var urlLocation = 'https://www.metaweather.com/api/location/753692/'+year+'/'+month+'/'+day+'/'  
    //Con esto vamos a sacar 
    $.ajax({
        method: 'GET',
        url:  urlLocation,
        success: function(data){
           
            const template = data.map(location =>(
                $("#numero-wind").html(Math.round(location.wind_speed)),
                $("#numero-airpressure").html(Math.round(location.air_pressure)),
                $("#numero-humidity").html(location.humidity),
                $("#numero-visibility").html(Math.round(location.visibility)),
                $("#weather").html(location.weather_state_name),
                $("#grados").html(Math.round(location.the_temp)+ '℃'),
                $("#nube").css('backgroundImage',  '/images/HeavyCloud.png')
                
                )) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion

         
        }
    })
    function nextDayAjax(dia,attr1, attr2){

        var urllocation= 'https://www.metaweather.com/api/location/753692/'+year+'/'+month+'/'+dia+'/'  

        $.ajax({
            method: 'GET',
            url:  urllocation,
            success: function(data){
                
                const template = data.map(location =>(

                    $('#'+attr1).html(Math.round(location.max_temp) +'℃' ),
                    $('#'+attr2).html(Math.round(location.min_temp) +'℃' )
                  
                    
                    )) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })
    }

    var dayTomorrow = fechaNextDay(today).getDate(); 
   var atributo1 = $("#grado-left").attr('id')
   var atributo2 = $("#grado-right").attr('id')
   nextDayAjax(dayTomorrow, atributo1, atributo2)


   
   var dayTomorrow2 = fechaNextDay(fechaNextDay(today)).getDate(); 
   var atributo1 = $("#grado-left2").attr('id')
   var atributo2 = $("#grado-right2").attr('id')
   nextDayAjax(dayTomorrow2, atributo1, atributo2)


   var dayTomorrow3 = fechaNextDay(fechaNextDay(fechaNextDay(today))).getDate(); 
   var atributo1 = $("#grado-left3").attr('id')
   var atributo2 = $("#grado-right3").attr('id')
   nextDayAjax(dayTomorrow3, atributo1, atributo2)


   var dayTomorrow4 = fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today)))).getDate(); 
   var atributo1 = $("#grado-left4").attr('id')
   var atributo2 = $("#grado-right4").attr('id')
   nextDayAjax(dayTomorrow4, atributo1, atributo2)


   var dayTomorrow5 = fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today))))).getDate(); 
   var atributo1 = $("#grado-left5").attr('id')
   var atributo2 = $("#grado-right5").attr('id')
   nextDayAjax(dayTomorrow5, atributo1, atributo2)

//BOTON ALTERNA GRADOS CENTIGRADOS CON LOS FARENHEIT
$("#grados-centigrados").prop("disabled",true)

    function botonCentigrados(){
        var valor1 = $("#grado-left").html()
        var valor2 = $("#grado-right").html()
        var valor3 = $("#grado-left2").html()
        var valor4 = $("#grado-right2").html()
        var valor5 = $("#grado-left3").html()
        var valor6 = $("#grado-right3").html()
        var valor7 = $("#grado-left4").html()
        var valor8 = $("#grado-right4").html()
        var valor9 = $("#grado-left5").html()
        var valor10 = $("#grado-right5").html()
       //Separamos el numeros de los grados
        var separaValor1 = valor1.split('ºF')
        var separaValor2 = valor2.split('ºF')
        var separaValor3 = valor3.split('ºF')
        var separaValor4 = valor4.split('ºF')
        var separaValor5 = valor5.split('ºF')
        var separaValor6 = valor6.split('ºF')
        var separaValor7 = valor7.split('ºF')
        var separaValor8 = valor8.split('ºF')
        var separaValor9 = valor9.split('ºF')
        var separaValor10 = valor10.split('ºF')
        //Cogemos la posicion de la array en la que esta el numero
        valor1 = separaValor1[0]
        valor2 = separaValor2[0]
        valor3 = separaValor3[0]
        valor4 = separaValor4[0]
        valor5 = separaValor5[0]
        valor6 = separaValor6[0]
        valor7 = separaValor7[0]
        valor8 = separaValor8[0]
        valor9 = separaValor9[0]
        valor10 = separaValor10[0]
       var conversor1 = Math.round((valor1 - 32) / 1.8)
       var conversor2 = Math.round((valor2  - 32) / 1.8)
       var conversor3 = Math.round((valor3  - 32) / 1.8)
       var conversor4 = Math.round((valor4  - 32) / 1.8)
       var conversor5 = Math.round((valor5  - 32) / 1.8)
       var conversor6 = Math.round((valor6  - 32) / 1.8)
       var conversor7 = Math.round((valor7 - 32) / 1.8)
       var conversor8 = Math.round((valor8  - 32) / 1.8)
       var conversor9 = Math.round((valor9  - 32) / 1.8)
       var conversor10 = Math.round((valor10  - 32) / 1.8)
       
       //Finalmente le pones el valor correcto
       $("#grado-left").html(conversor1 + '℃')
       $("#grado-right").html(conversor2 + '℃')
       $("#grado-left2").html(conversor3 + '℃')
       $("#grado-right2").html(conversor4 + '℃')
       $("#grado-left3").html(conversor5 + '℃')
       $("#grado-right3").html(conversor6 + '℃')
       $("#grado-left4").html(conversor7 + '℃')
       $("#grado-right4").html(conversor8+ '℃')
       $("#grado-left5").html(conversor9 + '℃')
       $("#grado-right5").html(conversor10 + '℃')

       //Falta poner que una vez le des al boton de centigrado se ponga en disabled hasta que le demos al de centigrados
            $("#grados-centigrados").prop("disabled",true)
            $("#grados-farenheit").prop('disabled', false)
    }

    function botonFarenheit(){
        var valor1 = $("#grado-left").html()
        var valor2 = $("#grado-right").html()
        var valor3 = $("#grado-left2").html()
        var valor4 = $("#grado-right2").html()
        var valor5 = $("#grado-left3").html()
        var valor6 = $("#grado-right3").html()
        var valor7 = $("#grado-left4").html()
        var valor8 = $("#grado-right4").html()
        var valor9 = $("#grado-left5").html()
        var valor10 = $("#grado-right5").html()
       //Separamos el numeros de los grados
        var separaValor1 = valor1.split('℃')
        var separaValor2 = valor2.split('℃')
        var separaValor3 = valor3.split('℃')
        var separaValor4 = valor4.split('℃')
        var separaValor5 = valor5.split('℃')
        var separaValor6 = valor6.split('℃')
        var separaValor7 = valor7.split('℃')
        var separaValor8 = valor8.split('℃')
        var separaValor9 = valor9.split('℃')
        var separaValor10 = valor10.split('℃')
        //Cogemos la posicion de la array en la que esta el numero
        valor1 = separaValor1[0]
        valor2 = separaValor2[0]
        valor3 = separaValor3[0]
        valor4 = separaValor4[0]
        valor5 = separaValor5[0]
        valor6 = separaValor6[0]
        valor7 = separaValor7[0]
        valor8 = separaValor8[0]
        valor9 = separaValor9[0]
        valor10 = separaValor10[0]
       var conversor1 = Math.round((valor1 * 1.8) + 32)
       var conversor2 = Math.round((valor2 * 1.8) + 32)
       var conversor3 = Math.round((valor3 * 1.8) + 32)
       var conversor4 = Math.round((valor4 * 1.8) + 32)
       var conversor5 = Math.round((valor5 * 1.8) + 32)
       var conversor6 = Math.round((valor6 * 1.8) + 32)
       var conversor7 = Math.round((valor7 * 1.8) + 32)
       var conversor8 = Math.round((valor8 * 1.8) + 32)
       var conversor9 = Math.round((valor9 * 1.8) + 32)
       var conversor10 = Math.round((valor10 * 1.8) + 32)
       
       //Finalmente le pones el valor correcto
       $("#grado-left").html(conversor1 + 'ºF')
       $("#grado-right").html(conversor2 + 'ºF')
       $("#grado-left2").html(conversor3 + 'ºF')
       $("#grado-right2").html(conversor4 + 'ºF')
       $("#grado-left3").html(conversor5 + 'ºF')
       $("#grado-right3").html(conversor6 + 'ºF')
       $("#grado-left4").html(conversor7 + 'ºF')
       $("#grado-right4").html(conversor8+ 'ºF')
       $("#grado-left5").html(conversor9 + 'ºF')
       $("#grado-right5").html(conversor10 + 'ºF')

       //Falta poner que una vez le des al boton de farenheit se ponga en disabled hasta que le demos al de centigrados
       $("#grados-farenheit").prop('disabled', true)
       $("#grados-centigrados").prop("disabled",false)
    }

   $("#grados-farenheit").click(botonFarenheit)
   $("#grados-centigrados").click(botonCentigrados)
   ///////////////////////////////////////////////FIN DE PAGINA AL CARGAR/////////////////////////////////////////////////
   /////////////////////////////////////////////////////////CAMBIA DINAMICAMENTE SEGUN QUE LE PONGAMOS EN EL BUSCADOR//////////////////////////////////////////
   
    $("#barcelona").click(function(){
        var ciudad  = $("#barcelona").html()
        
        var ciudad_lower = ciudad.toLowerCase()

        $.ajax({
            method: 'GET',
            url:  'https://www.metaweather.com/api/location/search/?query='+ciudad_lower,
            success: function(data){
               
                const template = data.map(location =>($("#localidad").html(location.title))) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })

        var year = today.getFullYear();
        var month = (today.getMonth() + 1) ;
        var day = today.getDate(); 
        
        var woeid = new Array();
       woeid['barcelona'] = 753692;
       woeid['london'] = 44418;
       woeid['rome'] = 721943;
       woeid['paris'] = 615702;
       woeid['istanbul']  =2344116;
       woeid['tokyo'] = 1118370;
       var idCity = "";


       //Recorremos el array con un for each
    for(var clave in woeid) {
        if (clave === ciudad_lower){
            idCity=woeid[clave]
        }
     
    }



    var urlLocation = 'https://www.metaweather.com/api/location/'+idCity+'/'+year+'/'+month+'/'+day+'/'  

    $.ajax({
        method: 'GET',
        url:  urlLocation,
        success: function(data){
        
            
                $("#numero-wind").html(Math.round(data[0].wind_speed)),
                $("#numero-airpressure").html(Math.round(data[0].air_pressure)),
                $("#numero-humidity").html(data[0].humidity),
                $("#numero-visibility").html(Math.round(data[0].visibility)),
                $("#weather").html(data[0].weather_state_name),
                $("#grados").html(Math.round(data[0].the_temp)+ '℃'),
                $("#nube").css('backgroundImage',  '/images/HeavyCloud.png')
                

         
        }
    })

    function nextDayAjax(dia,attr1, attr2){

        var urllocation= 'https://www.metaweather.com/api/location/753692/'+year+'/'+month+'/'+dia+'/'  

        $.ajax({
            method: 'GET',
            url:  urllocation,
            success: function(data){
            
                const template = data.map(location =>(

                    $('#'+attr1).html(Math.round(location.max_temp) +'℃' ),
                    $('#'+attr2).html(Math.round(location.min_temp) +'℃' )
                  
                    
                    )) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })
    }
 

       
    })

    $("#paris").click(function(){
        var ciudad  = $("#paris").html()
        
        var ciudad_lower = ciudad.toLowerCase()

        $.ajax({
            method: 'GET',
            url:  'https://www.metaweather.com/api/location/search/?query='+ciudad_lower,
            success: function(data){
               
                const template = data.map(location =>($("#localidad").html(location.title))) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })

        var year = today.getFullYear();
        var month = (today.getMonth() + 1) ; 
        var day = today.getDate(); 
        
        var woeid = new Array();
       woeid['barcelona'] = 753692;
       woeid['london'] = 44418;
       woeid['rome'] = 721943;
       woeid['paris'] = 615702;
       woeid['istanbul']  =2344116;
       woeid['tokyo'] = 1118370;
       var idCity = "";


       //Recorremos el array con un for each
    for(var clave in woeid) {
        if (clave === ciudad_lower){
            idCity=woeid[clave]
        }
   
    }



    var urlLocation = 'https://www.metaweather.com/api/location/'+idCity+'/'+year+'/'+month+'/'+day+'/'  

    $.ajax({
        method: 'GET',
        url:  urlLocation,
        success: function(data){
          
          
                $("#numero-wind").html(Math.round(data[0].wind_speed)),
                $("#numero-airpressure").html(Math.round(data[0].air_pressure)),
                $("#numero-humidity").html(data[0].humidity),
                $("#numero-visibility").html(Math.round(data[0].visibility)),
                $("#weather").html(data[0].weather_state_name),
                $("#grados").html(Math.round(data[0].the_temp)+ '℃'),
                $("#nube").css('backgroundImage',  '/images/HeavyCloud.png')
                
             

         
        }
    })

    function nextDayAjax(dia,attr1, attr2){

        var urllocation= 'https://www.metaweather.com/api/location/753692/'+year+'/'+month+'/'+dia+'/'  

        $.ajax({
            method: 'GET',
            url:  urllocation,
            success: function(data){
           
                const template = data.map(location =>(

                    $('#'+attr1).html(Math.round(location.max_temp) +'℃' ),
                    $('#'+attr2).html(Math.round(location.min_temp) +'℃' )
                  
                    
                    )) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })
    }
 

       
    })

    $("#tokyo").click(function(){
        var ciudad  = $("#tokyo").html()
        
        var ciudad_lower = ciudad.toLowerCase()

        $.ajax({
            method: 'GET',
            url:  'https://www.metaweather.com/api/location/search/?query='+ciudad_lower,
            success: function(data){
               
                const template = data.map(location =>($("#localidad").html(location.title))) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })

        var year = today.getFullYear();
        var month = (today.getMonth() + 1) ; 
        var day = today.getDate();
        
        var woeid = new Array();
       woeid['barcelona'] = 753692;
       woeid['london'] = 44418;
       woeid['rome'] = 721943;
       woeid['paris'] = 615702;
       woeid['istanbul']  =2344116;
       woeid['tokyo'] = 1118370;
       var idCity = "";


       //Recorremos el array con un for each
    for(var clave in woeid) {
        if (clave === ciudad_lower){
            idCity=woeid[clave]
        }
      
    }



    var urlLocation = 'https://www.metaweather.com/api/location/'+idCity+'/'+year+'/'+month+'/'+day+'/'  

    $.ajax({
        method: 'GET',
        url:  urlLocation,
        success: function(data){
         
           
                
              
                $("#numero-wind").html(Math.round(data[0].wind_speed)),
                $("#numero-airpressure").html(Math.round(data[0].air_pressure)),
                $("#numero-humidity").html(data[0].humidity),
                $("#numero-visibility").html(Math.round(data[0].visibility)),
                $("#weather").html(data[0].weather_state_name),
                $("#grados").html(Math.round(data[0].the_temp)+ '℃'),
                $("#nube").css('backgroundImage',  '/images/HeavyCloud.png')
                
          

         
        }
    })

    function nextDayAjax(dia,attr1, attr2){

        var urllocation= 'https://www.metaweather.com/api/location/753692/'+year+'/'+month+'/'+dia+'/'  

        $.ajax({
            method: 'GET',
            url:  urllocation,
            success: function(data){
              
                const template = data.map(location =>(

                    $('#'+attr1).html(Math.round(location.max_temp) +'℃' ),
                    $('#'+attr2).html(Math.round(location.min_temp) +'℃' )
                  
                    
                    )) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })
    }
 

       
    })
    $("#istanbul").click(function(){
        var ciudad  = $("#istanbul").html()
        
        var ciudad_lower = ciudad.toLowerCase()

        $.ajax({
            method: 'GET',
            url:  'https://www.metaweather.com/api/location/search/?query='+ciudad_lower,
            success: function(data){
               
                const template = data.map(location =>($("#localidad").html(location.title))) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })

        var year = today.getFullYear();
        var month = (today.getMonth() + 1) ;
        var day = today.getDate(); 
        
        var woeid = new Array();
       woeid['barcelona'] = 753692;
       woeid['london'] = 44418;
       woeid['rome'] = 721943;
       woeid['paris'] = 615702;
       woeid['istanbul']  =2344116;
       woeid['tokyo'] = 1118370;
       var idCity = "";


       //Recorremos el array con un for each
    for(var clave in woeid) {
        if (clave === ciudad_lower){
            idCity=woeid[clave]
        }

    }


    var urlLocation = 'https://www.metaweather.com/api/location/'+idCity+'/'+year+'/'+month+'/'+day+'/'  


    $.ajax({
        method: 'GET',
        url:  urlLocation,
        success: function(data){
       
      
                $("#numero-wind").html(Math.round(data[0].wind_speed)),
                $("#numero-airpressure").html(Math.round(data[0].air_pressure)),
                $("#numero-humidity").html(data[0].humidity),
                $("#numero-visibility").html(Math.round(data[0].visibility)),
                $("#weather").html(data[0].weather_state_name),
                $("#grados").html(Math.round(data[0].the_temp)+ '℃'),
                $("#nube").css('backgroundImage',  '/images/HeavyCloud.png')
                
             

         
        }
    })

    function nextDayAjax(dia,attr1, attr2){

        var urllocation= 'https://www.metaweather.com/api/location/753692/'+year+'/'+month+'/'+dia+'/'  

        $.ajax({
            method: 'GET',
            url:  urllocation,
            success: function(data){
             
                const template = data.map(location =>(

                    $('#'+attr1).html(Math.round(location.max_temp) +'℃' ),
                    $('#'+attr2).html(Math.round(location.min_temp) +'℃' )
                  
                    
                    )) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })
    }
 

       
    })

    $("#rome").click(function(){
        var ciudad  = $("#rome").html()
        
        var ciudad_lower = ciudad.toLowerCase()

        $.ajax({
            method: 'GET',
            url:  'https://www.metaweather.com/api/location/search/?query='+ciudad_lower,
            success: function(data){
               
                const template = data.map(location =>($("#localidad").html(location.title))) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })

        var year = today.getFullYear();
        var month = (today.getMonth() + 1) ; 
        var day = today.getDate(); 
        
        var woeid = new Array();
       woeid['barcelona'] = 753692;
       woeid['london'] = 44418;
       woeid['rome'] = 721943;
       woeid['paris'] = 615702;
       woeid['istanbul']  =2344116;
       woeid['tokyo'] = 1118370;
       var idCity = "";


       //Recorremos el array con un for each
    for(var clave in woeid) {
        if (clave === ciudad_lower){
            idCity=woeid[clave]
        }

    }

 
    var urlLocation = 'https://www.metaweather.com/api/location/'+idCity+'/'+year+'/'+month+'/'+day+'/'  


    $.ajax({
        method: 'GET',
        url:  urlLocation,
        success: function(data){
       
          
                $("#numero-wind").html(Math.round(data[0].wind_speed)),
                $("#numero-airpressure").html(Math.round(data[0].air_pressure)),
                $("#numero-humidity").html(data[0].humidity),
                $("#numero-visibility").html(Math.round(data[0].visibility)),
                $("#weather").html(data[0].weather_state_name),
                $("#grados").html(Math.round(data[0].the_temp)+ '℃'),
                $("#nube").css('backgroundImage',  '/images/HeavyCloud.png')
                
              

         
        }
    })

    function nextDayAjax(dia,attr1, attr2){

        var urllocation= 'https://www.metaweather.com/api/location/753692/'+year+'/'+month+'/'+dia+'/'  

        $.ajax({
            method: 'GET',
            url:  urllocation,
            success: function(data){
                
                const template = data.map(location =>(

                    $('#'+attr1).html(Math.round(location.max_temp) +'℃' ),
                    $('#'+attr2).html(Math.round(location.min_temp) +'℃' )
                  
                    
                    )) //Hacemos que solo haga 5 pasadas y meta en la array un id en cada posicion
    
             
            }
        })
    }
 

       
    })
   ////////////////////////////////////////////////
   $("#buscar").click(function(){
  



var urlLocation = 'https://www.metaweather.com/api/location/'+idCity+'/'+year+'/'+month+'/'+day+'/'  
    //Con esto vamos a sacar 
   

    var dayTomorrow = fechaNextDay(today).getDate(); 
   var atributo1 = $("#grado-left").attr('id')
   var atributo2 = $("#grado-right").attr('id')
   nextDayAjax(dayTomorrow, atributo1, atributo2)


   
   var dayTomorrow2 = fechaNextDay(fechaNextDay(today)).getDate(); 
   var atributo1 = $("#grado-left2").attr('id')
   var atributo2 = $("#grado-right2").attr('id')
   nextDayAjax(dayTomorrow2, atributo1, atributo2)


   var dayTomorrow3 = fechaNextDay(fechaNextDay(fechaNextDay(today))).getDate(); 
   var atributo1 = $("#grado-left3").attr('id')
   var atributo2 = $("#grado-right3").attr('id')
   nextDayAjax(dayTomorrow3, atributo1, atributo2)


   var dayTomorrow4 = fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today)))).getDate(); 
   var atributo1 = $("#grado-left4").attr('id')
   var atributo2 = $("#grado-right4").attr('id')
   nextDayAjax(dayTomorrow4, atributo1, atributo2)


   var dayTomorrow5 = fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(fechaNextDay(today))))).getDate(); 
   var atributo1 = $("#grado-left5").attr('id')
   var atributo2 = $("#grado-right5").attr('id')
   nextDayAjax(dayTomorrow5, atributo1, atributo2)

//BOTON ALTERNA GRADOS CENTIGRADOS CON LOS FARENHEIT
$("#grados-centigrados").prop("disabled",true)

    function botonCentigrados(){
        var valor1 = $("#grado-left").html()
        var valor2 = $("#grado-right").html()
        var valor3 = $("#grado-left2").html()
        var valor4 = $("#grado-right2").html()
        var valor5 = $("#grado-left3").html()
        var valor6 = $("#grado-right3").html()
        var valor7 = $("#grado-left4").html()
        var valor8 = $("#grado-right4").html()
        var valor9 = $("#grado-left5").html()
        var valor10 = $("#grado-right5").html()
       //Separamos el numeros de los grados
        var separaValor1 = valor1.split('ºF')
        var separaValor2 = valor2.split('ºF')
        var separaValor3 = valor3.split('ºF')
        var separaValor4 = valor4.split('ºF')
        var separaValor5 = valor5.split('ºF')
        var separaValor6 = valor6.split('ºF')
        var separaValor7 = valor7.split('ºF')
        var separaValor8 = valor8.split('ºF')
        var separaValor9 = valor9.split('ºF')
        var separaValor10 = valor10.split('ºF')
        //Cogemos la posicion de la array en la que esta el numero
        valor1 = separaValor1[0]
        valor2 = separaValor2[0]
        valor3 = separaValor3[0]
        valor4 = separaValor4[0]
        valor5 = separaValor5[0]
        valor6 = separaValor6[0]
        valor7 = separaValor7[0]
        valor8 = separaValor8[0]
        valor9 = separaValor9[0]
        valor10 = separaValor10[0]
       var conversor1 = Math.round((valor1 - 32) / 1.8)
       var conversor2 = Math.round((valor2  - 32) / 1.8)
       var conversor3 = Math.round((valor3  - 32) / 1.8)
       var conversor4 = Math.round((valor4  - 32) / 1.8)
       var conversor5 = Math.round((valor5  - 32) / 1.8)
       var conversor6 = Math.round((valor6  - 32) / 1.8)
       var conversor7 = Math.round((valor7 - 32) / 1.8)
       var conversor8 = Math.round((valor8  - 32) / 1.8)
       var conversor9 = Math.round((valor9  - 32) / 1.8)
       var conversor10 = Math.round((valor10  - 32) / 1.8)
       
       //Finalmente le pones el valor correcto
       $("#grado-left").html(conversor1 + '℃')
       $("#grado-right").html(conversor2 + '℃')
       $("#grado-left2").html(conversor3 + '℃')
       $("#grado-right2").html(conversor4 + '℃')
       $("#grado-left3").html(conversor5 + '℃')
       $("#grado-right3").html(conversor6 + '℃')
       $("#grado-left4").html(conversor7 + '℃')
       $("#grado-right4").html(conversor8+ '℃')
       $("#grado-left5").html(conversor9 + '℃')
       $("#grado-right5").html(conversor10 + '℃')

       //Falta poner que una vez le des al boton de centigrado se ponga en disabled hasta que le demos al de centigrados
            $("#grados-centigrados").prop("disabled",true)
            $("#grados-farenheit").prop('disabled', false)
    }

    function botonFarenheit(){
        var valor1 = $("#grado-left").html()
        var valor2 = $("#grado-right").html()
        var valor3 = $("#grado-left2").html()
        var valor4 = $("#grado-right2").html()
        var valor5 = $("#grado-left3").html()
        var valor6 = $("#grado-right3").html()
        var valor7 = $("#grado-left4").html()
        var valor8 = $("#grado-right4").html()
        var valor9 = $("#grado-left5").html()
        var valor10 = $("#grado-right5").html()
       //Separamos el numeros de los grados
        var separaValor1 = valor1.split('℃')
        var separaValor2 = valor2.split('℃')
        var separaValor3 = valor3.split('℃')
        var separaValor4 = valor4.split('℃')
        var separaValor5 = valor5.split('℃')
        var separaValor6 = valor6.split('℃')
        var separaValor7 = valor7.split('℃')
        var separaValor8 = valor8.split('℃')
        var separaValor9 = valor9.split('℃')
        var separaValor10 = valor10.split('℃')
        //Cogemos la posicion de la array en la que esta el numero
        valor1 = separaValor1[0]
        valor2 = separaValor2[0]
        valor3 = separaValor3[0]
        valor4 = separaValor4[0]
        valor5 = separaValor5[0]
        valor6 = separaValor6[0]
        valor7 = separaValor7[0]
        valor8 = separaValor8[0]
        valor9 = separaValor9[0]
        valor10 = separaValor10[0]
       var conversor1 = Math.round((valor1 * 1.8) + 32)
       var conversor2 = Math.round((valor2 * 1.8) + 32)
       var conversor3 = Math.round((valor3 * 1.8) + 32)
       var conversor4 = Math.round((valor4 * 1.8) + 32)
       var conversor5 = Math.round((valor5 * 1.8) + 32)
       var conversor6 = Math.round((valor6 * 1.8) + 32)
       var conversor7 = Math.round((valor7 * 1.8) + 32)
       var conversor8 = Math.round((valor8 * 1.8) + 32)
       var conversor9 = Math.round((valor9 * 1.8) + 32)
       var conversor10 = Math.round((valor10 * 1.8) + 32)
       
       //Finalmente le pones el valor correcto
       $("#grado-left").html(conversor1 + 'ºF')
       $("#grado-right").html(conversor2 + 'ºF')
       $("#grado-left2").html(conversor3 + 'ºF')
       $("#grado-right2").html(conversor4 + 'ºF')
       $("#grado-left3").html(conversor5 + 'ºF')
       $("#grado-right3").html(conversor6 + 'ºF')
       $("#grado-left4").html(conversor7 + 'ºF')
       $("#grado-right4").html(conversor8+ 'ºF')
       $("#grado-left5").html(conversor9 + 'ºF')
       $("#grado-right5").html(conversor10 + 'ºF')

       //Falta poner que una vez le des al boton de farenheit se ponga en disabled hasta que le demos al de centigrados
       $("#grados-farenheit").prop('disabled', true)
       $("#grados-centigrados").prop("disabled",false)
    }

   $("#grados-farenheit").click(botonFarenheit)
   $("#grados-centigrados").click(botonCentigrados)
   })

//////////INICIALIZACION PUSHBAR//////////////////////////
   
const pushbar = new Pushbar({
    blur:true,
  overlay:true,
});

 //open a pushbar
  pushbar.open('mypushbar1');	




})