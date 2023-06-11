function setup() {
  createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB);
}

function draw() {
	noFill();
	
	let lines = 300;
	
	for(i=0; i<lines; i++){
		let colour = i / lines * 360;
		beginShape();
		stroke(colour, 100, 100);
		line(noise(i)*300, 200,mouseX, mouseY);

	
	for(j=0; j<100; j++){
	
	let x = noise(10) * height;

	let y = i / (200 - 1) * width;
					vertex(x, y);

}
			endShape();
	}
}

function mouseClicked(){
  createCanvas(windowWidth, windowHeight);
	background(random(360),random(360),100);
  colorMode(HSB);
}
function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('myDesign', 'jpeg');
  }
}