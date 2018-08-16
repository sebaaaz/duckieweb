var listaPatos = {"localhost": 'localhost',
				  "rashodakuin": '10.42.0.144'};

var patoActual = ["nombreA", "ipA"];
var patoPrevio = ["nombreP", "ipP"];

$(function() {
	cargarVistaPatos();
	// setInterval(analizarConexiones, 1000);
	// analizarConexiones();

	$("#addIP").click(function() {
		nombre = $("#nombrePato").val();
		ip = $("#ip").val();

		if (ValidateIPaddress(ip)) {
			agregarPato(nombre, ip);
		}
	});

});

function ValidateIPaddress(ipaddress) {  // https://stackoverflow.com/a/27434991
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
    return (true)  
  }
  else if (ipaddress == "localhost") {
  	return (true)
  }
  alert("Por favor, ingresa una IP válida.")  
  	return (false)  
}

function agregarPato(nombre, ip){
	listaPatos[nombre] = ip;
	cargarVistaPatos();
}

function cargarVistaPatos(){
	$("#cargandoPatos").hide(); //ocultar loading
	$("#listaPatos").text("");
	for (pato in listaPatos){
		$("#listaPatos").append('<li><div class="form-inline"><img src="/img/off.png"/><div class="cajaNombrePatoLista" id='+pato+'>'+'<div class="F">'+pato+'</div></div><div class="float-right X" id='+pato+'X>X</div></div></li>'); //mostrar lista patos

		$("#"+pato).click(function() {
			pato = this.id;
			$("#duckiebotN").text(pato);
			ipPato = listaPatos[pato];
			conectarPato(ipPato);

			patoPrevio = new Array(patoActual[0], patoActual[1]);
			patoActual[0] = pato;
			patoActual[1] = ipPato;

			console.log(patoPrevio);
			console.log(patoActual);
		});

		$("#"+pato+"X").click(function() {
			pato = this.id.slice(0, -1);
			delete listaPatos[pato];
			cargarVistaPatos();
		});
	}
};

function analizarConexiones(){
	//for (conexion in listaPatos){
		/*
		var conexion = "localhost"
		roz1 = new ROSLIB.Ros({
    		url : 'ws://'+ listaPatos[conexion] +':9090'
  		});

		roz1.on('close', function() {
		});
		roz1.on('connection', function() {
			console.log("CONECTANDO >> "+conexion);
		 	$("#"+conexion+"> img").attr("src", "/img/on.png");
		});
		roz1.on('error', function(error) {
			console.log("DESCONECTANDO >> "+conexion);
			$("#"+conexion+"> img").attr("src", "/img/off.png");
		});

		var conexion = "rashodakuin"
		roz2 = new ROSLIB.Ros({
    		url : 'ws://'+ listaPatos[conexion] +':9090'
  		});

		roz2.on('close', function() {
		});
		roz2.on('connection', function() {
			console.log("CONECTANDO >> "+conexion);
		 	$("#"+conexion+"> img").attr("src", "/img/on.png");
		});
		roz2.on('error', function(error) {
			console.log("DESCONECTANDO >> "+conexion);
			$("#"+conexion+"> img").attr("src", "/img/off.png");
		});
		//roz.close();
		//delete roz;
	//}
	*/
}