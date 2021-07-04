const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

function setup() {
	createCanvas(1520, 680);
  background(225);
  WebSocket
}

var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function draw() {
  strokeWeight(30)
	fill(0, 0, 0);
  if(mouseIsPressed){
	  line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

