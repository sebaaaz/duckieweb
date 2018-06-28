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


var fecha = new ROSLIB.Topic({
  ros : ros,
  name : '/fecha',
  messageType : 'std_msgs/String'
});

var speed = new ROSLIB.Topic({
  ros: ros,
  name: '/speed',
  messageType : 'std_msgs/Int32'
});

speed.subscribe(function(message) {
  v = message.data;
  h = (120 - v*6/25).toString();
  $("#barra").css({"width" : v+"px" , "background-color" : "hsl("+h+", 100%, 50%)"})
  $(".circle").val(v);
})


fecha.subscribe(function(message) {
	$("#fecha").text(message.data);
})

});