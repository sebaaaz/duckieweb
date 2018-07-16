// ROS

$(function() {

  var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });

  ros.on('connection', function() {
    console.log('Connected to websocket server.');
    $("#status").attr("src" , "imgs/on.png")
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });

var speed = new ROSLIB.Topic({
  ros: ros,
  name: '/śpeed',
  messageType : 'duckietown_msgs/Twist2DStamped'
});

speed.subscribe(function(message) {
  v = message.v;
  omega = message.omega;

  $("#NL").text(Math.trunc(v*100)/100 + "  Quacklometers");
  $("#NA").text(Math.trunc(omega*-100)/100 + "  Quackdianes");
  
  omega /= 8.0;
  
  ho = (120 - Math.abs(omega)*120).toString(); // HSL
  hv = (120 - Math.abs(v)*120).toString(); // HSL

  omega = (omega*50 + 50).toString();
  v = (v*50 + 50).toString();

  $("#indicadorV").css({"bottom" : v+"%"});
  $("#indicadorH").css({"right" : omega+"%"});
  $("#barraV").css({"background-color" : "hsl("+hv+", 100%, 35%)"});
  $("#barraH").css({"background-color" : "hsl("+ho+", 100%, 35%)"});

})


var camara = new ROSLIB.Topic({
  ros: ros,
  name: '/duckiebot/camera_node/image/compressed',
  messageType : 'sensor_msgs/Image'
});

camara.subscribe(function(message) {
  foto = message.data;
  $("#camara").attr("src", foto);
  console.log(1);

})

});