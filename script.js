function setup() {
	createCanvas(1520, 680);
  background(225);
}

var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function draw() {
	fill(0, 0, 0);
  if(mouseIsPressed){
	  line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = -2;
			break;
		case 39:
		case 68:
			xspeed = 2;
			break;
		case 38:
		case 87:
			yspeed = -2;
			break;
		case 40:
		case 83:
			yspeed = 2;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = 0;
			break;
		case 39:
		case 68:
			xspeed = 0;
			break;
		case 38:
		case 87:
			yspeed = 0;
			break;
		case 40:
		case 83:
			yspeed = 0;
			break;
	}
}