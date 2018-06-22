function actualizarHora(){
	var fecha = new Date();

	var segundos = fecha.getSeconds();
	var minutos = fecha.getMinutes();
	var horas = fecha.getHours();
	
	// var pSaludo = document.getElementById("contSaludo")
	var pSaludo = $('#contSaludo')

	if (horas >= 7 && horas < 12) {
		// pSaludo.textContent = "Buenos Días!";
		pSaludo.text("Buenos Días!");
	}
	if (horas >= 12 && horas < 19) {
		// pSaludo.textContent = "Buenas Tardes!";
		pSaludo.text("Buenas Tardes!");
	}
	if (horas >= 19 || horas < 7) {
		// pSaludo.textContent = "Buenas Noches! Zzz";
		pSaludo.text("Buenas Noches! Zzz");
	}
	
	/* var elementoHoras = document.getElementById("pHoras");
	var elementoMinutos = document.getElementById("pMinutos");
	var elementoSegundos = document.getElementById("pSegundos"); */
	var elementoHoras = $('#pHoras');
	var elementoMinutos = $("#pMinutos");
	var elementoSegundos = $("#pSegundos");

	if (segundos <= 9) { segundos = "0" + segundos.toString() }
	if (minutos <= 9) { minutos = "0" + minutos.toString() }
	if (horas <= 9) { horas = "0" + horas.toString() }

	randomH = "#" + Math.floor(Math.random()*16777215).toString(16);
	randomM = "#" + Math.floor(Math.random()*16777215).toString(16);
	randomS = "#" + Math.floor(Math.random()*16777215).toString(16);

	/* elementoHoras.style.color = randomH; */
	elementoHoras.css( {"color":randomH} ) ;
	elementoMinutos.css( {"color":randomM} ) ; 
	elementoSegundos.css( {"color":randomS} ) ;
	
	elementoHoras.text(horas);
	elementoMinutos.text(minutos);
	elementoSegundos.text(segundos);

	dibujarDia(fecha.getDate());
}

var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	rojo = false,
	radio = 110,
	radioNumeros = radio + 15;
	angulo = 0,
	tamanoMinutero = canvas.width/25,
	tamanoHorario = canvas.width/10;

function dibujarCirculo(){
	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = "00FFFF";
	context.arc(canvas.width/2, canvas.height/2, radio, 0, Math.PI*2);
	context.strokeStyle = "black"
	context.stroke();
}

function dibujarNumeros(){
	for(var i=1; i<=12; i++){
		angulo = ((i-3) * 0.1666 * Math.PI);

		context.font = "15px Arial";
		context.fillStyle = "black";
		context.fillText(i, canvas.width/2+Math.cos(angulo)*(radioNumeros)-context.measureText(i).width/2 - 1,
			canvas.height/2+Math.sin(angulo)*(radioNumeros)+5);
	}
}

function dibujarPuntoCentrico(){
	context.beginPath();
	context.fillStyle = "00FFFF";
	context.arc(canvas.width/2, canvas.height/2, 5, 0, Math.PI*2);
	context.fill();
}

function dibujarManecillas(loc, isHour, col){
  	var angulo = (Math.PI*2) * (loc/60) - Math.PI/2,
    	radioManecillas = isHour ? radio - tamanoMinutero-tamanoHorario 
                           : radio - tamanoMinutero;

  context.strokeStyle = col;
  context.moveTo(canvas.width/2, canvas.height/2);
  context.lineTo(canvas.width/2  + Math.cos(angulo)*radioManecillas, 
                  canvas.height/2 + Math.sin(angulo)*radioManecillas);
  context.stroke();
}

function actualizarManecillas() {
  var fecha = new Date,
  hora = fecha.getHours();
  hora = hora > 12 ? hora - 12 : hora,
   
  dibujarManecillas(hora*5 + (fecha.getMinutes()/60)*5, true, 0.5);
  dibujarManecillas(fecha.getMinutes(), false, 0.5);
  dibujarManecillas(fecha.getSeconds(), false,  0.2);
}

function iniciarReloj(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	dibujarCirculo();
	dibujarNumeros();
	dibujarPuntoCentrico();
	actualizarManecillas();
}

function dibujarDia(dia) {
	calendario = document.getElementById("diames");
	cal = calendario.getContext("2d");
	cal.font = "66px Helvetica";
	cal.fillStyle = "red";
	cal.fillRect(0, 0, calendario.width, 70);
	cal.fillStyle = "black";
	cal.fillText(dia, calendario.width/3 + 10, calendario.height/2 + 55);
	cal.fillStyle = "white";
	cal.fillText("DIA", calendario.width/3 - 10, calendario.height/2 - 18);
}

setInterval(actualizarHora, 1000);
setInterval(iniciarReloj, 1000);
