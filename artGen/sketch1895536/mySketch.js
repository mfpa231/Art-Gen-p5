let angle = 0;

function setup() {
  createCanvas(600, 500, WEBGL);
}

function draw() {
  background(150);
  rotateX(angle);
  rotateY(angle * 1);
  rotateZ(angle * 0.2);
	
	let color = random(360);
	 
	push();
  translate(-170, 0, 0);
	fill(204, 153, 255);
  box(35);
  pop();
	
	push();
  translate(-115, 0, 0);
	fill(178, 102, 255);
  box(55);
  pop();
	
	push();
  translate(-40, 0, 0);
	fill(127, 0, 255);
  box(75);
  pop();
	
	push();
  translate(55, 0, 0);
	fill(102, 0, 204);
  box(95);
  pop();
	
	push();
  translate(50, -130, 0);
	fill(color, 0, 153);
  box(40);
  pop();
	
	push();
  translate(-50, 100, 0);
	fill(153, 0, color);
  box(20);
  pop();
	
angle += 0.02;


}

//chatgpt 'Generate a 3D Cube' code:
// let angle = 0;

// function setup() {
//   createCanvas(400, 400, WEBGL);
// }

// function draw() {
//   background(200);
//   rotateX(angle);
//   rotateY(angle * 1.3);
//   rotateZ(angle * 0.7);
//   box(100);
//   angle += 0.03;
// }

