var music;
var slider;

function setup() {
	createCanvas(600, 400);
	music = loadSound("techno.mp3", load);
	background(0);
	colorMode(HSB);
}

function load(){
	music.play();
	music.loop();
}
let noiseScale=0.02;

function draw() {
  background(0);

  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(random(255), 204, 100);
    line(x, mouseY+noiseVal*80, x, height);
	}
let vol = map(mouseY, 0, height, 4, 0);
  music.setVolume(vol);
	
}
