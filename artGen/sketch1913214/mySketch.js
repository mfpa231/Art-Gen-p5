let h = window.innerHeight
let sentenceTopLeft;
let sentenceTopRight;
let sentenceBottomLeft;
let sentenceBottomRight;

let myFont;
function preload() {
  myFont = loadFont("Inconsolata-Black.otf");
}

function setup() {
  createCanvas(500, h);
  fill(255, 242, 230);
	textFont(myFont); 
}

function draw() {
  background(204);
  let randomColour = color(random(56), random(56), random(56)); // Generate a random color
  // Top left rectangle
  if ((mouseX <= 250) && (mouseY <= h/2)) {
    rect(0, 0, 250, h/2-1);
    if (!sentenceTopLeft) {
      var grammar = tracery.createGrammar(randomSentence);
      grammar.addModifiers(tracery.baseEngModifiers); 
      sentenceTopLeft = grammar.flatten("#sentence#");
    stroke(randomColour);    
		}	
		var line1 = sentenceTopLeft.split(' ');
		// Display each line of text on a new line
		textSize(15);
		textAlign(CENTER);
		for (var i = 0; i < line1.length; i++) {
      var textY = (h / 4 - line1.length * 9 / 2) + i * 9; // Calculate the y position
      text(line1[i], 125, textY);
    }}
  
  else if ((mouseX <= 250) && (mouseY > h/2)) {
    rect(0, h/2, 250, h/2-1);  
    if (!sentenceBottomLeft) {
      var grammar2 = tracery.createGrammar(randomSentence);
      grammar2.addModifiers(tracery.baseEngModifiers); 
      sentenceBottomLeft = grammar2.flatten("#sentence#");
    }
		var line2 = sentenceBottomLeft.split(' ');
		textSize(15);				
		textAlign(CENTER);
		for (var j = 0; j < line2.length; j++) {
      var text2Y = (h * 3 / 4 - line2.length * 9 / 2) + j * 9;
      text(line2[j], 125, text2Y);
    }}
  
  else if ((mouseX > 250) && (mouseY <= h/2)) {
    rect(250, 0, 250, h/2-1); 
    if (!sentenceTopRight) {
      var grammar3 = tracery.createGrammar(randomSentence);
      grammar3.addModifiers(tracery.baseEngModifiers); 
      sentenceTopRight = grammar3.flatten("#sentence#");
    }
var line3 = sentenceTopRight.split(' ');
		textSize(15);
		textAlign(CENTER);
		for (var k = 0; k < line3.length; k++) {
      var text3Y = (h / 4 - line3.length * 9 / 2) + k * 9;
      text(line3[k], 375, text3Y);
    } }
  
  // Bottom right rectangle
  else {
    rect(250, h/2, 250, h/2-1); 
    if (!sentenceTopRight) {
      var grammar4 = tracery.createGrammar(randomSentence);
      grammar4.addModifiers(tracery.baseEngModifiers); 
      sentenceTopRight = grammar4.flatten("#sentence#");
    }
var line4 = sentenceTopRight.split(' ');
		textSize(15);
		textAlign(CENTER);
		for (var l = 0; l < line4.length; l++) {
		var text4Y = (h * 3 / 4 - line4.length * 9 / 2) + l * 9; 
		text(line4[l], 375, text4Y);
} }
}


var randomSentence = {
    "sentence": [
      "Dear Diary, Today, #day# I felt #feeling# and it was #quant# #mood#. I really #hope# tomorrow will be #better#. I can't #believe# #friend# would do such a thing! "
    ],
    "day": [
     "Monday", 
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "feeling": [
      "sad",
      "awful",
      "depressed",
			"fatigued",
			"overwhelmed",
      "overloaded",
			"saturated",
      "anxious"
        ],
    "quant": [
     "really",
      "so",
      "extremely",
      "deeply"
    ],
    "mood": [
      "horrible",
      "awful",
      "draining",
      "terrible",
      "distressing",
			"tiring",
      "heartbreaking"
    ],
    "hope": [
      "hope",
      "expect",
      "ask that",
      "wish"
    ],
    
    "better": [
    "better",
    "inspiring",
    "a new beginning",
    "nicer"
    ],
    "believe": [
    "believe that",
    "imagine why",
    "understand why",
    "accept that"
    ],
    "friend": [
    "Amy",
    "Jessica",
    "Jordan",
    "Rachel",
    "Julia"
    ]
  }