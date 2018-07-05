// ROS

$(function() {
  var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });

  ros.on('connection', function() {
    console.log('Connected to websocket server.');
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });

var speed = new ROSLIB.Topic({
  ros: ros,
  name: '/duckiebot/wheels_driver_node/car_cmd',
  messageType : 'duckietown_msgs/Twist2DStamped'
});

speed.subscribe(function(message) {
  v = message.v;
  omega = message.omega;

  $("#velocidad").text(Math.trunc(v*100)/100);
  $("#omega").text(Math.trunc(omega*-100)/100);
  
  omega /= 8.0;
  
  ho = (120 - Math.abs(omega)*120).toString(); // HSL
  hv = (120 - Math.abs(v)*120).toString(); // HSL

  omega = (omega*50 + 50).toString();
  v = (v*50 + 50).toString();

  $("#indicadorV").css({"bottom" : v+"%"});
  $("#indicadorH").css({"right" : omega+"%"});
  $("#barraV").css({"background-color" : "hsl("+hv+", 100%, 50%)"});
  $("#barraH").css({"background-color" : "hsl("+ho+", 100%, 50%)"});

  console.log(hv);
})

});