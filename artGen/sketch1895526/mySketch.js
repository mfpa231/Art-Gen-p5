let radius = 200; // Radius of the sphere
let detail = 10; // Number of segments in the sphere

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
	music = loadSound("techno.mp3", load);
}

function load(){
	music.play();
	music.loop();
}

function draw() {
	let color = random(360);
 	background(random(100));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  sphere(radius, detail, detail);
	fill(100, noise(color));
	stroke(map(mouseX,0,width,0,255),100, map(mouseY,0, height,0,255)) //line colours rgb
}

function mouseClicked() {
  radius += 10;
}


// I used chatgpt: generate a sphere using p5 js
// It gave me this code:
// let radius = 100;
// let detail = 24; 

// function setup() {
//   createCanvas(400, 400, WEBGL);
// }

// function draw() {
//   background(220);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   sphere(radius, detail, detail);
// }
