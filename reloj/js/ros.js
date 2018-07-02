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
  name: '/speed',
  messageType : 'std_msgs/Float64'
});

speed.subscribe(function(message) {
  v = message.data;
  console.log(v);
  h = (120 - v*6/25).toString();
  v = (v*50 + 50).toString();
  $("#indicadorV").css({"bottom" : v+"%"});
  
})

});