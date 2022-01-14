// Inspiration from Daniel's Shiffman coding Challenges

var stars = [];
let bg;
let asteroid1; 
let asteroid2; 
let asteroid3; 
let asteroid4; 
let asteroid5; 
let cockpit; 
let cockpitShow = 1;
let spaceSound;
let radio;
let radioOn = 0;
let radioDelay = 0.0015;

function preload() {
	bg = loadImage('stars.jpg');
	asteroid1 = loadImage('asteroid1.png');
	asteroid2 = loadImage('asteroid2.png');
	asteroid3 = loadImage('asteroid3.png');
	asteroid4 = loadImage('asteroid4.png');
	asteroid5 = loadImage('asteroid5.png');
	cockpit = loadImage('cockpit.png');
	spaceSound = loadSound('space.mp3');
	radio = loadSound('Radio.mp3');
}

function setup() {
	noCursor();
	createCanvas(windowWidth,windowHeight,P2D);
	for (var i = 0; i < map(width*height,266454,1722240,100,850); i++) {
    stars[i] = new Star();
  }
	spaceSound.play();
	spaceSound.loop();
}

function draw() {
	if (frameRate() > 60) {
		stars.push(new Star());
	}
	background(bg);
  translate(width *.6, height *.7);
	if (mouseIsPressed){
		background(0);
		mouseReleased
	}

	if (random() < radioDelay && radioOn===0) {
		radio.play();
		radioOn = (radioOn+1)%2;
		radioDelay = 0.0004;
	}
	
	if (!radio.isPlaying() && radioOn===1) {
		radioOn = (radioOn+1)%2;
	}
	
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
		
	if (cockpitShow) {
		translate(-width *.6, -height *.7);
		image(cockpit, 0, 0, width, height+300);
	} else {
	}
}


function mouseReleased() {
  cockpitShow = (cockpitShow +1) %2;
}