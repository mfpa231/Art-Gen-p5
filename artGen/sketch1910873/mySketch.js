let colourScheme;

function setup() {
  createCanvas(800, 400);
  background(100);
	colourScheme = 0;
}

function draw() {
  noStroke();

  // Loop 500 times to draw 500 flowers
  for (let i = 0; i < 500; i++) {
    // Move the origin point for each flower
    translate(random(width), random(height));
    
		if (colourScheme === 0) {
      fill(random(360))}
		else {
      fill(random(255), random(255), random(255))
    }
		
		for (let j = 0; j < 10; j++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5)}
  }
}

function mousePressed(){
	colourScheme = (colourScheme + 1) % 2;
  background(100);
}

// I asked chatgpt: How do I change this code to draw 500 flowers: 
//function setup() {
// 	createCanvas(800, 400);
// 	background(100);
// }

// function draw() {
// 	noStroke();
// 	for(i=0; i<500; i++){
// 	translate(580, 200);
// 	fill('orange');
//   for (let j = 0; j < 10; j ++) {
//     ellipse(0, 30, 20, 80);
//     rotate(PI/5);
// 	}

//   }}
//Its reply:
// function setup() {
//   createCanvas(800, 400);
//   background(100);
// }

// function draw() {
//   noStroke();

//   // Loop 500 times to draw 500 flowers
//   for (let i = 0; i < 500; i++) {
//     // Move the origin point for each flower
//     translate(random(width), random(height));
    
//     // Draw the flower
//     fill(random(360));
//     for (let j = 0; j < 10; j++) {
//       ellipse(0, 30, 20, 80);
//       rotate(PI/5);
//     }
//   }
// }
