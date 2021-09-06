<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="styles.css">
    <!-- Bootstrap CSS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  	<link rel="stylesheet" type="text/css" href="src/pushbar.css">
	<link rel="stylesheet" type="text/css" href="demo.css">
  </head>
  <body>
  <aside data-pushbar-id="left" data-pushbar-direction="left">
		<div class="title"><span data-pushbar-close class="close push_right"></span> Left sidebar menu</div>
		<ul class="menu">
      <input type="text" name="search" placeholder="Introduce una ciudad" class="mb-5" id="buscar-button"> <button class="btn" id="buscar">Buscar</button>
			<li type="button" id="barcelona">Barcelona</li>
			<li>Paris</li>
			<li>Tokyo</li>
			<li>Venice</li>
			<li>Rome</li>
		</ul>
	</aside>
    <div id="app"></div>

    <div class="container-fluid">
        <div class="container-fluid" id="rectangulo-izquierda">
          <button id="search-button" data-pushbar-target="left">Search for places</button>
          <button id="gps">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
            </svg>
          </button>
          <span alt="" id="img-nubes-fondo1"></span>
          <span  alt="" id="img-nubes-fondo2"></span>
          <span alt="" id="img-nubes-fondo3"></span>
          <span  alt="" id="img-nubes-fondo4"></span>
          <span alt="" id="nube"></span>
          <span id="grados">15℃</span>
          <span id="weather">Shower</span>
          <span id="day">Today</span>
          <span id="divide">-</span>
          <span id="data">Fri, 5 Jun</span>
          <span id="ubication-name">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg><span id="localidad" class="ml-5">Helsinki</span>
          </span>
        </div>
        <div class="container-fluid" id="rectangulo-derecha">
          <button id="grados-centigrados">
             ℃
          </button>
          <button id="grados-farenheit">
             ℉
          </button>
          <div id="tomorrow">
            <span id="text-tomorrow">Tomorrow</span>
            <img src="images/Shower.png" class="img-fluid" id="tomorrow-icon" alt="">
            <span id="grado-left">16°C</span>
            <span id="grado-right">11°C</span>
          </div>
          <div id="tomorrow2">
            <span id="text-tomorrow2">Sun, 7 Jun</span>
            <img src="images/Sleet.png" class="img-fluid" id="tomorrow-icon2" alt="">
            <span id="grado-left2">10°C</span>
            <span id="grado-right2">5°C</span>
          </div>
          <div id="tomorrow3">
            <span id="text-tomorrow3">Mon, 8 Jun</span>
            <img src="images/Snow.png" class="img-fluid" id="tomorrow-icon3" alt="">
            <span id="grado-left3">-3°C</span>
            <span id="grado-right3">-8°C</span>
          </div>
          <div id="tomorrow4">
            <span id="text-tomorrow4">Tue, 9 Jun</span>
            <img src="images/Thunderstorm.png" class="img-fluid" id="tomorrow-icon4" alt="">
            <span id="grado-left4">10°C</span>
            <span id="grado-right4">9°C</span>
          </div>
          <div id="tomorrow5">
            <span id="text-tomorrow5">Wed, 10 Jun</span>
            <img src="images/Shower.png" class="img-fluid" id="tomorrow-icon5" alt="">
            <span id="grado-left5">16°C</span>
            <span id="grado-right5">11°C</span>
          </div>
         <span id="highlights">Today's Highlights</span>
         <div id="wind-status">
          <span id="wind">Wind status</span>
          <span id="numero-wind">7</span><span id="mph">mph</span>
          <span id="name-wind">wsw</span>
         </div>

         <div id="humidity-status">
         <span id="humidity">Humidity</span>
          <span id="numero-humidity">84</span><span id="percent-humidity">%</span>
          <span id="grafic-humidity">grafic</span>
         </div>

         <div id="visibility">
            <span id="visibility-title">Visibility</span>
            <span id="numero-visibility">6,4</span><span id="miles">miles</span>
         </div>

         <div id="air-pressure">
            <span id="air-pressure-title">Air pressure</span>
            <span id="numero-airpressure">998</span><span id="mb">mb</span>
         </div>
         
        </div>
    </div>


    <!-- Optional JavaScript -->
    <script src="main.js"></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script type="text/javascript" src="src/pushbar.js"></script>
	<script type="text/javascript">
		const pushbar = new Pushbar({
			blur: true,
			overlay: true,
		});
	</script>
  </body>
</html>