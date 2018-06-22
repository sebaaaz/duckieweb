$(function() {
  $('a#calculate').bind('click', function() {
    $.post($SCRIPT_ROOT + '/_add_numbers', {}, function(data) {
      $("#result").text(data.result);
    });
    return false;
  });
});

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

 // Nodo que lee contador

var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/chatter',
    messageType : 'std_msgs/Int32'
  });


	listener.subscribe(function(message) {
		$("#numeros").text(message.data);
		console.log(message.data);
	})
});