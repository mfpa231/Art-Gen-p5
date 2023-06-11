let wiw = window.innerWidth;
let wih = window.innerHeight;
let fillColor;

function setup() {
  createCanvas(wiw, wih);
	t=0;
	fillColor = color(random(255), random(255), random(255));
}

function draw() {
	noStroke();

	background(0, 8);
  fill(fillColor);
  
	push();
	ellipse((wiw/2)*noise(frameCount*t),(wih/2)*noise(t),60*noise(t),60*noise(t));
	t = t + 0.01;
	pop();
	
  push();
  translate(100, 200);
	ellipse((wiw/4)*noise(frameCount*t),(wih)*noise(t),50*noise(t),50*noise(t));
	t = t + 0.02;
  pop();
  
  push();
  translate(300, 200);
  ellipse((wiw)*noise(frameCount*t),(wih)*noise(t),40*noise(t),40*noise(t));
	t = t + 0.03;
  pop();
  
  push();
  translate(500, 200);
  ellipse((wiw)*noise(frameCount*t),(wih/4)*noise(t),30*noise(t),30*noise(t));
	t = t + 0.04;
  pop();
}